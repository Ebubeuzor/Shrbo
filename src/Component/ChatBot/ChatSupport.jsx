import React, { useState,useRef,useEffect } from "react";
import Avatar from "./Avatar"
import SupportWindow from "./SupportWindow/SupportWindow";
import { FloatButton } from 'antd';
import { CommentOutlined } from '@ant-design/icons';


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

            {!visible&& <FloatButton icon={<CommentOutlined />} badge={{
          count: 1,
        }}
         tooltip={<div>Customer Support</div>}  onClick={ ()=>{setVisible(true)}}    />
            }
        

        </div>
    )
}

export default ChatSupport;