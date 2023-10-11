import React, { Component, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Tabs } from "antd";
import multiMonthPlugin from "@fullcalendar/multimonth";
import { IoIosArrowForward } from "react-icons/io";
import HostHeader from "../Navigation/HostHeader";
import HostBottomNavigation from "./HostBottomNavigation";
import { Modal } from "antd";


export default class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockingMode: false,
      blockedDates: [],
      selectedHouse: null,
      selectedDate: null,
      selectedDatePrice: "",
      selectedEditDate: null,
      isEditingPrice: false, // State for editing mode
      editedPrice: "", // State for edited price
      selectedDates: [], // Array to track selected dates
      showWeeklyDiscountDetails: false, // State for toggling details

      
    };
  }
  handleToggleWeeklyDetails = () => {
    this.setState((prevState) => ({
      showWeeklyDiscountDetails: !prevState.showWeeklyDiscountDetails,
    }));
  };


  
  handleDateClick = (dateInfo) => {
    const { blockedDates, blockingMode, selectedDates } = this.state;
    const clickedDate = dateInfo.dateStr;
  
    if (blockingMode) {
      const updatedBlockedDates = blockedDates.includes(clickedDate)
        ? blockedDates.filter((date) => date !== clickedDate)
        : [...blockedDates, clickedDate];
  
      this.setState({ blockedDates: updatedBlockedDates });
    } else {
      if (blockedDates.includes(clickedDate)) {
        const updatedBlockedDates = blockedDates.filter(
          (date) => date !== clickedDate
        );
        this.setState({ blockedDates: updatedBlockedDates });
      }
    }

    
  
    if (!blockingMode) {
      const { selectedDates } = this.state;
  
      // Check if the clicked date is in the selectedDates array
      if (selectedDates.includes(clickedDate)) {
        // If the date is already selected, remove it
        const updatedSelectedDates = selectedDates.filter(
          (date) => date !== clickedDate
        );
        this.setState({ selectedDates: updatedSelectedDates });
      } else {
        // If the date is not selected, add it
        this.setState({
          selectedDates: [...selectedDates, clickedDate],
          selectedEditDate: dateInfo.dateStr,
          selectedDatePrice: "",
          showWeeklyDiscountDetails: true, // Show discount details when a date is clicked

        });
      }
    }
  };


  

  handlePriceChange = (event) => {
    const newPrice = event.target.value;
    this.setState({ selectedDatePrice: newPrice });
  };

  handleEditPrice = () => {
    this.setState({ isEditingPrice: true });
  };

  handleSavePrice = (event) => {
    event.preventDefault();
  
    const { selectedEditDate, selectedDatePrice } = this.state;
  
    if (selectedEditDate) {
      Modal.confirm({
        title: "Save Changes",
        content: "Are you sure you want to save the changes?",
        onOk: () => {
          // User confirmed, proceed with saving the changes
          console.log("Date:", selectedEditDate);
          console.log("Price:", selectedDatePrice);
        },
        onCancel: () => {
          // User canceled, do nothing or handle it as needed
        },
      });
    } else {
      console.error("Please select a date before saving the price.");
      
      // Clear the input values with a callback
      this.setState({ selectedDatePrice: "", editedPrice: "" }, () => {
        Modal.confirm({
          title: "Error",
          content: "Please select a date before saving the price.",
          onOk: () => {
            // User confirmed, you can choose to handle it as needed
          },
        });
      });
    }
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

   dateHasBackground = (date) => {
    return this.state.selectedDates.includes(date);
  };

  render() {
    const {
      blockingMode,
      blockedDates,
      selectedHouse,
      selectedDate,
      selectedDatePrice,
      isEditingPrice,
      editedPrice,
      showWeeklyDiscountDetails,

    } = this.state;
    const items = [
      {
        key: "1",
        label: (
          <div className="text-neutral-600 text-xl rounded-t-lg">Pricing</div>
        ),
        children: (
          <Pricing
          selectedHouse={selectedHouse}
          isEditingPrice={isEditingPrice}
          editedPrice={editedPrice}
          selectedDate={selectedDate}
          selectedDatePrice={selectedDatePrice}
          onEditPrice={this.handleEditPrice}
          onSavePrice={this.handleSavePrice}
          onPriceChange={this.handlePriceChange}
          blockingMode={blockingMode}
          handleToggleWeeklyDetails={this.handleToggleWeeklyDetails}
          showWeeklyDiscountDetails={showWeeklyDiscountDetails}
          // Pass the function as a prop
        />
        
        ),
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
    ];

  

    

    const houseOptions = apartments.map((apartment) => apartment.name);

    return (
      <div>
        <HostHeader />
        <HostBottomNavigation />
        <div className="flex flex-wrap box-border w-full">
          <div className="block flex-grow relative overflow-y-scroll example">
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
              {selectedHouse && (
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
             eventContent={(arg) => {
               return {
                 html: `<div  >${arg.event.title}</div>`,
                 backgroundColor: this.dateHasBackground(arg.event.start) ? 'blue' : 'white',
                 // Customize the background color as needed
               };
             }}
           />
              )}
              {selectedDate && blockingMode && (
                <div className="mt-4 border">
                  <label className="font-semibold text-lg">
                    Price for {selectedDate}
                  </label>
                  {isEditingPrice ? ( // Check the editing mode
                    <div>
                      <input
                        type="number"
                        value={editedPrice}
                        onChange={this.handlePriceChange}
                        placeholder="Enter price per night"
                      />
                      <button onClick={this.handleSavePrice}>Save</button>
                    </div>
                  ) : (
                    <div>
                      <div className="font-medium">{selectedDatePrice}</div>
                      <button onClick={this.handleEditPrice}>Edit</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <section className=" w-[370px] border-l z-[1] min-[1128px]:block">
            <div className=" block box-border overflow-auto h-screen relative bg-white">
              <div className="block box-border py-8 px-6">
                <Tabs defaultActiveKey="1" items={items} />
              </div>
            </div>
          </section>
        </div>
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

const Pricing = ({
  selectedHouse,
  isEditingPrice,
  editedPrice,
  onEditPrice,
  onSavePrice,
  onPriceChange,
  selectedDate,
  blockingMode,
  selectedDatePrice,
  showWeeklyDiscountDetails, // Receive showWeeklyDiscountDetails as a prop
  handleToggleWeeklyDetails, // Access the function from props
}) => {
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
  ];

  const selectedApartment = apartments.find(
    (apartment) => apartment.name === selectedHouse
  );

  const clearInputValue = () => {
    // This function will clear the input value
    onPriceChange({ target: { value: "" } });
  };

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
                    <div className="block">{selectedApartment.basePrice}</div>
                    {editedPrice}
                  </div>
                  {isEditingPrice ? (
                    <div>
                      <form onSubmit={(e) => { onSavePrice(e); clearInputValue(); }}>
                        <input
                          type="number"
                          value={selectedDatePrice}
                          onChange={onPriceChange}
                          placeholder="Enter price per night"
                        />
                        <button type="submit">Save</button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <div className="font-medium">{selectedDatePrice}</div>
                      <button onClick={onEditPrice}>Edit</button>
                    </div>
                  )}
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
                  <div className=" ">
                    Adjust your pricing to add more guests.
                  </div>
                </span>
              </div>
              <div className="flex flex-col gap-4 relative">
                <div className="cursor-pointer w-full h-full outline-none">
                  <div
                    className="pointer p-6 rounded-2xl border"
                    onClick={handleToggleWeeklyDetails} // Use the function from props
                  >
                    <div className="mb-1 font-medium mr-1 text-sm">
                      Weekly
                    </div>
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
                {showWeeklyDiscountDetails ? (
                  <div>
                    <div className="mb-1 font-medium mr-1 text-sm">
                      Weekly discount details
                    </div>
                    {/* Add more details as needed */}
                    <div>
                      Weekly discount details content goes here.
                    </div>
                  </div>
                ) : null}
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

