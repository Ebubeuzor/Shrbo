import React, { useState } from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen);

  const handleClose = () => {
    setIsPopupOpen(false);
    onClose();
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
