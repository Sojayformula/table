import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose("");
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50" id="modal-overlay" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
         &tines;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// &times; {/* Close button */}