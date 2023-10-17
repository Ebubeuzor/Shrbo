import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
