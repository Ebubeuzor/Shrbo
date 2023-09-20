import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" md:hidden bg-blue-500  relative flex items-center justify-between px-4 py-2">
      {/* Logo */}
      <div className="text-xl font-bold text-white"> Logo</div>

      {/* Hamburger Menu */}
      <div className="hamburger-button z-40" onClick={toggleMenu}>
        <HamburgerMenu
          toggled={isOpen}
          toggle={toggleMenu}
          size={30} 
          color='white'
        />
      </div>

      {/* Menu */}
      {isOpen && (
        <div className="menu absolute top-12 right-0 bg-white p-4 space-y-2 z-40">
        
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
