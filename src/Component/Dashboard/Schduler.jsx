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
      blockedDates: [], // Store blocked dates here
      selectedHouse: null, // Store the selected house details here
    };
  }

  // Function to handle date blocking
  handleDateClick = (dateInfo) => {
    const { blockedDates } = this.state;
    const blockedDate = dateInfo.dateStr;

    // Check if the date is already blocked
    if (!blockedDates.includes(blockedDate)) {
      // Date is not blocked, add it to the blockedDates array
      this.setState({ blockedDates: [...blockedDates, blockedDate] });
    }
  };

  // Function to handle house selection
  handleHouseSelect = (house) => {
    // Set the selected house
    this.setState({ selectedHouse: house });
  };

  render() {
    const { blockedDates, selectedHouse } = this.state;
    const items = [
      {
        key: "1",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">Pricing</div>
        ),
        children: <Pricing selectedHouse={selectedHouse} />, // Pass selectedHouse as a prop
      },
      {
        key: "2",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">
            Availability
          </div>
        ),
        children: (
          <div className="text-neutral-600 rounded-t-lg">Upcoming</div>
        ),
      },
    ];

    // Define a list of houses
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

    // Extract house names from apartments
    const houseOptions = apartments.map((apartment) => apartment.name);

    return (
      <div className="flex box-border w-full">
        <div className="block flex-grow relative h-screen max-h-[800px] overflow-y-scroll example">
          <div className="flex flex-col relative py-8 px-6">
            {/* Add a dropdown to select a house */}
            <select
              name="houseSelect"
              id="houseSelect"
              onChange={(e) => this.handleHouseSelect(e.target.value)}
            >
              <option value="">Select a house</option>
              {houseOptions.map((house, index) => (
                <option key={index} value={house}>
                  {house}
                </option>
              ))}
            </select>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
              initialView="dayGridMonth"
              editable
              selectable
              dateClick={this.handleDateClick} // Handle date clicks to block dates
              // Add blocked dates to the calendar
              events={blockedDates.map((date) => ({
                title: "Blocked",
                start: date,
                allDay: true,
              }))}
            />
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
}

const Pricing = ({ selectedHouse }) => {
  // Define an array of apartment objects with pricing details for each house
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

  // Find the selected apartment/house based on the name
  const selectedApartment = apartments.find(
    (apartment) => apartment.name === selectedHouse
  );

  return (
    <div className="block box-border overflow-y-scroll example ">
      {selectedApartment ? (
        <>
          {/* Display selected apartment/house details */}
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
              {/* Render pricing details for the selected apartment/house */}
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

              {/* Render other pricing details for the selected apartment/house */}
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
                    <div className=" ">
                      Adjust your pricing to add more guests.
                    </div>
                  </span>
                </div>
                <div className="flex flex-col gap-4 relative">
                  {/* Render weekly discount */}
                  <div className="cursor-pointer w-full h-full outline-none">
                    <div className="pointer p-6 rounded-2xl border">
                      <div className="mb-1 font-medium mr-1 text-sm">Weekly</div>
                      <div className="mb-3 mr-1 text-sm">
                        for 7 nights or more
                      </div>
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

                  {/* Render monthly discount */}
                  <div className="cursor-pointer w-full h-full outline-none">
                    <div className="pointer p-6 rounded-2xl border">
                      <div className="mb-1 font-medium mr-1 text-sm">
                        Monthly
                      </div>
                      <div className="mb-3 mr-1 text-sm">
                        for 28 nights or more
                      </div>
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

                  {/* Render more discounts */}
                  <div className="rounded-2xl flex border p-6 justify-between items-center gap-3">
                    <div className="touch-manipulation relative outline-none h-full w-full cursor-pointer">
                      <div className="mr-1 text-sm block box-border">
                        More Discounts
                      </div>
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
        </>
      ) : (
        <div>Select an apartment/house to view details</div>
      )}
    </div>
  );
};
