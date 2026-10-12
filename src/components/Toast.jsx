import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toastMessage, hideToast } = useCart();

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      hideToast();
    }, 3800);
    return () => clearTimeout(timer);
  }, [toastMessage, hideToast]);

  if (!toastMessage) return null;

  const getIcon = () => {
    switch (toastMessage.type) {
      case 'success':
        return <CheckCircle2 size={20} color="#25D366" />;
      case 'error':
        return <AlertCircle size={20} color="#E53E3E" />;
      default:
        return <Info size={20} color="#1877A8" />;
    }
  };

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast ${toastMessage.type || 'info'}`}>
        {getIcon()}
        <span style={{ flex: 1 }}>{toastMessage.message}</span>
        <button
          onClick={hideToast}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            cursor: 'pointer',
            padding: '2px',
            display: 'flex',
            alignItems: 'center'
          }}
          aria-label="Tutup notifikasi"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
