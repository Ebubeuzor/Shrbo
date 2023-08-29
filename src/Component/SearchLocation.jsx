import React, { useState } from "react";
import Select from "react-select";
import { Modal, Button } from "antd";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function GuestModal({ visible, onCancel, onOk, adults }) {
  const [adultCount, setAdultCount] = useState(adults);

  const handleDecrease = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleIncrease = () => {
    setAdultCount(adultCount + 1);
  };

  return (
    <Modal
      title="Select Guests"
      open={visible}
      onCancel={onCancel}
      onOk={() => onOk(adultCount)}
    >
      <div className="flex items-center space-x-4">
        <span>Adults:</span>
        <Button shape="circle" onClick={handleDecrease}>
          -
        </Button>
        <span>{adultCount}</span>
        <Button shape="circle" onClick={handleIncrease}>
          +
        </Button>
      </div>
    </Modal>
  );
}

export default function SearchLocation() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dates, setDates] = useState([]);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [adults, setAdults] = useState(1);
  const [checkInDate, setCheckInDate] = useState(null); // State for check-in date
  const [checkOutDate, setCheckOutDate] = useState(null); // State for check-out date

  const handleGuestModalOk = (newAdults) => {
    setGuestModalVisible(false);
    setAdults(newAdults);
  };

  return (
    <form className="absolute bottom-10 w-3/4 mx-auto   bg-slate-400 left-0 right-0   justify-center text-white">
      <div className="">
        <div className=" flex space-x-14 justify-center bg-orange-400 uppercase p-10 items-center text-center">
          <div className="search md:w-[200px] border border-gray-300 shadow-sm p-4">
            <Select
              className="text-black"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </div>
          <div className="date flex space-x-3">
            <div className="md:w-[100px] border border-gray-300 shadow-sm p-4">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check-in "
                minDate={new Date()}
                className="text-black"
              />
            </div>
            <div className="md:w-[100px] border border-gray-300 shadow-sm p-4 w-full">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check-out "
                className="text-black"
              />
            </div>
          </div>
          <div className="guest md:w-[200px] border border-gray-300 shadow-sm p-4">
            <div onClick={() => setGuestModalVisible(true)}>guest</div>
            <GuestModal
              visible={guestModalVisible}
              onCancel={() => setGuestModalVisible(false)}
              onOk={handleGuestModalOk}
              adults={adults}
            />
          </div>
          <div className="submit md:w-[200px] border border-gray-300 shadow-sm p-4">
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    </form>
  );
}
