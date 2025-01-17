import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import room from "../../assets/room.jpeg";
import kitchen from "../../assets/room2.jpeg";
import video from "../../assets/videos/luxuryInteriror.mp4";

const ThumbnailSlider = (props) => {
  const pics = [
    {
      id: "video",
      min: video,
    },
    {
      id: 2,
      min: kitchen,
    },
    {
      id: 3,
      min: room,
    },
    {
      id: 4,
      min: kitchen,
    },
    {
      id: 5,
      min: room,
    },
  ];

  const slides = pics.map((slide) => (
    <SplideSlide key={slide.id}>
      <div className="  ">
        <div className=" relative       ">
          <div className=" h-full w-full rounded  ">
            {slide.id === "video" ? (
              <video
                src={slide.min}
                alt="Video"
                className="rounded h-full w-full"
                
                controls
                playsInline // Add playsInline attribute for iOS
              />
            ) : (
              <img
                src={slide.min}
                alt="Thumbnail 1"
                className="rounded h-full w-full"
              />
            )}
          </div>
        </div>
      </div>
    </SplideSlide>
  ));

  return (
    <div className="md:hidden visible w-full">
      <Splide
        ref={(slider) => (props.slider2.current = slider)}
        className="thumbnail-slider"
        options={{
          gap: 10,
          perMove: 1,
          cover: true,
          fixedHeight: 50,
          fixedWidth: 66,
          isNavigation: true,
          pagination: false,
          rewind: true,
          mediaQuery: "min",
          breakpoints: {
            767: {
              destroy: true,
            },
          },
        }}
      >
        {slides}
      </Splide>
    </div>
  );
};

export default ThumbnailSlider;
