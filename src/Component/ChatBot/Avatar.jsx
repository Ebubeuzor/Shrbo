import React,{useState} from "react";
import {styles} from './Style'


const Avatar=(props)=>{
    const [hovered,setHovered]=useState(false);

    return(
            <div className={props.style}>
                <div
                className="transition-3"
                style={{
                    ...styles.avatarHello,
                    ...{display:hovered ? 'block' :'none'}
                }}>Customer Support</div>
                <div 
                className="transition-3"
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
                onClick={()=>props.onClick&& props.onClick()}
                style={{
                    ...styles.chatWithMeButton,
                    ...{border:hovered ? '1px solid #f9f0ff':'4px solid #7a39e0'}
                    
                }} />

            </div>

    )


}

export default Avatar;