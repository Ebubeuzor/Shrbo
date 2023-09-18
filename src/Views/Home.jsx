import React from "react";
import SearchLocation from "../Component/SearchLocation";
import CategoryHeader from "../Component/Navigation/CategoryHeader";
import Listings from "../Component/ListingInfo/Listings";
import Header from "../Component/Navigation/Header";
import Hamburger from "../Component/Navigation/Hamburger";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hamburger/>
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
