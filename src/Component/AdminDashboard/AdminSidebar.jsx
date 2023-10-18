import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [propertiesShowDropdown, setPropertiesShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const togglePropertiesDropdown = () => {
    setPropertiesShowDropdown(!propertiesShowDropdown);
  };

  return (
    <div className="bg-orange-800 text-white p-4">
      <ul>
        <Link to="/AdminAnalytical">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">Dashboard</li>
        </Link>
        <Link to="/EditHomepage">
          <li className="p-2 hover-bg-orange-400 cursor-pointer w-full">Edit Homepage</li>
        </Link>
        <li
          className={`p-2 cursor-pointer w-full ${showDropdown ? 'bg-orange-400' : ''}`}
          onClick={toggleDropdown}
        >
          Manage Users
          <ul className={`list-none ${showDropdown ? 'block' : 'hidden'}`}>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/GuestsListings">Guests</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/HostsListings">Hosts</Link>
            </li>
          </ul>
        </li>

        <li
          className={`p-2 cursor-pointer w-full ${propertiesShowDropdown ? 'bg-orange-400' : ''}`}
          onClick={togglePropertiesDropdown}
        >
          Properties
          <ul className={`list-none ${propertiesShowDropdown ? 'block' : 'hidden'}`}>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/PropertyList">Properties Listings</Link>
            </li>
            <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">
              <Link to="/ApartmentListingApproval">Apartment Listing Approval</Link>
            </li>
          </ul>
        </li>
        <Link to="/UserVerificationPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">User Verification Page</li>
        </Link>
        <Link to="/AdminRolesPage">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">Admin Roles</li>
        </Link>
        <Link to="/">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">Profile</li>
        </Link>
        <Link to="/">
          <li className="p-2 hover:bg-orange-400 cursor-pointer w-full">Settings</li>
        </Link>
      </ul>
    </div>
  );
}
