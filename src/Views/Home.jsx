import React, { useState } from "react";
import SearchLocation from "../Component/SearchLocation";
export default function Home() {

  return (
    <div>
      <div>
        <div className="pageHeader"></div>
      </div>
      <div className="storeFrontHomeage">
        <div>
          <div className="hero-pattern relative  bg-cover bg-center h-[70vh]  bg-[url('https://forever.travel-assets.com/flex/flexmanager/images/2022/12/09/Exterior-Cabin_Privacy_Wrigley_VRBO_APFT2__Vancouver__Therin_8256x3960.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh')]">
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl">
              Find your place for together
            </h1>
            <p className="absolute inset-0 flex items-center justify-center text-white -bottom-40">Find great places , hotels , restourants , shops.</p>
            <section className=" flex bg-slate-300  justify-center bottom-0  w-[70%]">
             <SearchLocation/>
            </section>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste
            porro beatae asperiores sapiente dolorum dolor quod voluptatibus
            odit, numquam quasi illo doloremque harum aut rem eaque nesciunt,
            reiciendis nihil?
          </p>
        </div>
      </div>
    </div>
  );
}
