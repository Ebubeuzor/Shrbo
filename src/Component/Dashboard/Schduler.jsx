import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import { Tabs } from "antd";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { IoIosArrowForward } from "react-icons/io";

export default class Schduler extends React.Component {
  render() {
    const items = [
      {
        key: "1",
        label: (
          <div className=" text-neutral-600 text-xl  rounded-t-lg">Pricing</div>
        ),
        children: <Pricing />,
      },
      {
        key: "2",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">
            Availability
          </div>
        ),
        children: (
          <div className=" text-neutral-600  rounded-t-lg">Upcoming</div>
        ),
      },
    ];

    return (
      <div className=" flex box-border w-full  ">
        <div className=" block flex-grow relative h-screen max-h-[800px] overflow-y-scroll example   ">
          <div className=" flex flex-col relative py-8 px-6">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
              initialView="dayGridMonth"
              editable
              selectable
            />
          </div>
        </div>

        <section className="  hidden w-[370px] border-l z-[1] min-[1128px]:block   ">
          <div className=" max-h-[800px] block box-border overflow-auto h-screen relative bg-white  ">
            <div className=" block box-border py-8 px-6  ">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const Pricing = () => {
  return (
    <div className="block box-border overflow-y-scroll example ">
      {/* BASE PRICE  */}
      <div className=" block box-border mt-8 mb-8 min-[1128px]:mb-4 ">
        <div className=" box-border flex justify-between items-baseline mb-6 ">
          <span>
            <h2 className=" m-0 p-0 text-2xl block box-border">
              <div className="min-[1128px]:text-lg font-semibold capitalize  ">
                Base Price
              </div>
            </h2>
          </span>

          <div className=" block box-border uppercase font-semibold text-xs pr-[10px]  ">
            <button className=" bg-transparent  cursor-pointer m-0 p-0 rounded-md underline   ">
              USD
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-4  relative">
          <div className=" cursor-pointer w-full h-full outline-none    ">
            <div className=" pointer p-6 rounded-2xl border">
              <div
                className=" font-medium
               mb-2 mr-1 text-sm "
              >
                Per night
              </div>
              <div className=" h-auto visible w-full ">
                <div className=" text-3xl break-keep inline-block font-extrabold ">
                  $42
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-2xl flex border p-6 justify-between gap-3 ">
            <div className=" touch-manipulation relative outline-none h-full w-full cursor-pointer ">
              <div className=" mr-1 text-sm block box-border">
                Custom Weekend Price
              </div>
            </div>
            <div className=" block whitespace-nowrap -my-[10px] ">
              <div className=" relative touch-manipulation cursor-pointer text-center p-[10px] -mx-[10px]">
                {" "}
                <div className=" underline  text-sm block box-border">Add</div>
              </div>
            </div>
          </div>

          <div className="">
            <form>
              <span className=" px-6 py-5 border rounded-2xl flex items-center justify-between">
                <div className="text-sm block box-border">Smart Pricing</div>
                <label class="switch">
                  <input type="checkbox" name="" />
                  <span class="slider round"></span>
                </label>
              </span>
            </form>
          </div>
        </div>
      </div>

      {/* Discounts */}

      <div className=" block box-border mt-8 mb-8 min-[1128px]:mb-4 ">
        <div className=" box-border flex justify-between items-baseline mb-6 ">
          <span>
            <h2 className=" m-0 p-0 text-2xl block box-border">
              <div className="min-[1128px]:text-lg font-semibold capitalize  ">
                Discounts
              </div>
            </h2>
            <div className=" ">Adjust your pricing to add more guests.</div>
          </span>
          {/* 
        <div className=' block box-border uppercase font-semibold text-xs pr-[10px]  '>
          <button className=' bg-transparent  cursor-pointer m-0 p-0 rounded-md underline   ' >USD</button>
        </div> */}
        </div>
        <div className=" flex flex-col gap-4  relative">
          {/* 
        WEEKLY DISCOUNT */}
          <div className=" cursor-pointer w-full h-full outline-none    ">
            <div className=" pointer p-6 rounded-2xl border">
              <div className=" mb-1 font-medium  mr-1 text-sm ">Weekly</div>
              <div className=" mb-3 mr-1 text-sm ">for 7 nights or more</div>
              <div className=" h-auto visible w-full flex justify-between items-baseline">
                <div className=" text-3xl break-keep inline-block font-extrabold ">
                  10%
                </div>
                <div className="  break-keep inline-block text-slate-600 text-sm  ">
                  Weekly average is $265
                </div>
              </div>
            </div>
          </div>

          {/* MONTHLY DISCOUNT */}
          <div className=" cursor-pointer w-full h-full outline-none    ">
            <div className=" pointer p-6 rounded-2xl border">
              <div className=" mb-1 font-medium  mr-1 text-sm ">Monthly</div>
              <div className=" mb-3 mr-1 text-sm ">for 28 nights or more</div>
              <div className=" h-auto visible w-full flex justify-between items-baseline">
                <div className=" text-3xl break-keep inline-block font-extrabold ">
                  20%
                </div>
                <div className="  break-keep inline-block text-sm text-slate-600  ">
                  Monthly average is $265
                </div>
              </div>
            </div>
          </div>

          <div className=" rounded-2xl flex border p-6 justify-between items-center gap-3 ">
            <div className=" touch-manipulation relative outline-none h-full w-full cursor-pointer ">
              <div className=" mr-1 text-sm block box-border">
                More Dicounts
              </div>
              <div className=" mr-1 text-sm block box-border">
                Early bird ,last-minute,trip length
              </div>
            </div>
            <div className=" block whitespace-nowrap -my-[10px] ">
              <div className=" relative touch-manipulation cursor-pointer text-center p-[10px] -mx-[10px]">
                {" "}
                <div className="  text-sm block box-border">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
