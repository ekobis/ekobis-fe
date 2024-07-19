// ErrorModal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const ErrorModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'rgb(69, 53, 193)' }}>
          Ürün eklerken hata oluştu.
        </h2>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 rounded bg-customPurple text-white hover:bg-customBlue"
        >
          Kapat
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default ErrorModal;
