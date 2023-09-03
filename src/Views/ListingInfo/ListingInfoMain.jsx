import React from "react";
import ListingPhotos from "./ListingPhotos";
import HostedBy from "./HostedBy";
import HostProfilePreview from "./HostProfilePreview";
import Amenities from "./Amenities";
import AboutProperty from './AboutProperty';

const ListingInfoMain=()=>{


    return(
        <div className=" px-6 md:px-10 xl:px-20 max-w-7xl  m-auto justify-center items-center flex flex-wrap flex-col gap-6 lg:gap-10 ">
            <ListingPhotos/>
            
            <div className="w-full flex">
                <div className=" w-full md:w-[58.3333%] relative" >
                     <HostedBy/>
                     <HostProfilePreview/>
                     <AboutProperty/>
                   
                </div>
              

            </div>
            <Amenities/>
            

        </div>
    );



}

export default ListingInfoMain;