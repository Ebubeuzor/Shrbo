import React ,{ useState } from "react";
import { Tabs } from 'antd';
import HouseRulesTab from "./HouseRulesTab";



const items = [
  {
    key: '1',
    label: 'House Rules',
    children: <HouseRulesTab/>,
  },
  {
    key: '2',
    label: ' Damage and incidentals ',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];



const HouseRules=()=>{

  const onChange = (key) => {
    console.log(key);
  };
        

        return(
              <div className=" py-3 mb-6   " >
                <div className="mb-"></div>
                <p className="text-2xl w-[90%] mb-4 lg:mb-6  font-semibold block box-border  bg-white ">House Rules & Important Information</p>
                  
                  <div>
                      <Tabs defaultActiveKey="1" 
                      items={items} 
                      onChange={onChange} 
                      
                      type="card" />

                  </div>

                 
             
                

              </div>
        );

 }

export default HouseRules;