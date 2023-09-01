import React from "react";
import ListingPhotos from "./ListingPhotos";
import HostedBy from "./HostedBy";
import HostProfilePreview from "./HostProfilePreview";

const ListingInfoMain=()=>{


    return(
        <div className=" px-6 md:px-10 xl:px-20  m-auto justify-center items-center flex flex-wrap flex-col gap-6 lg:gap-10 ">
            <ListingPhotos/>
            
            <div className="w-full flex">
                <div className=" w-full md:w-[58.3333%]" >
                     <HostedBy/>
                     <HostProfilePreview/>
                </div>
                 

            </div>
            

        </div>
    );



}

export default ListingInfoMain;