import React, { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ConfirmPopup = ({ message, onConfirm, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    await onConfirm();
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Confirm Action</h2>
          <button onClick={onCancel}>
            <MdOutlineClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <p className="mt-4 text-gray-700">{message}</p>
        <div className="flex justify-end mt-6 space-x-3">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 bg-red-600 text-white rounded-lg flex items-center space-x-2 ${
              isLoading ? "opacity-50 pointer-events-none" : "hover:bg-red-700"
            }`}
            onClick={handleConfirm}
          >
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
