import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import room from "../../assets/room.jpeg";
import kitchen from "../../assets/room2.jpeg";

const MainSlider = (props) => {

  const pics= [
    { 
      id: 1,min:room
    },
    { 
      id: 2,min:kitchen
    },
    { 
      id: 3,min:room
    },
    { 
      id: 4,min:kitchen
    },
    { 
      id: 5,min:room
    },   
    
  ];

 const slides=pics.map(slide=>(
  <SplideSlide key={slide.id}>
  <div className="  ">
  <div className=" relative      h-[258px]  ">

      
    <div className='  h-full w-full rounded  '>
      <img src={slide.min} alt="slide 1" className=' rounded   h-full w-full' />

    </div>
    </div>

    

  </div>
    
  </SplideSlide>

 ));



  return (
    <div className=' w-full  md:hidden' >

      <Splide ref={(slider)=>(props.slider1.current=slider)} className="main-slider"  options={{
        perPage: 1,
        perMove:1,
        arrows:false,
        rewind:true,
        pagination:false,
        mediaQuery: 'min',
        breakpoints: {
          767: {
            destroy: true,
          },
        },
      
      }}>

        
       {slides}
        {/* Add more SplideSlides as needed */}
      </Splide>
    
    </div>

    );
};

export default MainSlider;
