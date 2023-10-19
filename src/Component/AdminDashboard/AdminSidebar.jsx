import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa"; // You can use any icon from React-Icons

export default function AdminSidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [propertiesShowDropdown, setPropertiesShowDropdown] = useState(false);
  const [financeShowDropdown, setFinanceShowDropdown] = useState(false);
  const [bookingStatusShowDropdown, setBookingStatusShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const togglePropertiesDropdown = () => {
    setPropertiesShowDropdown(!propertiesShowDropdown);
  };

  const toggleFinanceDropdown = () => {
    setFinanceShowDropdown(!financeShowDropdown);
  };

  const toggleBookingStatusDropdown = () => {
    setBookingStatusShowDropdown(!financeShowDropdown);
  };

  return (
    <div className="bg-orange-800 text-white p-4">
      <ul>
        <Link to="/AdminAnalytical">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Dashboard
          </li>
        </Link>
        <Link to="/EditHomepage">
          <li className="p-2 hover-bg-orange-400 cursor-pointer w-full">
            Edit Homepage
          </li>
        </Link>
        <li
          className={`p-2 cursor-pointer w-full ${showDropdown ? "" : ""}`}
          onClick={toggleDropdown}
        >
          <div className="flex justify-between items-center">
            Manage Users <FaAngleDown />
          </div>{" "}
          <ul
            className={`list-none ${
              showDropdown ? "block bg-orange-300" : "hidden"
            }`}
          >
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/GuestsListings">Guests</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/HostsListings">Hosts</Link>
            </li>
          </ul>
        </li>

        <li
          className={`p-2 cursor-pointer w-full ${
            propertiesShowDropdown ? "" : ""
          }`}
          onClick={togglePropertiesDropdown}
        >
          <div className="flex justify-between items-center">
            Property <FaAngleDown />
          </div>
          <ul
            className={`list-none ${
              propertiesShowDropdown ? "block bg-orange-300" : "hidden"
            }`}
          >
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/PropertyList">Properties Listings</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/ApartmentListingApproval">
                Apartment Listing Approval
              </Link>
            </li>
          </ul>
        </li>

        <li
          className={`p-2 cursor-pointer w-full ${
            financeShowDropdown ? "" : ""
          }`}
          onClick={toggleFinanceDropdown}
        >
          <div className="flex justify-between items-center">
            Finance <FaAngleDown />
          </div>
          <ul
            className={`list-none ${
              financeShowDropdown ? "block bg-orange-300" : "hidden"
            }`}
          >
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/DisplayBookingsPaid">Paid Payment</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/FailedPayment">Failed Payment</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/ReceivablePayable">Recievable & Payable</Link>
            </li>
          </ul>
        </li>

        <li
          className={`p-2 cursor-pointer w-full ${
            bookingStatusShowDropdown ? "" : ""
          }`}
          onClick={toggleBookingStatusDropdown}
        >
          <div className="flex justify-between items-center">
            Booking Status <FaAngleDown />
          </div>
          <ul
            className={`list-none ${
              bookingStatusShowDropdown ? "block bg-orange-300" : "hidden"
            }`}
          >
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/BookingTable">New Booking</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/CompletedBooking">Completed Booking</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/ReceivablePayable">Recievable & Payable</Link>
            </li>
          </ul>
        </li>
        <Link to="/UserVerificationPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            User Verification Page
          </li>
        </Link>
        <Link to="/AdminRolesPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Admin Roles
          </li>
        </Link>
        <Link to="/AdminSupportPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Admin Support Page
          </li>
        </Link>
        <Link to="/AnnouncementPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Announcement Page
          </li>
        </Link>

        <Link to="/">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Profile
          </li>
        </Link>
        <Link to="/">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
            Settings
          </li>
        </Link>
      </ul>
    </div>
  );
}
