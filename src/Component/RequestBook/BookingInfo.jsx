import React, { useState } from 'react';
import DatePicker from "react-datepicker"; 
import DateIcon from "../../assets/svg/date-icon.svg"
import 'react-datepicker/dist/react-datepicker.css';
import {Dropdown, Popover, Button ,Space } from 'antd';
import { Link } from "react-router-dom";
import Popup from '../../hoc/Popup';
import ContactInfo from './ContactInfo';

// import 'antd/dist/antd.css';

 const BookingInfo=()=>{

    const [checkInDate, setCheckInDate] = useState(null);
      const [checkOutDate, setCheckOutDate] = useState(null);
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [adults, setAdults] = useState(0);
      const [children, setChildren] = useState(0);
      const [pets, setPets] = useState(0);
      const [infants, setInfants] = useState(0);

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


    return(
        <div>
            <div className="reservation-input mb ">
            <form>
                      {/* <!--Date--> */}
                   <div className='mx-2 mt whitespace-pre-wrap box-border text-base' >Nov 20 - Dec 20</div>

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
                              {/* <MyPopover /> */}
                      
                              {/* <ListingFormModal isModalVisible={isModalVisible} handleCancel={handleCancel} />   
                            */}
                           
                            </div> 
                            </div>   
     

                    {/* <!--Subscribe newsletter checkbox--> */}
                   

                
                    
                </form>

            </div>

            

            <div className=' md:rounded-t-lg md:mb-1 '>
                
                <div className=' md:m-2 md:mt-8'>
                    <div>
                        <section>
                            <div className=' mb-6 box-border block '>
                                <h3 className=' text-left font-semibold text-xl mb-3 '>Cancellation policy</h3>
                                <div className='cancellation box-border gap-1  flex'>
                                    <span className=' font-medium text-base'>Free cancellation</span>
                                    <label>until</label>
                                    <div className=' inline-block relative font-medium text-blue-600 underline cursor-pointer z-50' onClick={showModal}><span>Oct 10,2023</span></div>
                                </div>
                                
                                 {/*                                       
                                // handles the modal  when price details is clicked  */}
                                    <Popup isModalVisible={isModalVisible} handleCancel={handleCancel} title={"Cancellation policy"} >   
                                            <label>hello</label>
                                    </Popup>

                            </div>
                            <div className=' relative block box-border'>

                            </div>

                        </section>
                        
                    </div>

                </div>

            </div>

            <ContactInfo/>


            
        </div>
    );

 }

export default BookingInfo;






  

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
        
        
         <div key={1} className="flex w-[520px] flex-col space-y-4">
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
      onOpenChange={handleSubmit}
      open={visible}
        
     
      dropdownRender={(menu) => (
        <div className=' bg-white' >
          
          <Space
            
            className='p-2 flex-col w-full shadow-md'
          >
             {items}
            <Button  className='bg-orange-700' type="primary" onClick={handleSubmit}> Click me!</Button>
          </Space>
        </div>
      )}
      
      >
        <Space>

           <button type='button' className=' block m-4 cursor-pointer overflow-hidden text-ellipsis text-start whitespace-nowrap text-base font-normal      '>1 traveler</button>  
        </Space>
                            
      </Dropdown>
    );
  }





  
  