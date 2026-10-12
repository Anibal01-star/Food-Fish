import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { PRODUCTS } from '../data/products.js';

const CART_STORAGE_KEY = 'foodfish_cart';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // Initialize state safely from LocalStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return [];

      // Validasi dan sinkronisasi dengan data produk terkini
      const validatedItems = [];
      for (const item of parsed) {
        if (!item || !item.productId || typeof item.quantity !== 'number') continue;
        
        // Cari produk di katalog aktif
        const currentProduct = PRODUCTS.find((p) => p.id === item.productId);
        
        // Hanya masukkan produk yang masih ada di katalog dan tersedia
        if (currentProduct && currentProduct.inStock && item.quantity > 0) {
          validatedItems.push({
            productId: currentProduct.id,
            quantity: Math.max(1, Math.floor(item.quantity)),
            product: currentProduct // selalu gunakan data produk katalog terkini
          });
        }
      }
      return validatedItems;
    } catch (err) {
      console.warn("Gagal memuat keranjang dari LocalStorage, mereset keranjang.", err);
      return [];
    }
  });

  // Toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((message, type = 'info') => {
    setToastMessage({ message, type, id: Date.now() });
  }, []);

  const hideToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  // Simpan ke LocalStorage setiap kali cartItems berubah (hanya simpan productId dan quantity untuk keamanan & konsistensi harga)
  useEffect(() => {
    try {
      const payload = cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity
      }));
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.error("Gagal menyimpan keranjang ke LocalStorage", err);
    }
  }, [cartItems]);

  // Tambah produk ke keranjang
  const addToCart = useCallback((product, requestedQty = 1) => {
    if (!product || !product.id) return { success: false, message: "Produk tidak valid." };

    if (!product.inStock) {
      showToast(`Maaf, ${product.name} sedang habis.`, 'error');
      return { success: false, message: "Produk sedang habis." };
    }

    const qty = Math.max(1, Math.floor(requestedQty || 1));

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.productId === product.id);

      if (existingIndex >= 0) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + qty;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          product: product // pastikan referensi produk terbaru
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            productId: product.id,
            quantity: qty,
            product: product
          }
        ];
      }
    });

    showToast(`Berhasil menambahkan ${qty}x ${product.name} ke keranjang!`, 'success');
    return { success: true };
  }, [showToast]);

  // Perbarui jumlah produk
  const updateQuantity = useCallback((productId, newQuantity) => {
    const qty = Math.floor(newQuantity);

    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: qty };
        }
        return item;
      });
    });
  }, []);

  // Hapus produk dari keranjang
  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) => {
      const target = prevItems.find((item) => item.productId === productId);
      if (target) {
        showToast(`${target.product.name} dihapus dari keranjang.`, 'info');
      }
      return prevItems.filter((item) => item.productId !== productId);
    });
  }, [showToast]);

  // Kosongkan keranjang
  const clearCart = useCallback(() => {
    setCartItems([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch {
      // ignore
    }
    showToast("Keranjang belanja telah dikosongkan.", 'info');
  }, [showToast]);

  // Hitung total item & total harga produk (selalu menggunakan harga katalog terkini)
  const totalItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const totalProductPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItemCount,
    totalProductPrice,
    toastMessage,
    showToast,
    hideToast
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus digunakan di dalam CartProvider");
  }
  return context;
};
