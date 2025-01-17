import React,{useState, useEffect, useRef } from "react";
import {styles} from '../Style';
import messagesent from '../../../assets/message-sent.mp3'
import {SendOutlined} from '@ant-design/icons'
import { Radio } from 'antd';


const formatDate = (date) => {
    const today = new Date();
    const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return `today, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffInDays === 1) {
      return `yesterday, ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return date.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit' });
    }
  };





const ChatEngine= (props) => {

    const [startTime, setStartTime] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [imageInput, setImageInput] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

  const automateSlide=useRef();

  
  const imageRef=useRef();

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      setIsTyping(true);

      clearTimeout(typingTimeout);

      typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000); // Adjust the timeout duration as needed
    };

    // const handleInputMessageChange = (e) => {
    //   setInputMessage(e.target.value);

    //   if (e.target.value.trim() === "") {
    //     // Clear typing indicator immediately if input is empty
    //     setIsTyping(false);
    //     clearTimeout(typingTimeout.current);
    //   } else {
    //     handleTyping();
    //   }
    // }; 
    // Simulate typing when a message is being typed
    if (inputMessage.trim() != "") {
      handleTyping();
    }
    automateSlide.current.scrollIntoView({behavior:'smooth'});

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [inputMessage]);


 


  useEffect(() => {
    let delayBot;
  
    setStartTime(new Date());



    if (props.botMessage) {
      const newMessages = props.botMessage.map((element,index)=> {
        return {
          content: element,
          timestamp: new Date(),
          isSentByUser: false,
       
         
        };
      });
      setIsTyping(true);
      clearTimeout(delayBot);

      delayBot = setTimeout(() => {
        setMessages([...messages, ...newMessages]);
        setIsTyping(false);
      }, 1000)
      
      
    
    }
      
    return () => {
      clearTimeout(delayBot);
    };
   


  }, []);
    

  const messageSentSound = new Audio(messagesent);
  // console.log(messages)

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() ===''&&imageInput.trim()==='') {
      return; // Don't send empty messages
    }

    messageSentSound.play();

    const newMessage = {
      content: inputMessage,
      image: imageInput,
      timestamp: new Date(),
      isSentByUser: true,
     
    };

    setMessages([...messages, newMessage]);
    setInputMessage(''); // Clear the input field after sending
    setImageInput('');
    setImagePreview('');
    automateSlide.current.scrollIntoView({behavior:'smooth'});

  };

  const handleImageInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImageInput(URL.createObjectURL(file));
    setImagePreview(URL.createObjectURL(file));
  };

  const clickImage=(e)=>{
    e.preventDefault();
    imageRef.current.click();

  }  


//   let typingTimeout = null;

// const handleTypingStart = () => {
//   if (typingTimeout) {
//     clearTimeout(typingTimeout);
//   }
  
//   setIsTyping(true);
//   typingTimeout = setTimeout(() => {
//     setIsTyping(false);
//   }, 4000); // Adjust the delay as needed
// };










    return (
        <div  className="transition-3" style={{...styles.chatEngineWindow,
                        ...{
                            height:props.visible ? '90%':'0%',
                            zIndex:props.visible ? '100' :' 0',
                            opacity:props.visible? '1':'0'
                            
                            ,
                    }
        }}>
      <div className="h-full" >
      {/* Timestamp for when the chat started */}
    {/* Timestamp for when the chat started */}
  

      {/* Chat messages display */}

      <form className="flex flex-col h-full w-full border p-4">
      <div className="flex example flex-col gap-3 flex-grow overflow-y-auto mb-4 ">
      <div className="mb-4 text-center ">
        Chat started: {startTime && formatDate(startTime)}
      </div>


         <div
            
            className= ' self-start bg-gray-200 text-slate-800 p-3 rounded-lg max-w-3/4 '
          >

            <p className="text-sm">Welcome! Please select a support:</p>
            <span className="text-xs">{startTime && formatDate(startTime)}</span>
          </div>


            
         <div
            
            className= ' self-end bg-blue-500 text-white p-3 rounded-md max-w-3/4 '
          >

            <p className="text-sm">{props.selectedOption}</p>
            <span className="text-xs text-right">{startTime && formatDate(startTime)}</span>
          </div>







        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isSentByUser ? 'self-end bg-blue-500 text-white' : 'self-start text-slate-800 bg-gray-200'
            } p-3 rounded-md max-w-[200px]   `}
            style={{ wordBreak: 'break-word' }}
          >
          {message.image ? (
          <div>
           
            <a href={message.image} download={`image_${index}.png`} className="text-blue-500 hover:underline block">
            <img src={message.image} alt="Sent Image" className="max-w-full md:max-h-[150px] mb-2" />
              Download Image
            </a>
        </div>
          ) : (
            
           
               
              <p className="text-sm">{message.content}</p>
             
        
          
            
       
          )}
          <span className="text-xs">{formatDate(message.timestamp)}</span>
          </div>
        ))}

    {/*typing indicator  */}
        {isTyping && (
            <div className="self-start bg-gray-300 p-2 rounded-lg max-w-[200px]">
             <div class="dot-pulse">
              <div class="dot-pulse__dot"></div>
              </div>
          </div>
            )}

        <span ref={automateSlide} className=" mt-1  "></span>
      </div>




      {/* Input area for typing messages */}
      <div className="flex relative">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-grow rounded-l-lg p-2 border pr-7 focus:border-2 focus:border-r-0 focus:border-blue-500 "
            value={inputMessage}
            // onKeyDown={handleTypingStart}
            // onKeyUp={() => {
            //   clearTimeout(typingTimeout);
            //   setIsTyping(false);
            // }}
            onChange={(e) => {setInputMessage(e.target.value);  }  }
            />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={imageRef}
            onChange={handleImageInputChange}
            />

          <button className="bg-blue-500 text-white  rounded-r-lg p-2" onClick={handleSendMessage}>
            <span className={`${imageInput!==""||inputMessage!==""?"hidden":"block"}`}  >Send</span>
            <SendOutlined   className={`${imageInput!==""||inputMessage!==""?"block":"hidden"} w-8  `} />
          </button>
          <button
            className=" text-white rounded-r-lg p-2 right-12 absolute  "
            onClick={clickImage}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} height={"24px"} viewBox="0 0 24 24"><title>paperclip</title><path d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,
            1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z" /></svg>
          </button>
         
        </div>
        {imagePreview && (
          <div className="max-w-[200px] max-h-[100px] mt-2">
            <img
              src={imagePreview}
              alt="Image Preview"
              className="max-w-full max-h-full rounded-lg"
              />
          </div>
        )}
        
                    </form>
        </div>
        </div>
    )
}

export default ChatEngine;