import React, { useState } from 'react';
import DatePicker from "react-datepicker"; 
import DateIcon from "../../assets/svg/date-icon.svg"
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button, Dropdown, Space  } from "antd";
import { Link } from "react-router-dom";



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
      const [adults, setAdults] = useState(0);
      const [children, setChildren] = useState(0);
      const [pets, setPets] = useState(0);
      const [infants, setInfants] = useState(0);


  return (
   <div className=' hidden md:block w-full h-full'>
        <div className="block mt-12 mb-12 sticky z-[100]  top-[80px] box-border  
         w-full max-w-sm rounded-lg bg-white p-6 
         shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
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
     

                    {/* <!--Subscribe newsletter checkbox--> */}
                    <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                    <input
                        className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]
                         border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute 
                         before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 
                         before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary 
                         checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] 
                         checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 
                         checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid 
                         checked:after:border-white checked:after:bg-transparent checked:after:content-[''] 
                         hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                         focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] 
                         focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                         focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
                         focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 
                         checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
                          checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] 
                          checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 
                          checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent 
                          dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                        type="checkbox"
                        value=""
                        id="exampleCheck25"
                    />
                    <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck25"
                    >
                        Subscribe to our newsletter
                    </label>

                    

                    

                    
                    </div>

                    {/* <!--Submit button--> */}
                    <div className='p-2'>
                        <button
                            type="button"
                            className="block w-full rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
                            text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                            ,0_4px_18px_0_rgba(59,113,202,0.1)]]"
                        >
                            Sign up
                        </button>

                    </div>
                
                    
                </form>
            </div>


        </div>
    </div>
  );
}





function ListingFormModal({isModalVisible, handleCancel}){
   

    return(
        <div>
            
            <Modal
                title="Traveler"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                     <p>This is the content of the modal.</p>
            </Modal>

        </div>
    );

}





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

    const handleDecrease = (setter, value) => {
        if (value > 0) {
          setter(parseInt(value, 10) - 1);
        }
      };
    
      const handleIncrease = (setter, value) => {
        setter(parseInt(value, 10) + 1);
      };
  

    const items = [
        
        
         <div key={1} className="flex flex-col space-y-4">
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
     
      dropdownRender={(menu) => (
        <div className=' bg-white' >
          
          <Space
            style={{
              padding: 8,
              flexDirection:'column'
            }}
          >
             {items}
            <Button loading='true' className='bg-orange-700' type="primary">Click me!</Button>
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
  
