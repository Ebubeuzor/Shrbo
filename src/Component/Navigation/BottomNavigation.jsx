import React from 'react';
import { FaSearch, FaHeart, FaSuitcase, FaInbox, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BottomNavigation() {
  return (
    <div className=" md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 flex justify-center z-50">
      <div className="flex justify-between w-3/4">
        <Link to="/" className="cursor-pointer flex flex-col items-center">
          <FaSearch className="text-2xl text-orange-400 mx-auto" />
          <span className='text-[10px] text-orange-400'>Explore</span>
        </Link>
        <Link to="/wishlist" className="cursor-pointer flex flex-col items-center">
          <FaHeart className="text-2xl mx-auto" />
          <span className='text-[10px]'>Wishlist</span>
        </Link>
        <Link to="/trip" className="cursor-pointer flex flex-col items-center">
          <FaSuitcase className="text-2xl mx-auto" />
          <span className='text-[10px]'>Trips</span>
        </Link>
        <Link to="/chat" className="cursor-pointer flex flex-col items-center">
          <FaInbox className="text-2xl mx-auto" />
          <span className='text-[10px]'>Inbox</span>
        </Link>
        <Link to="/profile" className="cursor-pointer flex flex-col items-center">
          <FaUser className="text-2xl mx-auto" />
          <span className='text-[10px]'>Profile</span>
        </Link>
      </div>
    </div>
  );
}
