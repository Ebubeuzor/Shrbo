import React from "react";
import { Link } from "react-router-dom";

import BookInfoCard from "../Component/RequestBook/BookInfoCard";
import BookingInfo from "../Component/RequestBook/BookingInfo";

const RequestBook = () => {
  return (
    <div className=" h-full px-6 md:px-10 xl:px-20 max-w-7xl  m-auto justify-center items-center flex flex-wrap flex-col gap-6 lg:gap-10 ">
      <div className=" mx-auto w-full box-border block text-base  ">
        <div className=" pb-8 box-border text-base ">
          <section>
            <div className=" pt-16  pb-4 flex flex-row items-center box-border">
              <div className=" pr-[18px] -ml-8 mt-[10px] hidden md:block cursor-pointer ">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <title>keyboard-backspace</title>
                    <path d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
                  </svg>
                </Link>
              </div>
              <div className=" text-3xl font-semibold">
                <h1 className=" ">Request to book</h1>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full items-stretch justify-start flex-wrap mx-auto  flex">
        <div className=" w-full md:w-[50%] relative ">
          <div className=" mb-16">
            <div className=" box-border">
              <div className=" pb-6">
                <section>
                  <div className=" font-semibold text-2xl">
                    <h2>Trip info</h2>
                  </div>
                </section>
              </div>
            </div>

            <div className=" h-full ">
              <BookingInfo />
            </div>
          </div>
        </div>

        <div className="  w-full md:ml-[8.33333%] md:w-[41.6667%] relative mr-0 h-full ">
          <BookInfoCard />
        </div>
      </div>
    </div>
  );
};

export default RequestBook;
