// Loading.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    </div>,
    document.getElementById('modal')
  );
};

export default Loading;
