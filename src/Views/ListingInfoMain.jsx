import React from "react";
import ListingPhotos from "../Component/ListingInfo/ListingPhotos";
import HostedBy from "../Component/ListingInfo/HostedBy";
import HostProfilePreview from "../Component/ListingInfo/HostProfilePreview";
import Amenities from "../Component/ListingInfo/Amenities";
import AboutProperty from '../Component/ListingInfo/AboutProperty';
import ListingMap from "../Component/ListingInfo/ListingMap";
import ListingReviews from "../Component/ListingInfo/ListingReviews"
import Testimonial from "../Component/ListingInfo/Testimonial";
import ListingForm from "../Component/ListingInfo/ListingForm";
import BottomNavigation from "../Component/Navigation/BottomNavigation";


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
       
            
<BottomNavigation/>
        </div>
    );



}

export default ListingInfoMain;