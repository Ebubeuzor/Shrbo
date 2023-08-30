import React, { useState } from "react";
import Select, { components } from "react-select"; // Import components from react-select
import { Modal, Button } from "antd";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const options = [
  { value: "Lekki", label: "Lekki" },
  { value: "Victoria Island", label: "Victoria Island" },
  { value: "Satellite town", label: "Satellite town" },
];

function GuestModal({
  visible,
  onCancel,
  onOk,
  adults,
  children,
  pets,
  infants,
}) {
  const [adultCount, setAdultCount] = useState(adults);
  const [childCount, setChildCount] = useState(children);
  const [petCount, setPetCount] = useState(pets);
  const [infantCount, setInfantCount] = useState(infants);

  const handleDecrease = (setter, value) => {
    if (value > 0) {
      setter(parseInt(value, 10) - 1);
    }
  };

  const handleIncrease = (setter, value) => {
    setter(parseInt(value, 10) + 1);
  };
  return (
    <Modal
      title="Select Guests"
      open={visible}
      onCancel={onCancel}
      onOk={() => onOk(adultCount, childCount, petCount, infantCount)}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Adults:</span> <br />
            <p className="text-gray-400">Ages 13 or above</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setAdultCount, adultCount)}
            >
              -
            </Button>
            <span>{adultCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setAdultCount, adultCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Children:</span>
            <p className="text-gray-400">Ages 2–12</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setChildCount, childCount)}
            >
              -
            </Button>
            <span>{childCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setChildCount, childCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Pets:</span>
            <p>
              <Link className="text-gray-400 underline">
                Bringing a service animal?
              </Link>
            </p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setPetCount, petCount)}
            >
              -
            </Button>
            <span>{petCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setPetCount, petCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Infants:</span>
            <p className="text-gray-400">Under 2</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setInfantCount, infantCount)}
            >
              -
            </Button>
            <span>{infantCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setInfantCount, infantCount)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function SearchLocation() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dates, setDates] = useState([]);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [infants, setInfants] = useState(0);

  const [checkInDate, setCheckInDate] = useState(null); // State for check-in date
  const [checkOutDate, setCheckOutDate] = useState(null); // State for check-out date

  const handleGuestModalOk = (newAdults) => {
    setGuestModalVisible(false);
    setAdults(newAdults);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            d="M256 0C156.48 0 76 80.48 76 180c0 92.55 127.39 290.31 132.45 298.11a15.994 15.994 0 0 0 23.1 0c5.06-7.8 132.45-205.56 132.45-298.11 0-99.52-80.48-180-180-180zm0 268a60 60 0 1 1 60-60 60 60 0 0 1-60 60z"
            fill="black"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <form className="absolute -bottom-20  md:-bottom-10 md:w-3/4 mx-auto   left-0 right-0 w-[90%]   justify-center text-gray-400">
      <div className="">
        <div className=" flex   justify-center flex-col md:flex-row bg-orange-400 md:rounded-full rounded-3xl  md:p-10 p-4 items-center text-center md:space-x-4  space-y-4 md:space-y-0">
          <div className="search md:w-[450px] flex items-center justify-between md:rounded-full w-full md:h-[80px] border border-gray-300 shadow-sm p-2 bg-white rounded-full">
            <Select
              className="text-black"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={"Choose Location"}
              components={{ DropdownIndicator }} // Use the custom DropdownIndicator
            />
          </div>
          <div className="date flex flex-col  md:flex-row w-full md:w-auto  md:space-x-4 space-y-3 md:space-y-0">
            <div className=" border md:rounded-full  border-gray-300 shadow-sm p-3 bg-white  md:h-[80px] flex items-center  justify-between rounded-full">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check-in "
                minDate={new Date()}
                className="text-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
              >
                <rect
                  x="48"
                  y="80"
                  width="416"
                  height="384"
                  rx="48"
                  ry="48"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="12"
                />
                <path
                  d="M352 16h32a16 16 0 0 1 16 16v32H112V32a16 16 0 0 1 16-16h32V0h32v16h192v-16h32a16 16 0 0 1 16 16v32h32z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="32"
                />
                <path
                  d="M112 112h288v128H112z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="32"
                />
              </svg>
            </div>
            <div className="  border md:rounded-full border-gray-300 shadow-sm p-3  bg-white flex items-center justify-between rounded-full">
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check-out "
                className="text-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
              >
                <rect
                  x="48"
                  y="80"
                  width="416"
                  height="384"
                  rx="48"
                  ry="48"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="12"
                />
                <path
                  d="M352 16h32a16 16 0 0 1 16 16v32H112V32a16 16 0 0 1 16-16h32V0h32v16h192v-16h32a16 16 0 0 1 16 16v32h32z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="32"
                />
                <path
                  d="M112 112h288v128H112z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="32"
                />
              </svg>
            </div>
          </div>
          <div className="guest md:w-[200px] w-full border md:rounded-full border-gray-300 shadow-sm p-3 bg-white flex justify-between  md:h-[80px] items-center rounded-full">
            <div onClick={() => setGuestModalVisible(true)} className="w-full text-start">
              Guest
            </div>
            <GuestModal
              visible={guestModalVisible}
              onCancel={() => setGuestModalVisible(false)}
              onOk={handleGuestModalOk}
              adults={adults}
              children={children}
              pets={pets}
              infants={infants}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path
                d="M256 288c88.37 0 160-71.63 160-160S344.37 -32 256 -32 96 41.63 96 128s71.63 160 160 160zm0 32c-74.88 0-135.75 49.07-160 117.17-4.88 15.08 7.75 29.83 23.33 29.83H392.34c15.58 0 28.21-14.75 23.33-29.83-24.25-68.1-85.12-117.17-160-117.17zM256 32c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128S326.69 32 256 32zm0 224c-37.59 0-71.47 14.79-96.97 38.9-20.41 20.72-31.21 47.62-31.21 75.1h384c0-27.48-10.8-54.38-31.21-75.1C327.47 270.79 293.59 256 256 256z"
                fill="black"
              />
            </svg>
          </div>
          <div className="submit md:w-[200px] w-full md:rounded-full border border-gray-300 shadow-sm p-3 bg-white  md:h-[80px] items-center flex text-center justify-center  rounded-full">
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
    </form>
  );
}
