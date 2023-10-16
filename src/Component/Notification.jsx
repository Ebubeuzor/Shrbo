import React, { useState } from "react";

export default function Notification({ notifications, onClose }) {
  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="notification bg-orange-200 border-black border-2 p-3 rounded shadow mb-2 cursor-pointer"
          onClick={() => onClose(notification.id)}
        >
          <span>{notification.message}</span>
          {/* You can add a close button here if needed */}
        </div>
      ))}
    </div>
  );
}
