import React, { useState } from "react";
import bellIcon from "../../../assets/svg/bell-icon.svg";

export default function AdminHeader() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Notification 1" },
    { id: 2, message: "Notification 2" },
    { id: 3, message: "Notification 3" },
  ]);
  return (
    <div>
      <nav className="bg-gray-700 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Admin Dashboard</h1>
          <div className="flex items-center">
            <div className="mr-4 relative">
              <button onClick={toggleNotification}>
                {" "}
                <img src={bellIcon} className="w-5 h-5" alt="" />
              </button>
              {notifications.length > 0 && (
                <span className="bg-red-500 text-white  absolute h-[2px] w-[2px] p-[5px] top-0 right-0 rounded-full">
                  {/* {notifications.length} */}
                </span>
              )}

              {isNotificationOpen && notifications.length > 0 && (
              <div className="absolute bg-white z-[60] right-0 mt-1 p-2 w-64 border rounded-lg shadow-lg text-black">
              {notifications.map((notification, index) => (
                    <div key={index}>{notification.message}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="mr-4 relative">
              <button onClick={toggleProfile}>Profile</button>
              {isProfileOpen && (
                <div className="absolute bg-white text-black p-4 shadow-xl right-10">
                  <ul className="w-56">
                    <li className="">Profile</li>

                    <li className="">Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
