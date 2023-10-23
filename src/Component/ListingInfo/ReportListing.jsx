import React, {useState,useEffect} from "react";
import { Radio } from 'antd';


const ReportListing=()=>{
    const [goNext,setGoNext]=useState(false);
    const[reportCategory,setReportCategory]=useState(0);
    const [reportType, setReportType] = useState();
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setReportType(e.target.value);
    };
    const onCategoryChange = (e) => {
        console.log('radio checked', e.target.value);
        setReportCategory(e.target.value);
    };

    const handleNext=()=>{
        setGoNext(true);

    }

    
    const handleBack=()=>{
        setGoNext(false);

    }

    const ReportTypes=[
        {index:1,report:"Inaccurate",type:"This listing Is inaccurate"},
        {index:2,report:"Offensive",type:"This listing Is offensive"},
        {index:3,report:"Fraudulent",type:"This listing Is fraudlent"}];

    const ReportCategories=[   
        {index:1,report:"Inaccurate",category:["The photos misrepresent the property","The listing details are incorrrect","The Listing is missing essential infromation"]},
        {index:2,report:"Offensive",category:["The photos ", "The listing details" ,"Reviews of the property" ,"Communication with the host"]},
        {index:3,report:"Fraudulent",category:["The property doesn't exist ","The host is requesting direct outsid of Shrbo","The Listing includes the host's personal infromation","The host is not authorized to rent the property"]}
    ] ;   


    return(
        <div className="w-full flex flex-col gap-6 ">

              {!goNext&&<p className=" text-lg pb-2 md:text-2xl font-medium " >Why are you reporting this listing?</p>}   

            <form>
            

            {!goNext? 
              
            <   div className=" flex items-stretch justify-start flex-wrap w-full  md:h-full overflow-hidden mt-2  ">
               
                <Radio.Group   buttonStyle={"solid"} onChange={onChange} value={reportType}   >
                    {ReportTypes.map((report)=>(
                        <div key={report.index} className=" relative px-[6px] mb-5  w-full  md:px-2 ">
                            <Radio   value={report.index}  ><span className=" text-base opacity-70  font-normal whitespace-nowrap   ">{report.type}</span></Radio>                    
                        </div>


                    ))}                      
                </Radio.Group>         
              </div>
                    :
              <div className=" w-full transition-3 ">
                    {ReportCategories.map((report)=>(
                        
                        <div className={` ${report.index===reportType?"block":"hidden"} transition-3`} key={report.index} >
                        <div className=" flex flex-col gap-6" >
                        <div className=" text-2xl font-medium ">The listing is {report.report} because?</div>
                        <div className=" text-base  ">Make sure you do not include any personal information in your feedback. We may contact you if we have any questions.</div>
                        <div className=" flex flex-row">

                        <Radio.Group   buttonStyle={"solid"} onChange={onCategoryChange} size="large"   >
                            {report.category.map((cat,index)=>(
                            <div key={index} className=" relative px-[6px] mb-5  w-full  md:px-2 ">
                                <Radio.Button className="   "   value={index}  ><span className=" text-base font-normal whitespace-nowrap   ">{cat}</span></Radio.Button>                    
                            </div>


                          ))}                      
                        </Radio.Group>  
                        </div>
                        <div className="">
                          
                            <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                placeholder="give us more details on why you think the listing is inaccurate "
                                className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:outline-gray-400  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                />
                            </div>
                         </div>

                         </div>
                        
                              

                    </div>
                                
                                                    ))}

              


              </div>
                    }






              <div className=" my-3 flex flex-row justify-between transition-3  "> 
                       <button type="button" onClick={handleBack} className= {`rounded-md transition-3 text-orange-400 ring-1 font-medium ring-orange-400 p-2 px-3 opacity-0 hover:bg-slate-50 ${goNext&&"opacity-100"}` }    >Back</button>
                        <button type="button" onClick={handleNext} disabled={reportType?false:true}    className={`rounded-md text-white  ${goNext?"hidden":"block"} hover:bg-orange-500   bg-orange-300 p-2 font-medium  px-4 ${reportType&&"bg-orange-400"}`}>Next</button>
                        <button onClick={handleNext} disabled={reportType?false:true}    className={`rounded-md text-white ${!goNext?"hidden":"block"} hover:bg-orange-500  bg-orange-300 p-2 font-medium  px-4 ${reportType&&"bg-orange-400"}`}>Submit</button>
              </div>
              </form>

        </div>

    );


}

export default ReportListing;