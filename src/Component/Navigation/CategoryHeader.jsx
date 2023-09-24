import React, { useState, useRef, useEffect } from "react";
import Homes from "../../assets/svg/house-window-icon.svg";
import Travel from "../../assets/svg/aeroplane-icon.svg";
import Food from "../../assets/svg/dish-spoon-knife-icon.svg";
import Office from "../../assets/svg/building-icon.svg";
import Art from "../../assets/svg/paint-palette-icon.svg";
import Beach from "../../assets/svg/holiday-vacation-icon.svg";
import LeftButton from "../../assets/svg/angle-circle-left-icon.svg";
import FilterModal from "../Filter/FilterModal";

export default function CategoryHeader() {
  const categories = [
    { id: "design", label: "Design", image: Homes, link: "/" },
    { id: "travel", label: "Travel", image: Travel, link: "/" },
    { id: "food", label: "Food", image: Food, link: "/" },
    { id: "Office", label: "Office", image: Office, link: "/" },
    { id: "Art", label: "Art", image: Art, link: "/" },
    { id: "Beach", label: "Beach", image: Beach, link: "/" },
    { id: "11", label: "Food", image: Food, link: "/" },
    { id: "12", label: "Office", image: Office, link: "/" },
    { id: "13", label: "Art", image: Art, link: "/" },
    { id: "1", label: "Beach", image: Beach, link: "/" },
    { id: "4", label: "Food", image: Food, link: "/" },
    { id: "10", label: "Office", image: Office, link: "/" },
    { id: "7", label: "Art", image: Art, link: "/" },
    { id: "2", label: "Beach", image: Beach, link: "/" },
    { id: "6", label: "Food", image: Food, link: "/" },
    { id: "8", label: "Office", image: Office, link: "/" },
    { id: "9", label: "Art", image: Art, link: "/" },
    { id: "3", label: "Beach", image: Beach, link: "/" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const scrollerRef = useRef(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePreviousCategory = () => {
    const currentIndex = categories.findIndex(
      (category) => category.id === selectedCategory
    );
    const previousIndex =
      (currentIndex - 1 + categories.length) % categories.length;
    setSelectedCategory(categories[previousIndex].id);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.findIndex(
      (category) => category.id === selectedCategory
    );
    const nextIndex = (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[nextIndex].id);
  };

  useEffect(() => {
    if (scrollerRef.current) {
      const selectedCategoryIndex = categories.findIndex(
        (category) => category.id === selectedCategory
      );
      const scrollAmount = selectedCategoryIndex * 120;
      scrollerRef.current.scroll({ left: scrollAmount, behavior: "smooth" });
    }
  }, [selectedCategory]);

  const currentIndex = categories.findIndex(
    (category) => category.id === selectedCategory
  );
  const canScrollBackward = currentIndex > 0;
  const canScrollForward = currentIndex < categories.length - 1;

  return (
    <div className="mt-16 md:mt-40 w-full">
      <div className="flex space-x-1 items-center">
        <button
          className={`border-1 p-1 md:w-8 md:h-8 rounded-full ${
            canScrollBackward ? "" : "opacity-50 cursor-not-allowed"
          } shadow-2xl`}
          onClick={handlePreviousCategory}
          disabled={!canScrollBackward}
          style={{ border: "1px solid black" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4" // You can adjust the width and height here
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <div className="overflow-x-auto flex space-x-10" ref={scrollerRef}>
          {categories.map((category) => (
            <a key={category.id} href={category.link} className="text-center">
              <div
                className={`flex flex-col items-center cursor-pointer  ${
                  selectedCategory === category.id ? "font-bold" : ""
                }`}
                aria-hidden="true"
                tabIndex="-1"
              >
                <input
                  type="radio"
                  name="categoryScroller"
                  className="hidden"
                  checked={selectedCategory === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <div className="  rounded-full h-4 w-4 md:h-10 md:w-10">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full h-full  object-contain opacity-40"
                  />
                </div>
                <span className="mt-1 text-sm text-gray-500">
                  {category.label}
                </span>
              </div>
            </a>
          ))}
        </div>
        <button
          className={`border-1 p-1 md:w-8 md:h-8 rounded-full ${
            canScrollForward ? "" : "opacity-50 cursor-not-allowed"
          } shadow-md`}
          onClick={handleNextCategory}
          disabled={!canScrollForward}
          style={{ border: "1px solid black" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4" // You can adjust the width and height here
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <FilterModal />
      </div>
    </div>
  );
}
