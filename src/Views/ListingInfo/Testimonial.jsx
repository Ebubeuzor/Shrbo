import React from "react";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import adv from "../../assets/user.png";




const Testimonial=()=>{

    const clients= [
        { 
          id: 1,user:'Sophie Moore',date:'august 28 2023',
          min:adv, header:'"They’re amazing plumbers"',
          review:'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.'
        },
        { 
            id: 2,user:'Sophie Moore',date:'august 28 2023',
            min:adv, header:'"They’re amazing plumbers"',
            review:'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.'
          },
          { 
            id: 3,user:'Sophie Moore',date:'august 28 2023',
            min:adv, header:'"They’re amazing plumbers"',
            review:'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.'
          },
          { 
            id: 4,user:'Sophie Moore',date:'august 28 2023',
            min:adv, header:'"They’re amazing plumbers"',
            review:'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.'
          },
          { 
            id: 5,user:'Sophie Moore',date:'august 28 2023',
            min:adv, header:'"They’re amazing plumbers"',
            review:'Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu sem integer vitae.'
          },
                
        
      ];


    const slides=clients.map((client)=>(
        <SplideSlide key={client.id}>
            <div className="slide my-3 ">

                <div className="comment rounded-2xl border p-5 md:p-7 shadow-md flex flex-col  justify-between h-[258px] md:h-[300px]   ">
                        <div className=" overflow-hidden text-ellipsis box-border block">
                            <p className=" text-lg md:text-2xl font-bold pb-3 ">
                                {client.header}
                            </p>

                            <div className="  overflow-hidden text-ellipsis box-border block text-base    md:text-lg "  >
                                <label className="sm overflow-clip ">
                                    {client.review}
                                </label>

                            </div>

                        </div>
                      
                        <div className="flex justify-items-start flex-row items-center box-border  mt-5  w4/5">
                            
                            <div   className=" h-[40px] w-[40px] md:w-[58px] md:h-[58px]  overflow-hidden rounded-full bg-orange-600 m-1"  ><img src={client.min}/></div>

                            <div className=" pt-3 pl-2" > 
                                <div className=" md:text-lg text-base font-bold text-orange-600"  ><label>{client.user} </label></div> 
                                <div className=" text-sm md:text-base"><label>{client.date}</label></div> 
                            </div>
                        </div>
                </div>

            </div>
            

        </SplideSlide>
       

    ));

    







    return(
        <div className="w-full ">
                <div className=" w-full ">
                    <div className=" w-full  ">

                             
                        <Splide  options={ {
                                        rewind: false,
                                        gap: '20px',
                                      
                                        autoplay:true,
                                        mediaQuery: 'min',
                                        breakpoints: {
                                              760: {
                                                perPage:2,
                                              },
                                        },

                                        perPage:1,
                                        pauseOnFocus:true,
                                        type: 'loop',
                                        pagination: false,
                                        }}>
                            {slides}
                        </Splide>







                    </div>

                    <div className=" mt-4  md:mt-6 ">
                                    <button type="button" className=" rounded-lg inline-block relative border transition-shadow py-[13px] px-[23px] text-base font-semibold">
                                        See all 36 reviews
                                    </button>

                                </div>                    




                </div>


        </div>


    )










}





export default Testimonial;