import React, { useState } from "react";
import { FaHome, FaHotel, FaBed, FaBuilding } from "react-icons/fa";

export default function HostHomes() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const propertyTypes = [
    { id: "house", label: "House", icon: <FaHome /> },
    { id: "hotel", label: "Hotel", icon: <FaHotel /> },
    { id: "guestHouse", label: "Guest House", icon: <FaBed /> },
    { id: "apartment", label: "Apartment", icon: <FaBuilding /> },
  ];

  const privacyTypes = [
    {
      id: "house",
      label: "An entire place",
      icon: <FaHome />,
      description: "Guests have the whole place to themselves.",
    },
    {
      id: "hotel",
      label: "A room",
      icon: <FaHotel />,
      description: "Guests have the whole place to themselves.",
    },

    {
      id: "guestHouse",
      label: "A shared room",
      icon: <FaBed />,
      description: "Guests have the whole place to themselves.",
    },
  ];

  const handleTypeSelection = (typeId) => {
    setSelectedTypes([typeId]);
  };

  const addressFields = [
    { id: "street", label: "Street Address" },
    { id: "city", label: "City" },
    { id: "state", label: "State" },
    { id: "zipcode", label: "Zip Code" },
  ];
  
  // Create state to store address information
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });
  
  // Function to handle address field changes
  const handleAddressChange = (field, value) => {
    setAddress({ ...address, [field]: value });
  };
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="mt-32 mx-auto  flex justify-center p-4 ">
            <div className=" ">
              <div className="md:flex md:justify-center md:flex-col md:mt-28 mb-28">
                <h1 className="text-6xl">It’s easy to get started on Shbro</h1>
              </div>
              <div className="">
                <div>
                  <div className="flex border-b-[1px] pb-2 my-4">
                    <div className="text-2xl mr-2">1</div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-2xl mb-3">
                        Tell us about your place
                      </h2>
                      <h3>
                        Share some basic info, like where it is and how many
                        guests can stay.
                      </h3>
                    </div>
                    <div>
                      <img
                        className="w-32"
                        src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex border-b-[1px] pb-2 my-4">
                    <div className="text-2xl mr-2">2</div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-2xl mb-3">
                        Make it stand out
                      </h2>
                      <h3>
                        Add 5 or more photos plus a title and description—we’ll
                        help you out.
                      </h3>
                    </div>
                    <div>
                      <img
                        className="w-32"
                        src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex pb-32 my-4">
                    <div className="text-2xl mr-2">3</div>
                    <div className="flex flex-col  w-[100%]">
                      <h2 className="font-medium text-2xl mb-3 ">Publish</h2>
                      <h3 className="">
                        Choose if you'd like to start with an experienced guest,
                        set a starting price, and publish your listing.
                      </h3>
                    </div>
                    <div>
                      <img
                        className="w-32"
                        src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="mt-32 mx-auto  flex justify-center p-4">
            <div className="  overflow-auto">
              <div className="md:flex md:justify-center md:flex-col md:mt-28 mb-20">
                <h1 className="text-6xl">It’s easy to get started on Shbro</h1>
              </div>
              <div className="pb-32">
                <div>
                  <div className=" pb-2 my-4">
                    <div className="text-2xl mr-2">Step 1</div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-2xl mb-3">
                        Tell us about your place
                      </h2>
                      <h3>
                        Share some basic info, like where it is and how many
                        guests can stay.
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-64"
                      src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-32 mx-auto  flex justify-center p-4">
            <div className="  overflow-auto">
              <div className="md:flex md:justify-center md:flex-col md:mt-28 mb-20">
                <h1 className="text-6xl">
                  Which of these best describes your place?
                </h1>
              </div>
              <div className="pb-32">
                <div className=" space-y-4">
                  <h3 className="text-xl font-semibold">Property Types</h3>
                  <div className="flex flex-wrap   w-full">
                    {propertyTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`property-type h-20 w-32 m-3   flex ${
                          selectedTypes.includes(type.id)
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 text-black"
                        } px-4 py-2 rounded-md cursor-pointer flex-col justify-between`}
                        onClick={() => handleTypeSelection(type.id)}
                      >
                        <span className="mr-2">{type.icon}</span>
                        {type.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="mt-32 mx-auto  flex justify-center p-4">
            <div className="  overflow-auto">
              <div className="md:flex md:justify-center md:flex-col md:mt-28 mb-20">
                <h1 className="text-6xl">
                  What type of place will guests have?
                </h1>
              </div>
              <div className="pb-32">
                <div className=" space-y-4">
                  {/* <h3 className="text-xl font-semibold">Property Types</h3> */}
                  <div className="  w-full">
                    {privacyTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`property-type h-20  m-3   flex ${
                          selectedTypes.includes(type.id)
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 text-black"
                        } px-4 py-2 rounded-md cursor-pointer flex-col justify-between`}
                        onClick={() => handleTypeSelection(type.id)}
                      >
                        <span className="mr-2">{type.icon}</span>
                        {type.label}
                        <p>{type.description}</p>
                      </div>
                      
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

        case 4:
  return (
    <div className="mt-32 mx-auto flex justify-center p-4">
      <div className="overflow-auto">
        <div className="md:flex md:justify-center md:flex-col md:mt-28 mb-20">
          <h1 className="text-6xl">Enter your address</h1>
        </div>
        <div className="pb-32">
          <div className="space-y-4">
            {addressFields.map((field) => (
              <div key={field.id} className="w-full">
                <label className="text-xl font-semibold">{field.label}</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={address[field.id]}
                  onChange={(e) => handleAddressChange(field.id, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );

        
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
      <div className="bg-orange-400 flex fixed bottom-0 w-full text-center">
        {step > 0 && (
          <button
            onClick={handlePrevious}
            className="text-white  bg-orange-200 w-full p-4"
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="text-white text-center  bg-orange-400 w-full p-4"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
