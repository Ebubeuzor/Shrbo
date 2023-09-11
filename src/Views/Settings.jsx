import React from "react";
import Card from "../Component/Card";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/svg/id-card-line-icon.svg";
import Padlock from "../assets/svg/lock-icon.svg";
import PaymentIcon from "../assets/svg/credit-card-icon.svg";
import BellIcon from "../assets/svg/bell-icon.svg";


export default function Settings() {
  return (
    <div>
      <div>
        <div className="max-w-2xl mx-auto">
          <div className="my-14">
            <h1 className="text-4xl">Account</h1>
            <div className="text-xl">
              <span className="font-medium">User name,</span>
              <span>username@gmail.com</span>
              <Link className="underline">Go to profile</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/Profile">
              <Card
                icon={ProfileIcon}
                title="Personal Info"
                text="Provide personal details and how we can reach you"
              />
            </Link>
            <Link to="/security">
              <Card
                icon={Padlock}
                title="Security"
                text="Provide personal details and how we can reach you"
              />
            </Link>
            <Link to="/payments">
              <Card
                icon={PaymentIcon}
                title="Payment Details"
                text="Provide personal details and how we can reach you"
              />
            </Link>
            <Link to="/AccountNotifications">
            <Card
              icon={BellIcon}
              title="Notifications "
              text="Provide personal details and how we can reach you"
            />
            </Link>
            <Card
              icon="hello"
              title="Personal Info"
              text="Provide personal details and how we can reach you"
            />
            <Card
              icon="hello"
              title="Personal Info"
              text="Provide personal details and how we can reach you"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
