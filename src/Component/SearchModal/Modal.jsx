import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Modal = ({ isOpen, onClose }) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to the server
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className="bg-white p-4 rounded-lg w-full h-full">
        <div className="mb-4">
          <label htmlFor="location" className="block font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Check-in Date</label>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInDateChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Check-out Date</label>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block font-semibold mb-2">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Check Availability
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-700 font-semibold py-2 border rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
