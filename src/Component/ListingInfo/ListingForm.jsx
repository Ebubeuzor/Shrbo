import React, { useState } from 'react';
import DatePicker from "react-datepicker"; 
import DateIcon from "../../assets/svg/date-icon.svg"
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button, Dropdown, Space  } from "antd";
import { Link } from "react-router-dom";
import Popup from '../../hoc/Popup';



export default function ListingForm(){
    
     function showModal(e) {
        e.preventDefault()
        setIsModalVisible(true);
     }
        
    function handleCancel() {
            setIsModalVisible(false);
     }
  

    const handleCheckIn = (date) => {
        setCheckInDate(date);
      };
      const handlecheckOut = (date) => {
        setCheckOutDate(date);
      };

      const [checkInDate, setCheckInDate] = useState(null);
      const [checkOutDate, setCheckOutDate] = useState(null);
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [adults, setAdults] = useState(1);
      const [children, setChildren] = useState(0);
      const [pets, setPets] = useState(0);
      const [infants, setInfants] = useState(0);


  return (
   <div className=' hidden md:block w-full h-full'>
        <div className="block mt-12 mb-12 sticky z-[100]  top-[80px] box-border  
         w-full max-w-sm rounded-lg bg-white p-6 
        shadow-xl ">
            <div className=' p-3 rounded relative box-border'>
                <div className=' justify-between items-center flex text-sm'>
                    <div className=' gap-2 items-end flex box-border' >
                        <div className=' flex-col flex box-border'>
                            <div className=' gap-2 justify-start flex-wrap flex-row items-center flex'>
                                <div >
                                    <span aria-hidden='true' >
                                        <div className=' font-medium text-xl box-border'>
                                                $110
                                        </div>

                                    </span>

                                </div>
                                <div className=' font-normal text-start text-xs'>
                                        per night
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div>

                </div>

            </div>

            <div>
            
                <form>
                    <div className="grid grid-cols-2 gap-4 p-2">
                    {/* <!--check In name input--> */}
                    <div className='border border-gray-300 p-2 rounded-lg shadow-sm relative'>
                        <DatePicker
                            selected={checkInDate}
                            onChange={handleCheckIn}
                            placeholderText='Check in'
                            dateFormat="dd/MM/yyyy" // You can customize the date format
                        />
                        <img src={DateIcon} className="w-4 absolute transform-[translateY(-50%)]" alt="Check In" />
                        </div>
                            
                    {/* <!--check out input--> */}
                    <div className='border border-gray-300 p-2 rounded-lg shadow-sm'>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={handlecheckOut}
                            className=''
                            placeholderText='Check in'
                            dateFormat="dd/MM/yyyy" // You can customize the date format
                        />
                            <img src={DateIcon} className="w-4" alt="Check out" />
                        </div>
                
                    </div>

                

                    {/* <!--Traveler input--> */}

                    

                        <div className=' relative box-border p-2  '>
                            <div className=' overflow-hidden relative border rounded min-h-[50px] block box-border '>
                            <label className=' text-xs font-normal px-4  overflow-hidden absolute text-ellipsis whitespace-nowrap  '>Travelers</label>   
                            {/* <input className=' border rounded text-base font-normal '/> */}
                            <MyDropdown  
                              
                                adults={adults}
                                children={children}
                                pets={pets}
                                infants={infants}
                            />
                      
                              {/* <ListingFormModal isModalVisible={isModalVisible} handleCancel={handleCancel} />   
                            */}
                           
                            </div> 
                            </div>   
     

                    {/* <!--total before and after tax--> */}
                    <div className=" min-h-[1.5rem] w-full   p-3">
                   
                      <div className=" border-t py-4 flex flex-col gap-1">
                                    <div className=" font-medium text-base box-border flex items-end justify-between break-words    ">
                                        <span > Total before tax  </span>
                                        <div className=" whitespace-nowrap break-normal ">$566.54</div>
                                    </div>

                                    <div className=" font-normal text-sm box-border flex items-end justify-between break-words    ">
                                        <span > see full price</span>
                                        <button type='button' className=" whitespace-nowrap break-normal underline text-blue-500 cursor-pointer " onClick={showModal} >price details</button>
                                                  
                                    
                                     
                                    </div>
                             {/*                                       
                                // handles the modal  when price details is clicked  */}
                                    <Popup isModalVisible={isModalVisible} handleCancel={handleCancel} title={"Price details"} >   
                                            <label>hello</label>
                                    </Popup>
                       </div>

                    

                    

                    
                    </div>

                    {/* <!--Submit button--> */}
                    <div className='p-2'>
                        <button
                            type="button"
                            className="block w-full h-11 rounded bg-orange-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal 
                            text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                            ,0_4px_18px_0_rgba(59,113,202,0.1)]]"
                        >
                            Book
                        </button>

                    </div>
                
                    
                </form>
            </div>


        </div>
    </div>
  );
}





// handles the drop down when Traveler is clicked 

function MyDropdown({
    adults,
    children,
    pets,
    infants,
  }) {
    const [adultCount, setAdultCount] = useState(adults);
    const [childCount, setChildCount] = useState(children);
    const [petCount, setPetCount] = useState(pets);
    const [infantCount, setInfantCount] = useState(infants);
    const [visible,setVisible]=useState(false);

    const handleDecrease = (setter, value) => {
        if (value > 0) {
          setter(parseInt(value, 10) - 1);
        }
      };
    
      const handleIncrease = (setter, value) => {
        setter(parseInt(value, 10) + 1);
      };


    const handleSubmit=()=>{
        // e.preventDefault();
        setVisible(!visible);

    }  
  

    const items = [
        
        
         <div key={1} className="flex w-[295px] flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Adults:</span> <br />
            <p className="text-gray-400">Ages 13 or above</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setAdultCount, adultCount)}
            >
              -
            </Button>
            <span>{adultCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setAdultCount, adultCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Children:</span>
            <p className="text-gray-400">Ages 2–12</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setChildCount, childCount)}
            >
              -
            </Button>
            <span>{childCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setChildCount, childCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Pets:</span>
            <p>
              <Link className="text-gray-400 underline">
                Bringing a service animal?
              </Link>
            </p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setPetCount, petCount)}
            >
              -
            </Button>
            <span>{petCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setPetCount, petCount)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-col">
            <span className="text-lg">Infants:</span>
            <p className="text-gray-400">Under 2</p>
          </div>
          <div className="space-x-2">
            <Button
              shape="circle"
              onClick={() => handleDecrease(setInfantCount, infantCount)}
            >
              -
            </Button>
            <span>{infantCount}</span>
            <Button
              shape="circle"
              onClick={() => handleIncrease(setInfantCount, infantCount)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    ];
      








    return (
      <Dropdown trigger={['click']}
      autoAdjustOverflow={false}
      onOpenChange={handleSubmit}
      open={visible}
   
     
      dropdownRender={(menu) => (
        <div className=' bg-white' >
          
          <Space
            
            className='p-6  flex-col w-full shadow-md'
          >
             {items}
            <Button  className='bg-orange-700' type="primary" onClick={handleSubmit}>Click me!</Button>
          </Space>
        </div>
      )}
      
      >
        <Space>

           <button type='button' className=' block m-4 cursor-pointer overflow-hidden text-ellipsis text-start whitespace-nowrap text-base font-normal      '>1 traveler 2 pets </button>  
        </Space>
                            
      </Dropdown>
    );
  }
  
