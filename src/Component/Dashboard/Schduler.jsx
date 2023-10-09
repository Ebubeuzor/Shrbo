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
              initialView='multiMonthYear'
              multiMonthMaxColumns="1" 
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

//   const acceptedCurrencies = [
//     { id: 1, text: "United States Dollar (USD)", symbol: "$" },
//     { id: 2, text: "Euro (EUR)", symbol: "€" },
//     { id: 3, text: "British Pound Sterling (GBP)", symbol: "£" },
//     { id: 4, text: "Japanese Yen (JPY)", symbol: "¥" },
//     { id: 5, text: "Chinese Yuan Renminbi (CNY)", symbol: "¥" },
//     { id: 6, text: "Canadian Dollar (CAD)", symbol: "$" },
//     { id: 7, text: "Australian Dollar (AUD)", symbol: "$" },
//     { id: 8, text: "Swiss Franc (CHF)", symbol: "Fr" },
//     { id: 9, text: "Swedish Krona (SEK)", symbol: "kr" },
//     { id: 10, text: "Norwegian Krone (NOK)", symbol: "kr" },
//     { id: 11, text: "Danish Krone (DKK)", symbol: "kr" },
//     { id: 12, text: "New Zealand Dollar (NZD)", symbol: "$" },
//     { id: 13, text: "Singapore Dollar (SGD)", symbol: "$" },
//     { id: 14, text: "Hong Kong Dollar (HKD)", symbol: "HK$" },
//     { id: 15, text: "South Korean Won (KRW)", symbol: "₩" },
//     { id: 16, text: "Indian Rupee (INR)", symbol: "₹" },
//     { id: 17, text: "Brazilian Real (BRL)", symbol: "R$" },
//     { id: 18, text: "South African Rand (ZAR)", symbol: "R" },
//     { id: 19, text: "Russian Ruble (RUB)", symbol: "₽" },
//     { id: 20, text: "UAE Dirham (AED)", symbol: "ﺩ.ﺇ" }
// ];

//   const currencies=acceptedCurrencie.map(currency=>(
//     <div key={amenity.id} className=" relative px-[6px]  w-full md:w-1/2 md:px-2 ">
//         <div className=" flex itens-center md:max-w-[83.33%]  pb-4 justify-end flex-row-reverse ">
//             <div>{amenity.text}</div>
//             <div className=" mr-4 min-w-[24px]">
//                          <svg xmlns="http://www.w3.org/2000/svg" 
//                                         viewBox="0 0 24 24"
//                                         width="14px"
//                                         height="14px"
//                             >
//                             <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,
//                             5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,
//                             5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,
//                             3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,
//                             5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,
//                             20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
//                         </svg>
//             </div>

//         </div>
       

//     </div>

   
// ));  




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
              NGN
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
