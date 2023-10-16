import React,{useState} from 'react'

export default function Notification({notifications, onClose}) {
  return (
    <div>
    {notifications.map((notification) => (
      <div key={notification.id} className="notification">
        {notification.message}
        <button onClick={() => onClose(notification.id)}>Close</button>
      </div>
    ))}
  </div>
  )
}
