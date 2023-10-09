import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Tabs } from "antd";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { IoIosArrowForward } from "react-icons/io";

export default class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockingMode: false, // Track blocking/unblocking mode
      blockedDates: [], // Store blocked dates here
      selectedHouse: null, // Store the selected house details here
      selectedDate: null, // Store the selected date
      selectedDatePrice: "", // Store the price for the selected date
      
    };
  }

  handleDateClick = (dateInfo) => {
    const { blockedDates, blockingMode } = this.state;
    const clickedDate = dateInfo.dateStr;
  
    if (blockingMode) {
      const updatedBlockedDates = blockedDates.includes(clickedDate)
        ? blockedDates.filter((date) => date !== clickedDate)
        : [...blockedDates, clickedDate];
  
      this.setState({ blockedDates: updatedBlockedDates });
    } else {
      // Check if the clicked date is blocked and unblock it
      if (blockedDates.includes(clickedDate)) {
        const updatedBlockedDates = blockedDates.filter((date) => date !== clickedDate);
        this.setState({ blockedDates: updatedBlockedDates });
      }
    }
  };
  

  handlePriceChange = (event) => {
    const { selectedDate } = this.state;
    const newPrice = event.target.value;

    this.setState({ selectedDatePrice: newPrice });
  };

  handleBlockMode = () => {
    this.setState({ blockingMode: true });
  };

  handleUnblockMode = () => {
    this.setState({ blockingMode: false });
  };

  handleHouseSelect = (house) => {
    this.setState({ selectedHouse: house });
  };

  render() {
    const { blockingMode, blockedDates, selectedHouse, selectedDate, selectedDatePrice } = this.state;
    const items = [
      {
        key: "1",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">Pricing</div>
        ),
        children: <Pricing selectedHouse={selectedHouse} />,
      },
      {
        key: "2",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">
            Availability
          </div>
        ),
        children: <div className="text-neutral-600 rounded-t-lg">Upcoming</div>,
      },
    ];
  
    const apartments = [
      {
        name: "Lekki Admiralty",
        basePrice: "$42",
        customWeekendPrice: "Add",
        weeklyDiscount: "10%",
        weeklyAverage: "$265",
        monthlyDiscount: "20%",
        monthlyAverage: "$265",
        moreDiscounts: "Early bird, last-minute, trip length",
      },
      {
        name: "Lekki Phase 1",
        basePrice: "$50",
        customWeekendPrice: "Add",
        weeklyDiscount: "15%",
        weeklyAverage: "$300",
        monthlyDiscount: "25%",
        monthlyAverage: "$300",
        moreDiscounts: "Early bird, last-minute, trip length",
      },
      {
        name: "Lekki Units square",
        basePrice: "$45",
        customWeekendPrice: "Add",
        weeklyDiscount: "12%",
        weeklyAverage: "$280",
        monthlyDiscount: "22%",
        monthlyAverage: "$280",
        moreDiscounts: "Early bird, last-minute, trip length",
      },
      // Add more houses and their pricing details as needed
    ];
  
    const houseOptions = apartments.map((apartment) => apartment.name);
  
    return (
      <div className="flex box-border w-full">
        <div className="block flex-grow relative h-screen max-h-[800px] overflow-y-scroll example">
          <div className="flex flex-col relative py-8 px-6">
            <select
              name="houseSelect"
              id="houseSelect"
              onChange={(e) => this.handleHouseSelect(e.target.value)}
              className="py-4 border mb-4 pl-4"
            >
              <option value="">Select a house</option>
              {houseOptions.map((house, index) => (
                <option key={index} value={house}>
                  {house}
                </option>
              ))}
            </select>
            {selectedHouse && ( // Only show the buttons when an apartment is selected
              <div className="mb-4">
                <button
                  className={`${
                    blockingMode ? "bg-black" : "bg-orange-400"
                  } text-white py-2 px-4 rounded mr-2`}
                  onClick={this.handleBlockMode}
                >
                  Block
                </button>
                <button
                  className={`${
                    blockingMode ? "bg-orange-400" : "bg-black"
                  } text-white py-2 px-4 rounded`}
                  onClick={this.handleUnblockMode}
                >
                  Unblock
                </button>
              </div>
            )}
            {selectedHouse && (
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
                initialView="dayGridMonth"
                editable
                selectable
                dateClick={this.handleDateClick}
                events={[
                  ...blockedDates.map((date) => ({
                    title: "Blocked",
                    start: date,
                    allDay: true,
                  })),
                  ...this.getUnblockedDates(),
                ]}
              />
            )}
            {selectedDate && blockingMode && (
              <div className="mt-4 border">
                <label className="font-semibold text-lg">
                  Price for {selectedDate}
                </label>
                <input
                  type="number"
                  value={selectedDatePrice || ""}
                  onChange={this.handlePriceChange}
                  placeholder="Enter price per night"
                />
              </div>
            )}
          </div>
        </div>
  
        <section className="hidden w-[370px] border-l z-[1] min-[1128px]:block">
          <div className="max-h-[800px] block box-border overflow-auto h-screen relative bg-white">
            <div className="block box-border py-8 px-6">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </div>
        </section>
      </div>
    );
  }
  

  getUnblockedDates() {
    const { blockedDates } = this.state;
    const today = new Date();
    const unblockedDates = [];

    for (let i = 0; i < 365; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);
      const currentDateString = currentDate.toISOString().split("T")[0];

      if (!blockedDates.includes(currentDateString)) {
        unblockedDates.push({
          title: "Available",
          start: currentDateString,
          allDay: true,
        });
      }
    }

    return unblockedDates;
  }
}

