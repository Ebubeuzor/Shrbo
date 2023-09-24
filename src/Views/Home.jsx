import React, { useState, useEffect } from "react";
import SearchLocation from "../Component/SearchLocation";
import CategoryHeader from "../Component/Navigation/CategoryHeader";
import Listings from "../Component/ListingInfo/Listings";
import Header from "../Component/Navigation/Header";
import Hamburger from "../Component/Navigation/Hamburger";
import Modal from "../Component/SearchModal/Modal";
import searchIcon from "../assets/svg/search-icon.svg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchButtonFixed, setIsSearchButtonFixed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Add an event listener to handle scrolling
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSearchButtonFixed(true);
      } else {
        setIsSearchButtonFixed(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <Header />
      <Hamburger /> */}
      <div
        className={` md:hidden flex justify-center fixed z-10 left-0 right-0 transition-all ${
          isSearchButtonFixed ? "top-0" : "mt-6"
        }`}
      >          <button
            onClick={openModal}
            className="bg-orange-400 z-50 w-[90%] flex items-center py-3 px-5 rounded-full mt-6 text-white shadow-2xl"
          >
            <div className="w-[20%]">
              <img src={searchIcon} className="w-6" alt="" />
            </div>
            <div className="w-[80%] text-start">
              <div className="">
                <div className="text-base font-medium">Anywhere</div>
                <div className="flex space-x-6 text-[12px]">
                  <div>Any week</div>
                  <div>Add guests</div>
                </div>
              </div>
            </div>
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      <div className="pageHeader"></div>
      <div className="storeFrontHomeage">
        <div>
          <div className="hero-pattern relative bg-cover bg-center md:h-[70vh] h-[100vh] bg-[url('https://forever.travel-assets.com/flex/flexmanager/images/2022/12/09/Exterior-Cabin_Privacy_Wrigley_VRBO_APFT2__Vancouver__Therin_8256x3960.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh')]">
            <h1 className="absolute inset-0 flex items-center justify-center -top-20 md:top-0 text-white md:text-6xl text-5xl lg:text-6xl p-4 text-center">
              Find your place for together
            </h1>
            <p className="absolute inset-0 flex items-center justify-center text-white -bottom-20 md:-bottom-40 md:text-lg text-center   text-xl">
              Find great places, hotels, restaurants, shops.
            </p>
            <section className="flex  justify-center bottom-0 ">
              <SearchLocation />
            </section>
          </div>
        </div>
        <div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste
            porro beatae asperiores sapiente dolorum dolor quod voluptatibus
            odit, numquam quasi illo doloremque harum aut rem eaque nesciunt,
            reiciendis nihil?
          </p> */}
        </div>
      
        <section className=" mx-auto justify-center w-[80%]">
          <div className="justify-center flex">
            <CategoryHeader />
          </div>

          <Listings />
        </section>
      </div>
    </div>
  );
}
