import React from "react";
import room from "../../assets/room.jpeg";
import kitchen from "../../assets/room2.jpeg";
import react from "../../assets/react.svg";
import SliderFull from "./SliderFull"
const ListingPhotos=()=>{

    const labels = [
        'Rating(4.8)',
        'Reviews(33 reviews)',
        'Ottawa, Ontario, Canada'
      ];
    
      const labelElements = labels.map((label, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="p-1  font-bold">.</span>}
          <label className="text-base ">{label}</label>
        </React.Fragment>
      ));


    return(
        <div className="w-full flex flex-wrap flex-col-reverse md:flex-row h-full">
            <section className="  w-full mt-5">  
               <div className=" text-3xl font-semibold inline break-words  ">
                     <p>Penthouse in La Juarez</p> 
                </div>

                <div className=" flex mt-1 ">

                    <div className="w-[70%]">
                        {labelElements}
                    </div>
                  
                    <div className="w-[30%] hidden md:flex items justify-end gap-5  ">


                            <button>
                                <div className=" flex underline ">
                                    <span className=" mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                      viewBox="0 0 24 24"
                                      width="17px"
                                      height="17px"
                                    >
                                        <path d="M12,1L8,5H11V14H13V5H16M18,
                                        23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,
                                        7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,
                                        9V21A2,2 0 0,1 18,23Z" />
                                    </svg>
                                    </span>

                                  <label className=" text-sm font-medium">Share</label>  
                                </div>

                            </button>


                            <button>
                                <div className=" flex underline " >
                                    <span className=" mr-2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24"
                                        width="17px"
                                        height="17px"
                                       
                                        
                                        >
                                        <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,
                                        5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,
                                        5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,
                                        3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,
                                        5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,
                                        20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                    </svg>
                                    </span>

                                  <label className=" text-sm font-medium" > Save</label> 
                                </div>
     

                            </button>

                           
                    </div>
                

                </div>
            
            </section>

            <div className=" xl:flex xl:flex-row  relative mt-5 w-full xl:h-[394px]  hidden     ">
                <div className=" w-1/2 h-full rounded-l-xl  overflow-hidden  ">
                        <img className=" " src={room}/>
                </div>

                <div className=" w-1/4  pl-2 h-full flex flex-wrap flex-col overflow-hidden gap-2    "   >
                        <img src={kitchen} className=""/>
                        <img src={room} className="  "/>
                </div>

                <div className=" w-1/4 flex flex-wrap flex-col gap-2  pl-2 h-full overflow-hidden  rounded-r-xl   ">
                        <img src={room} className=" " />
                        <img src={kitchen} className=""/>
                </div>

                <div className=" absolute bottom-9 right-9 "> 
                      <button className=" bg-black/80 hover:bg-black/90 p-3 w-36 rounded ">
                        <div className="flex">
                          <span className="mx-1">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"
                            width="17px"
                            height="17px"
                            fill="#FFFFFF"
                            >
                            <path d="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,
                            19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,
                            0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z" />
                          </svg>
                          </span>
                          <label className=" text-white text-sm">More Photos</label>
                          
                        </div>
                       
                      </button>

                </div>

            </div>

            <SliderFull/>





            

        </div>
    );



}

export default ListingPhotos;