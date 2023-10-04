import React, { useState } from "react";
import { Tabs, Modal, Checkbox } from "antd";
import HostHeader from "../Navigation/HostHeader";
import Room from "../../assets/room.jpeg";

const { TabPane } = Tabs;

export default function HostAnalysis() {
  const [activeTab, setActiveTab] = useState("1");
  const [showListingsModal, setShowListingsModal] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const showListings = () => {
    setShowListingsModal(true);
  };

  const handleApartmentClick = (apartmentId) => {
    setSelectedApartment(apartmentId);
  };

  const hideListingsModal = () => {
    setShowListingsModal(false);
  };

  // Define an array of apartment objects with associated images
  const apartmentData = [
    { id: 1, name: "Apartment 1", image: Room },
    { id: 2, name: "Apartment 2", image: Room },
    // Add more apartments here
  ];

  const selectedApartmentData = apartmentData.find(
    (apartment) => apartment.id === selectedApartment
  );

  // Define an array of review objects
  const reviews = [
    {
      apartmentId: 1,
      personName: "John Doe",
      comment: "Great place to stay!",
      starRating: 5,
      nights: 3,
      date: "2023-10-04",
    },
    {
      apartmentId: 1,
      personName: "Jane Smith",
      comment: "Lovely apartment with a nice view.",
      starRating: 4,
      nights: 2,
      date: "2023-10-03",
    },

    {
      apartmentId: 1,
      personName: "Jane Smith",
      comment: "Lovely apartment with a nice view.",
      starRating: 4,
      nights: 2,
      date: "2023-10-03",
    },
    {
      apartmentId: 2,
      personName: "Alice Johnson",
      comment: "Very comfortable and clean.",
      starRating: 5,
      nights: 4,
      date: "2023-10-02",
    },
    // Add more reviews here
  ];

  const apartmentReviews = reviews.filter(
    (review) => review.apartmentId === selectedApartment
  );

  return (
    <div className="">
      <HostHeader />
      <div className="w-3/4 mx-auto my-28">
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          className="tab-buttons"
        >
          <TabPane tab="Reviews" key="1">
            <div>
              <h2 className="text-3xl">Reviews</h2>

              <button
                onClick={showListings}
                className="border p-2 my-3 rounded-full"
              >
                All listings
              </button>
              {selectedApartmentData && (
                <div>
                  <h2 className="my-4 font-medium text-2xl">
                    Reviews for {selectedApartmentData.name}
                  </h2>
                  {apartmentReviews.length === 0 ? (
                    <p>
                      Your first review will show up here. We’ll let you know
                      when guests leave feedback.
                    </p>
                  ) : (
                    <ul className="list-disc list-inside flex space-x-6 whitespace-nowrap overflow-scroll w-full example">
                      {apartmentReviews.map((review, index) => (
                        <li
                          key={index}
                          className="mt-2 rounded-3xl mb-3 list-none shadow-lg bg-slate-100   p-4 "
                        >
                          <div className="flex items-center space-x-4 ">
                            <div className="w-[120px]">
                              <img
                                src={selectedApartmentData.image}
                                className="w-32 h-32"
                                alt=""
                              />
                            </div>
                            <div className="w-[300px] whitespace-normal">
                              <strong>Guest Name:</strong> {review.personName}
                              <br />
                              <strong>Comment:</strong> {review.comment}
                              <br />
                              <strong>Rating:</strong> {review.starRating}
                              <br />
                              <strong>Nights:</strong> {review.nights}
                              <br />
                              <strong>Date:</strong> {review.date}
                              <br />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </TabPane>
          <TabPane tab="Earnings" key="2">
            <div>
              <h2>Earnings</h2>
              <p>This is the content for Earnings tab.</p>
            </div>
          </TabPane>
          <TabPane tab="Views" key="3">
            <div>
              <h2>Views</h2>
              <p>This is the content for Views tab.</p>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <Modal
        open={showListingsModal}
        onCancel={hideListingsModal}
        title="Apartment Listings"
        footer={null}
      >
        <ul>
          {apartmentData.map((apartment) => (
            <li
              key={apartment.id}
              className="flex items-center justify-between my-4"
            >
              <Checkbox onChange={() => handleApartmentClick(apartment.id)}>
                {apartment.name}
              </Checkbox>
              <img src={apartment.image} className="w-10" alt="" />
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}
