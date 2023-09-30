import React, { useState } from "react";
import exclammationMark from "../../assets/svg/exclamation-round-icon.svg";

export default function Hosting() {
  const [activeTab, setActiveTab] = useState("checkingOut");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const hosts = [
    {
      name: "Endo",
      date: "Sept 22 - Oct 22",
      image: "img",
    },
    {
      name: "Endo",
      date: "Sept 22 - Oct 22",
      image: "img",
    },
    {
      name: "Endo",
      date: "Sept 22 - Oct 22",
      image: "img",
    },
    {
        name: "Endo",
        date: "Sept 22 - Oct 22",
        image: "img",
      },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "checkingOut":
        if (hosts.length === 0) {
            return <div className="bg-orange-100 mt-4 h-36 flex justify-center items-center">No hosts are currently hosting.</div>;
          }
        return (
         <div className="bg-orange-100 mt-4">
             <div className="whitespace-nowrap overflow-x-auto example">
            <div className="flex space-x-3 p-6 ">
              {hosts.map((host, index) => (
                <div className=" w-64 p-4 mt-4 rounded-xl bg-white shadow-sm" key={index}>
                  <div className="current text-orange-300 text-sm">
                    Currently hosting
                  </div>
                  <div className="flex items-center justify-between mt-5 flex-wrap">
                    <div className="guest-name">
                      <h1>{host.name}</h1>
                      <p>{host.date}</p>
                    </div>
                    <div className="guest-image">{host.image}</div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-orange-400 rounded-full py-2 px-4 w-full text-white ">
                      message
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
         </div>
        );
      case "currentlyHosting":
        return <div>Currently hosting content goes here.</div>;
      case "arrivingSoon":
        return <div>Arriving soon content goes here.</div>;
      case "upcoming":
        return <div>Upcoming content goes here.</div>;
      case "pendingReview":
        return <div>Pending review content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap md:flex-col md:w-[80vw] md:mx-auto md:my-10 p-10">
        <div className="w-full">
          <div className="">Bell</div>
          <div>
            <h1 className="text-3xl font-medium my-7">Welcome back, Endo</h1>
          </div>
          <div className="flex space-x-5">
            <div className="flex justify-between border rounded-lg p-4 md:w-fit items-center space-x-4 w-full w-80">
              <div className="">
                <div>
                  <h1 className="text-sm font-medium mb-2">
                    Verify your identity
                  </h1>
                </div>
                <div>
                  <span className="text-red-600 text-sm">
                    Required to publish
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">House Title</span>
                </div>
                <div>
                  <span className="text-blue-500 cursor-pointer underline-offset-4 underline">
                    Get started
                  </span>
                </div>
              </div>
              <div className="px-4">
                <img src={exclammationMark} className="w-7" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="reservation w-[80vw] mt-14">
          <h1 className="text-2xl font-medium mb-4">Your reservations</h1>
          <div className="tab-container space-x-4 flex  overflow-x-auto whitespace-nowrap example">
            <div
              className={`tab border py-2 px-4 rounded-full cursor-pointer  ${
                activeTab === "checkingOut" ? "active" : ""
              }`}
              onClick={() => handleTabClick("checkingOut")}
            >
              Checking out (4)
            </div>
            <div
              className={`tab border py-2 px-4 rounded-full cursor-pointer  ${
                activeTab === "currentlyHosting" ? "active" : ""
              }`}
              onClick={() => handleTabClick("currentlyHosting")}
            >
              Currently hosting (0)
            </div>
            <div
              className={`tab border py-2 px-4 rounded-full cursor-pointer  ${
                activeTab === "arrivingSoon" ? "active" : ""
              }`}
              onClick={() => handleTabClick("arrivingSoon")}
            >
              Arriving soon (0)
            </div>
            <div
              className={`tab border py-2 px-4 rounded-full cursor-pointer  ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              onClick={() => handleTabClick("upcoming")}
            >
              Upcoming (0)
            </div>
            <div
              className={`tab border py-2 px-4 rounded-full cursor-pointer  ${
                activeTab === "pendingReview" ? "active" : ""
              }`}
              onClick={() => handleTabClick("pendingReview")}
            >
              Pending review (0)
            </div>
          </div>
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