const Pricing = ({ selectedHouse }) => {
  const apartments = [
    {
      name: "Lekki Admiralty",
      basePrice: "$42",
      customWeekendPrice: "Add",
      weeklyDiscount: "10%",
      weeklyAverage: "$265",
      monthlyDiscount: "20%",
      monthlyAverage: "$265",
      moreDiscounts: "Early bird, last-minute, trip length",
    },
    {
      name: "Lekki Phase 1",
      basePrice: "$50",
      customWeekendPrice: "Add",
      weeklyDiscount: "15%",
      weeklyAverage: "$300",
      monthlyDiscount: "25%",
      monthlyAverage: "$300",
      moreDiscounts: "Early bird, last-minute, trip length",
    },
    {
      name: "Lekki Units square",
      basePrice: "$45",
      customWeekendPrice: "Add",
      weeklyDiscount: "12%",
      weeklyAverage: "$280",
      monthlyDiscount: "22%",
      monthlyAverage: "$280",
      moreDiscounts: "Early bird, last-minute, trip length",
    },
    // Add more houses and their pricing details as needed
  ];


  const selectedApartment = apartments.find(
    (apartment) => apartment.name === selectedHouse
  );

  return (
    <div className="block box-border overflow-y-scroll example">
      {selectedApartment ? (
        <div className="block box-border mt-8 mb-8 min-[1128px]:mb-4">
          <div className="box-border flex justify-between items-baseline mb-6">
            <span>
              <h2 className="m-0 p-0 text-2xl block box-border">
                <div className="min-[1128px]:text-lg font-semibold capitalize">
                  {selectedHouse}
                </div>
              </h2>
            </span>

            <div className="block box-border uppercase font-semibold text-xs pr-[10px]">
              <button className="bg-transparent cursor-pointer m-0 p-0 rounded-md underline">
                USD
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="cursor-pointer w-full h-full outline-none">
              <div className="pointer p-6 rounded-2xl border">
                <div className="font-medium mb-2 mr-1 text-sm">Per night</div>
                <div className="h-auto visible w-full">
                  <div className="text-3xl break-keep inline-block font-extrabold">
                    {selectedApartment.basePrice}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl flex border p-6 justify-between gap-3">
              <div className="touch-manipulation relative outline-none h-full w-full cursor-pointer">
                <div className="mr-1 text-sm block box-border">
                  Custom Weekend Price
                </div>
              </div>
              <div className="block whitespace-nowrap -my-[10px]">
                <div className="relative touch-manipulation cursor-pointer text-center p-[10px] -mx-[10px]">
                  <div className="underline text-sm block box-border">
                    {selectedApartment.customWeekendPrice}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <form>
                <span className="px-6 py-5 border rounded-2xl flex items-center justify-between">
                  <div className="text-sm block box-border">Smart Pricing</div>
                  <label className="switch">
                    <input type="checkbox" name="" />
                    <span className="slider round"></span>
                  </label>
                </span>
              </form>
            </div>
            <div className="block box-border mt-8 mb-8 min-[1128px]:mb-4">
              <div className="box-border flex justify-between items-baseline mb-6">
                <span>
                  <h2 className="m-0 p-0 text-2xl block box-border">
                    <div className="min-[1128px]:text-lg font-semibold capitalize">
                      Discounts
                    </div>
                  </h2>
                  <div className=" ">Adjust your pricing to add more guests.</div>
                </span>
              </div>
              <div className="flex flex-col gap-4 relative">
                <div className="cursor-pointer w-full h-full outline-none">
                  <div className="pointer p-6 rounded-2xl border">
                    <div className="mb-1 font-medium mr-1 text-sm">Weekly</div>
                    <div className="mb-3 mr-1 text-sm">for 7 nights or more</div>
                    <div className="h-auto visible w-full flex justify-between items-baseline">
                      <div className="text-3xl break-keep inline-block font-extrabold">
                        {selectedApartment.weeklyDiscount}
                      </div>
                      <div className="break-keep inline-block text-slate-600 text-sm">
                        Weekly average is {selectedApartment.weeklyAverage}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer w-full h-full outline-none">
                  <div className="pointer p-6 rounded-2xl border">
                    <div className="mb-1 font-medium mr-1 text-sm">Monthly</div>
                    <div className="mb-3 mr-1 text-sm">for 28 nights or more</div>
                    <div className="h-auto visible w-full flex justify-between items-baseline">
                      <div className="text-3xl break-keep inline-block font-extrabold">
                        {selectedApartment.monthlyDiscount}
                      </div>
                      <div className="break-keep inline-block text-sm text-slate-600">
                        Monthly average is {selectedApartment.monthlyAverage}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl flex border p-6 justify-between items-center gap-3">
                  <div className="touch-manipulation relative outline-none h-full w-full cursor-pointer">
                    <div className="mr-1 text-sm block box-border">More Discounts</div>
                    <div className="mr-1 text-sm block box-border">
                      {selectedApartment.moreDiscounts}
                    </div>
                  </div>
                  <div className="block whitespace-nowrap -my-[10px]">
                    <div className="relative touch-manipulation cursor-pointer text-center p-[10px] -mx-[10px]">
                      <div className="text-sm block box-border">
                        <IoIosArrowForward />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Select an apartment/house to view details</div>
      )}
    </div>
  );
};
