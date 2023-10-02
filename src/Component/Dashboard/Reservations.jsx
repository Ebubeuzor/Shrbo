import React,{useState} from "react";
import { Tabs } from 'antd';
import { useNavigate } from "react-router-dom";
import GoBackButton from "../GoBackButton"


// const onChange = (key) => {
//     console.log(key);
//   };








const Reservations=()=>{
    const [allKey, setAllKey] = useState("");

    const toAll = (key) => {
      setAllKey(key);
      console.log(allKey);
    };
  
    
    
  const navigate = useNavigate();

  // Takes you back to previous page
  const handleGoBack = () => {
    navigate(-1);
  };


  const empty = (all) => (
    <div className=" flex flex-col items-center justify-center ">
      <p>You have no upcoming Reservations</p>
      <button className="underline" onClick={() => toAll(all)}>
        See all reservations
      </button>
    </div>
  );


const children1=null;
;

const items = [
    {
      key: '1',
      label: (
        <div className=" text-neutral-600  rounded-t-lg">
          Upcoming 
        </div>
      ),
      children: children1 || empty('4'),
    },
    {
      key: '2',
      label: (
        <div className="text-neutral-600 rounded-t-lg">
          Completed
        </div>
      ),
      children: children1 || empty('4'),
    },
    {
      key: '3',
      label: (
        <div className="text-neutral-600  rounded-t-lg">
         Canceled
        </div>
      ),
      children: children1 || empty('4'),
    },
    {
        key: '4',
        label: (
          <div className="text-neutral-600  rounded-t-lg">
           All
          </div>
        ),
        children: children1 || empty('4'),
      },
  ];










  


    return(
        <div className="px-6 md:px-10 xl:px-20 max-w-7xl h-full  m-auto  flex flex-wrap flex-col md:gap-4 relative " >


                    <div className="  py-[18px]  sticky  w-full top-0 block  bg-white
                                         box-border z-[50]   md:px-10 lg:px-6    ">
                            <div className=" flex items-center gap-16  "> 

                                <GoBackButton/>  

                                <div className=" pr-[18px] -ml-8 mt-[10px]  md:block cursor-pointer hidden  md:relative ">
                                    <button onClick={handleGoBack}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                >
                                    <title>keyboard-backspace</title>
                                    <path d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
                                </svg>
                                </button>
                            </div>
                                                          
                            </div>     



                        </div>




            <div>

                    <div className=" mx-auto w-full box-border  text-base  md:block  ">
                        <div className="  box-border text-base ">
                        <section>
                            <div className=" pt-4   pb-4 flex flex-row items-center box-border">
                            
                            <div className=" text-3xl font-semibold">
                                <h1 className=" "> Reservations</h1>
                            </div>
                            </div>
                        </section>
                        </div>
                    </div>

                    <Tabs defaultActiveKey="1" key={allKey} items={items} />

            </div>
           

            



        </div>
    );


}


export default Reservations;