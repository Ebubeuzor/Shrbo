import React, { useState } from "react";
import ChatCard from "./ChatCard";
import ChatContainer from "./ChatContainer";

export default function Chat() {
  const [showGreen, setShowGreen] = useState(true);

  const toggleGreen = () => {
    // Prevent toggling on larger screens (desktop)
    if (window.innerWidth <= 768) {
      setShowGreen(!showGreen);
    }
  };

  return (
    <div className="grid grid-cols-3 ">
      {/* Only show green part on mobile */}
      {showGreen && (
        <div
          className=" col-span-5 md:col-span-1 h-[100vh] border-r-[1px]"
          onClick={toggleGreen}
        >
            
          <ChatCard/>
        </div>
      )}

      {/* Show yellow part on desktop */}
      <div
        className={`col-span-3 md:col-span-2  ${
          showGreen ? "hidden md:block" : ""
        }`}
      >
        {window.innerWidth <= 768 && (
          <div>
            <span onClick={toggleGreen}>back</span>
          </div>

        )}

        <ChatContainer/>
      </div>

   
    </div>
  );
}
