import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import room from "../../assets/room.jpeg";
import kitchen from "../../assets/room2.jpeg";

const MainSlider = () => {
  return (
    <Splide options={{
      perPage: 1,
      mediaQuery: 'min',
      breakpoints: {
          640: {
              destroy: true,
          },
      }
   
    }}>
      <SplideSlide>
        <img src={room} alt="Slide 1 "  className='md:hidden'/>
      </SplideSlide>
      <SplideSlide>
        <img src={kitchen} alt="Slide 2"className='md:hidden' />
      </SplideSlide>
      {/* Add more SplideSlides as needed */}
    </Splide>
  );
};

export default MainSlider;
