import React from "react";

export default function RateHouseModal({ isOpen, onClose, houseDetails }) {
  // Check if houseDetails is null or undefined
  if (!houseDetails) {
    return null; // Return null if houseDetails is not available yet
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-2xl font-semibold mb-4">Rate Your Stay?</h2>
        <p className="mb-4">
          You recently stayed at {houseDetails.name} in {houseDetails.location}. How would you rate your experience?
        </p>
       <form action="">
        <textarea placeholder="comment..." className="w-full bg-slate-200 rounded-2xl p-3">

        </textarea>


       </form>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Close
          </button>
        </div>
      </div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-50"
      ></div>
    </div>
  );
}
