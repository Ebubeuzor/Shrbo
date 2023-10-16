import React, { useState } from "react";
import Chat from "../Component/Chat/Chat";
import Notification from "../Component/Notification";
import Header from "../Component/Navigation/Header";

export default function ChatAndNotifcationTab() {
  const [selectedTab, setSelectedTab] = useState("chats"); // "chats" or "notifications"

  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have recieved a message" },
    { id: 2, message: "User 2 requests to reserve your apartment at 2b Admiralty way scheduled for3 days" },
    { id: 3, message: "Please verfiy your email address" },
  ]);

  const closeNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  const toggleGreen = () => {
    // Prevent toggling on larger screens (desktop)
    if (window.innerWidth <= 768) {
      // You can add your logic for toggling here
    }
  };

  return (
<div>
    <Header/>

    <div className="bg-gray-100">
        
        <div className="col-span-3 bg-white rounded-md p-4 shadow md:hidden">
          <div className="flex space-x-2">
            <button
              className={`${
                selectedTab === "chats" ? "bg-orange-400 text-white" : "bg-orange-200"
              } p-2 rounded`}
              onClick={() => setSelectedTab("chats")}
            >
              Chats
            </button>
            <button
              className={`${
                selectedTab === "notifications"
                  ? "bg-black text-white"
                  : "bg-slate-700 text-white"
              } p-2 rounded`}
              onClick={() => setSelectedTab("notifications")}
            >
              Notifications
            </button>
          </div>
        </div>
  
        <div className="col-span-3 md:col-span-2 mt-4 p-4 bg-white rounded-md shadow">
          {selectedTab === "chats" && (
            <Chat showGreen={window.innerWidth <= 768} />
          )}
  
          {selectedTab === "notifications" && (
            <Notification notifications={notifications} onClose={closeNotification} />
          )}
        </div>
      </div>
</div>
  );
}
