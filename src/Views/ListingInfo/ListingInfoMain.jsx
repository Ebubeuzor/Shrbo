import React from "react";
import ListingPhotos from "./ListingPhotos";
import HostedBy from "./HostedBy";
import HostProfilePreview from "./HostProfilePreview";
import Amenities from "./Amenities";
import AboutProperty from './AboutProperty';
import ListingMap from "./ListingMap";
import ListingReviews from "./ListingReviews"
import Testimonial from "./Testimonial";
import ListingForm from "./ListingForm";

const ListingInfoMain=()=>{


    return(
        <div className=" px-6 md:px-10 xl:px-20 max-w-7xl  m-auto justify-center items-center flex flex-wrap flex-col gap-6 lg:gap-10 ">
            <ListingPhotos/>
            
            <div className="w-full flex">
                <div className=" w-full md:w-[58.3333%] relative" >
                     <HostedBy/>
                                    <hr
                    className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />
                     <HostProfilePreview/>
                                <hr
                     className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                       />
                     <AboutProperty/>
                   
                </div>
                <div className=" md:ml-[8.33333%] md:w-[33.33333%] relative mr-0 ">
                    <ListingForm/>
                </div>
              

            </div>
            <Amenities/>
            <Testimonial/>
            <ListingMap/>
       
            

        </div>
    );



}

export default ListingInfoMain;