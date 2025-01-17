import React, { useState, useEffect } from "react";
import Card from "../Component/Card";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/svg/id-card-line-icon.svg";
import Padlock from "../assets/svg/lock-icon.svg";
import PaymentIcon from "../assets/svg/credit-card-icon.svg";
import BellIcon from "../assets/svg/bell-icon.svg";
import Footer from "../Component/Navigation/Footer";
import Header from "../Component/Navigation/Header";
import BottomNavigation from "../Component/Navigation/BottomNavigation";
import HostModal from "../Component/Dashboard/HostModal";

export default function Settings() {
  const [isHostModalOpen, setHostModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setHostModalOpen(true);
      } else {
        setHostModalOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Header />

      <div className="pb-32">
        {isHostModalOpen && (
          <HostModal isOpen={true} onClose={() => setHostModalOpen(false)} />
        )}

        <div className="max-w-2xl md:mx-auto mx-9">
          <div className="my-14">
            <h1 className="text-4xl font-medium">Account</h1>
            <div className="text-base">
              <span className="font-medium">Username,</span>
              <span>username@gmail.com</span>
              <br />
              <Link to="/UsersShow" className="underline ">
                Go to profile
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
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
      <BottomNavigation />
      <Footer />
    </div>
  );
}
