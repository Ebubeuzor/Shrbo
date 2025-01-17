import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DateIcon from "../../assets/svg/date-icon.svg";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Popover, Button, Space } from "antd";
import { Link } from "react-router-dom";
import Popup from "../../hoc/Popup";
import ContactInfo from "./ContactInfo";

// import 'antd/dist/antd.css';

const BookingInfo = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [infants, setInfants] = useState(0);
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  function showModal(e) {
    e.preventDefault();
    setIsModalVisible(true);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  const handleCheckIn = (date) => {
    setCheckInDate(date);
  };
  const handlecheckOut = (date) => {
    setCheckOutDate(date);
  };

  const toggleDatePicker = (inputId) => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatDateRange = (checkInDate, checkOutDate) => {
    if (checkInDate && checkOutDate) {
      const checkInMonth = checkInDate.toLocaleString("default", {
        month: "short",
      });
      const checkInDay = checkInDate.getDate();
      const checkOutMonth = checkOutDate.toLocaleString("default", {
        month: "short",
      });
      const checkOutDay = checkOutDate.getDate();
      return `${checkInMonth} ${checkInDay} - ${checkOutMonth} ${checkOutDay}`;
    }
    return "";
  };

  return (
    <div>
      <div className="reservation-input mb ">
        <form>
          {/* <!--Date--> */}
          <div className="mx-1 mt whitespace-pre-wrap box-border text-base">
            {checkInDate && checkOutDate
              ? formatDateRange(checkInDate, checkOutDate)
              : "Oct 8 2023 - Oct 20 2023"}{" "}
            {/* Set a default text when no date is selected */}
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {/* <!--check In name input--> */}
            <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg shadow-sm relative">
              <img src={DateIcon} className="w-4" alt="Check In" />
              <DatePicker
                id="checkInInput" // Assign an ID to the check-in input
                selected={checkInDate}
                onChange={handleCheckIn}
                placeholderText="22/10/2023"
                dateFormat="dd/MM/yyyy" // You can customize the date format
              />

              <div
                onClick={() => toggleDatePicker("checkInInput")} // Open the check-in datepicker when clicked
                className="cursor-pointer"
              >
                {checkInDate ? (
                  formatDate(checkInDate)
                ) : (
                  <span className="text-gray-500">Edit</span>
                )}
              </div>
            </div>

            {/* <!--check out input--> */}
            <div className="flex items-center justify-between border border-gray-300 p-2 rounded-lg shadow-sm">
              <img src={DateIcon} className="w-4" alt="Check out" />
              <DatePicker
                id="checkOutInput" // Assign an ID to the check-out input
                selected={checkOutDate}
                onChange={handlecheckOut}
                className=""
                placeholderText="28/10/2023"
                dateFormat="dd/MM/yyyy" // You can customize the date format
              />
              <div
                onClick={() => toggleDatePicker("checkOutInput")} // Open the check-out datepicker when clicked
                className="cursor-pointer"
              >
                {checkOutDate ? (
                  formatDate(checkOutDate)
                ) : (
                  <span className="text-gray-500">Edit</span>
                )}
              </div>
            </div>
          </div>

          {/* <!--Traveler input--> */}

          <div className=" relative box-border py-4  ">
            <div className=" overflow-hidden relative border rounded min-h-[50px] block box-border ">
              <label className=" text-xs font-normal px-4  overflow-hidden absolute text-ellipsis whitespace-nowrap  ">
                Guests
              </label>
              {/* <input className=' border rounded text-base font-normal '/> */}
              <MyDropdown
                adults={adults}
                children={children}
                pets={pets}
                infants={infants}
              />
              {/* <MyPopover /> */}

              {/* <ListingFormModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
               */}
            </div>
          </div>

          {/* <!--Subscribe newsletter checkbox--> */}
        </form>
      </div>

      {/* 
           Price detailsonly visible on Mobile View */}

      <div className=" block md:hidden  mt-8 ">
        <div className="relative">
          <div className=" box-border">
            <div className=" pb-6">
              <section>
                <div className=" font-semibold text-2xl">
                  <h2>Price details</h2>
                </div>
              </section>
            </div>
          </div>

          {/* 1 */}
          <div className=" pb-4 border-b">
            <div className=" mb-2 box-border block">
              <div className=" flex items-end justify-between break-words    ">
                <div className=" block box-border">
                  <span>$140.00 x 2 nights</span>
                </div>
                <div className=" ml-4 whitespace-nowrap block box-border   ">
                  $280.00
                </div>
              </div>
            </div>

            <div className=" mb-2 box-border block">
              <div className=" relative box-border ">
                <div className=" overflow-hidden max-h-24 relative   ">
                  <div className=" ">
                    <div className=" mb-2 flex justify-between items-end break-words  ">
                      <button
                        className=" overflow-visible m-0 bg-transparent cursor-pointer outline-none   "
                        type="button"
                        onClick={toggleShow}
                      >
                        <span className=" capitalize">Host Fees</span>
                        <span className=" pl-2 box-border ">
                          <span
                            className={`w-3 h-3 inline-block stroke-1 stroke-current transition ${
                              show && "rotate-180 transition-transform"
                            }`}
                          >
                            <svg
                              focusable="false"
                              data-id="SVG_CHEVRON_DOWN__12"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11 4L6 9 1 4"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </button>
                      <div className=" ml-4 ">$194.00</div>
                    </div>

                    <div
                      className={`px-4 pb-5  rounded bg-slate-200   ${
                        show ? " block  " : " hidden  "
                      } `}
                    >
                      <div className=" flex items-end justify-between break-words mb-2    ">
                        <div>Damage Waiver</div>
                        <div className=" break-normal text-slate-700">$48</div>
                      </div>
                      <div className=" flex items-end justify-between break-words     ">
                        <div>Cleaning Fee</div>
                        <div className=" break-normal text-slate-700 ">
                          $148
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-2 box-border block">
              <div className=" flex items-end justify-between break-words    ">
                <div className=" block box-border">
                  <span>Service Fee</span>
                </div>
                <div className=" ml-4 whitespace-nowrap block box-border   ">
                  $20.00
                </div>
              </div>
            </div>
            <div className=" mb-2 box-border block">
              <div className=" flex items-end justify-between break-words    ">
                <div className=" block box-border">
                  <span>Tax</span>
                </div>
                <div className=" ml-4 whitespace-nowrap block box-border   ">
                  $18.00
                </div>
              </div>
            </div>
          </div>
          {/* Total */}
          <div className=" border-b py-4">
            <div className=" font-semibold text-lg flex items-end justify-between break-words    ">
              <span> Total </span>
              <div className=" whitespace-nowrap break-normal ">$566.54</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:rounded-t-lg md:mb-1 mt-3 ">
        <div className=" mt-6 md:mt-8">
          <div>
            <section>
              <div className=" mb-6 box-border block ">
                <h3 className=" text-left font-semibold text-xl mb-3 ">
                  Cancellation policy
                </h3>
                <div className="cancellation box-border gap-1  flex">
                  <span className=" font-medium text-base">
                    Free cancellation
                  </span>
                  <label>until</label>
                  <div
                    className=" inline-block relative font-medium text-blue-600 underline cursor-pointer  "
                    onClick={showModal}
                  >
                    <span>Oct 10,2023</span>
                  </div>
                </div>

                {/*                                       
                                // handles the modal  when price details is clicked  */}
                <Popup
                  isModalVisible={isModalVisible}
                  handleCancel={handleCancel}
                  title={"Cancellation policy"}
                >
                  <label>hello</label>
                </Popup>
              </div>
              <div className=" relative block box-border"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;

function MyDropdown({ adults, children, pets, infants }) {
  const [adultCount, setAdultCount] = useState(adults);
  const [childCount, setChildCount] = useState(children);
  const [petCount, setPetCount] = useState(pets);
  const [infantCount, setInfantCount] = useState(infants);
  const [visible, setVisible] = useState(false);

  const handleDecrease = (setter, value) => {
    if (value > 0) {
      setter(parseInt(value, 10) - 1);
    }
  };

  const handleIncrease = (setter, value) => {
    setter(parseInt(value, 10) + 1);
  };

  const handleSubmit = () => {
    // e.preventDefault();
    setVisible(!visible);
  };

  const items = [
    <div
      key={1}
      className="flex md:p-8 p-4 gap-2  lg:w-[520px] flex-col space-y-4"
    >
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
    </div>,
  ];

  return (
    <Dropdown
      trigger={["click"]}
      onOpenChange={handleSubmit}
      open={visible}
      dropdownRender={(menu) => (
        <div className=" bg-white">
          <Space className="p-2 flex-col w-full shadow-md">
            {items}
            <Button
              className="bg-orange-700"
              type="primary"
              onClick={handleSubmit}
            >
              {" "}
              Click me!
            </Button>
          </Space>
        </div>
      )}
    >
      <Space>
        <button
          type="button"
          className=" block m-4 cursor-pointer overflow-hidden text-ellipsis text-start whitespace-nowrap text-base font-normal      "
        >
         <span className="block">Guests</span>
           <span className="text-gray-500">
              {adultCount + childCount} guests {infantCount!=0&& `,${infantCount} infant`} {petCount!=0&& `,${petCount} pet`} 
           </span>
        </button>
      </Space>
    </Dropdown>
  );
}
