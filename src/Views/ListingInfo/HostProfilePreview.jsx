import React from "react";

const HostProfilePreview=()=>{

    return(
         <div>
            <div className=" mb-6 box-border block ">
                <h2 className=" text-2xl font-semibold" >About your host</h2>

            </div>
            <div className=" flex flex-col gap-8 max-w-[380px] box-border bg-slate-400" >
                <div className=" relative block" >
                    <div className=" px-8 py-6 gap-6 min-h-[230px] w-full flex font-bold bg-orange-700 rounded-2xl ">
                        <div className=" flex-grow flex flex-col items-center justify-center gap-2 ">
                            {/* add bg position */}
                            <div className=" relative box-border block h-[104px] w-[104px] bg-[url('https://a0.muscache.com/im/pictures/user/82130759-fbba-4012-ac60-51d5b0e4801e.jpg?im_w=240')] bg-center rounded-[50%] bg-cover bg-no-repeat   ">

                            </div>
                            <div className=" items-center flex flex-col max-w-[153px] box-border">
                                <div className="w-[153px] h-auto font-bold text-center flex-grow-0 flex-shrink-0 ">
                                    <span className=" text-2xl m-0 break-keep inline-block ">
                                            Christi-Anna
                                    </span>

                                </div>
                                <span className=" text-sm font-semibold gap-1 items-center flex">
                                    <span>Superhost</span>

                                </span>
                                
                            </div>

                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </div>
          

        </div>



    );

}

export default HostProfilePreview;