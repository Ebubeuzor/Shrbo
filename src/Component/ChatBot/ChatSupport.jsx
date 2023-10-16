import React, { useState,useRef,useEffect } from "react";
import Avatar from "./Avatar"
import SupportWindow from "./SupportWindow/SupportWindow";


const ChatSupport = () => {
    const ref=useRef(null)
    const [visible,setVisible]=useState(false);


    function handleClose(){
    
            setVisible(false)
  
    }


  




    return (
        <div ref={ref} className=" w-full "  >
            <SupportWindow 
                visible={visible}
                close={handleClose}

            />

            {!visible&& <Avatar
                onClick={()=>setVisible(true)}
                style={" fixed bottom-6 right-6 "}
            />}
        

        </div>
    )
}

export default ChatSupport;