import React from "react";



const HostedBy=()=>{
    const ListingCategory="Room in a townhouse";
    const Host="Christi-Anna";
    const phone="M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M3,5H1V21A2,2 0 0,0 3,23H19V21H3M15.96,10.29L13.21,13.83L11.25,11.47L8.5,15H19.5L15.96,10.29Z"
    const person="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z"


    const info = [
        { id: 1, url:phone,text:"1 bed"},
        { id: 2, url:person,text:"Shared bathroom"},
        { id: 3, url:phone,text:"Host or others may share home "},
        { id: 4, url:phone,  text:"Keynotes & Trainings"},
        { id: 5, url:phone,  text:"Test, Quizzes & Exams"},
      ];

        // 2 bedroom, living room, 3 bath room ,  cinema Room 
    const amenities=info.map(amenity=>(

            <li className="flex flex-wrap flex-col p-4  gap-2 justify-between xl:justify-normal   xl:flex-row  items-center min-h-[72px] rounded-xl border xl:py-4 xl:px-6  " key={amenity.id} >
                <div className="   ">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    width="25px"
                    height="25px"
                    ><path d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,
                    20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,
                    1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,
                    4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z" /></svg>
                </div>
                <div className="  overflow-hidden text-ellipsis box-border block  "> 
                    <div className=" text-xs lg:text-sm overflow-clip   font-semibold ">{amenity.text}</div>
                </div>
            </li>
    ));  


    



    return(
        <div className="w-full">
            <div className=" border-b border-t lg:border-t-0 py-6 lg:pt-0 w-full">
                <div className="flex gap-4 items-start w-full break-words justify-between flex-row mb-4  lg:mb-6 " >
                    <div className=" text-2xl w-[90%]  font-semibold block box-border  bg-white "><h1>{ListingCategory} by {Host}</h1></div>
                    <div>
                        <div className=" w-[48px] h-[48px]  overflow-hidden rounded-full "> <img src="https://a0.muscache.com/im/pictures/user/82130759-fbba-4012-ac60-51d5b0e4801e.jpg?im_w=240"   /> </div> 
                    </div>
                
                </div>
                <ul className=" grid grid-cols-3 gap-2 overflow-x-scroll list-disc   " >
                        {amenities}
                </ul>
                
             </div>
             <div className="Perks " >

             </div>



        </div>
      

    );

}

export default HostedBy;


// border-radius: 50px;
// overflow: hidden;
// padding: 0px;
// width: 65px;
//   height: 65px; 