import React,{useState} from "react";
import {styles} from '../Style';



const SupportHeader= (props) => {
 
    return (
     
          
          <div className=" w-full bg-slate-800 md:h-[10%] h-[8%] flex px-4 shadow-lg  ">


            <div className=" support/bot  w-[50%] text-white flex justify-start items-center ">
              <img alt="logo" />
                Shrbo Team
            </div>
            <div className=" close-button text-white text-end w-[50%] flex justify-end items-center cursor-pointer  " onClick={props.close}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width={"24px"} height={"24px"} viewBox="0 0 24 24"><title>window-close</title>
                    <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg>
            </div>


          </div>     
    )
}

export default SupportHeader;