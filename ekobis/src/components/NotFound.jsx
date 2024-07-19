import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

const ErrorNotFound = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); 
  };

  const handleHome = () => {
    navigate('/'); 
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4" style={{ color: 'rgb(69, 53, 193)' }}>
          Sayfa bulunamadı...
        </h2>
        <button
          onClick={handleClose}
          className="mt-4 py-2 px-4 rounded bg-customGreen text-white hover:bg-customCyan mr-2"
        >
          Önceki Sayfa
        </button>
        <button
          onClick={handleHome}
          className="mt-4 py-2 px-4 rounded bg-customBlue text-white hover:bg-customPurple"
        >
          Anasayfa
        </button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default ErrorNotFound;
