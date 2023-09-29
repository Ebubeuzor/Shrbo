import React, { useState } from "react";
import exclammationMark from "../../assets/svg/exclamation-round-icon.svg"

export default function Hosting() {
  const [activeTab, setActiveTab] = useState("checkingOut");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "checkingOut":
        return <div >
            <div >
            2
            </div>
        </div>;
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
            <div className="flex border rounded-lg p-4 md:w-fit items-center space-x-4 w-full w-80">
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
              <div className="px-4"><img src={exclammationMark} className="w-7" alt="" /></div>
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
              Checking out (0)
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
