import React, { useState } from "react";
import johnDoe from "../../assets/johnDoe.png";
import { Link } from "react-router-dom";
import cancelButton from "../../assets/svg/close-line-icon.svg";



export default function ChatContainer() {
  const [inputMessage, setInputMessage] = useState(""); // State to store the input message
  const [messages, setMessages] = useState([
    {
      text: "Hello there!",
      user: "User 1",
      date: "2023-09-11",
      time: "10:39 am",
      isUser1: true,
      image: johnDoe,
    },
    {
      text: "Hi, how can I help you?",
      user: "User 2",
      date: "2023-09-11",
      time: "10:45 am",
      isUser1: false,
      image: johnDoe,
    },

    {
      text: "I have a question about something.",
      user: "User 1",
      date: "2023-09-11",
      time: "11:02 am",
      isUser1: true,
      image: johnDoe,
    },
    {
      text: "Sure, go ahead and ask your question.",
      user: "User 2",
      date: "2023-09-11",
      time: "11:05 am",
      isUser1: false,
      image: johnDoe,
    },
    {
      text: "Ok",
      user: "User 2",
      date: "2023-09-11",
      time: "11:05 am",
      isUser1: false,
      image: johnDoe,
    },
    {
      text: "Pls do you have an apartment in dubai?",
      user: "User 2",
      date: "2023-09-11",
      time: "11:05 am",
      isUser1: false,
      image: johnDoe,
    },
  ]);

  const paymentDetails = {
    nightlyRate: "$108.00",
    numberOfNights: 2,
    subtotal: "$216.00",
    serviceFee: "$30.49",
    total: "$246.49",
  };

  const tripDetails = {
    checkInDate: "Dec 27, 2022",
    checkOutDate: "Dec 29, 2022",
    numberOfGuests: "7 adults",

  };

  const host ={
    hostImage : cancelButton,
    hostName : "username",
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new message object for the user's input
    const newMessage = {
      text: inputMessage,
      user: "User 1", // Assuming the user sending the message is always User 1
      date: "2023-09-11",
      time: new Date().toLocaleTimeString(),
      isUser1: true,
      image: johnDoe,
    };

    // Update the messages state by appending the new message
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInputMessage("");
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal fixed flex justify-center items-center inset-0 z-50">
          <div
            className="fixed bg-black inset-0 opacity-50 z-10"
            onClick={handleCloseModal}
          ></div>
          <div className="modal-content bg-white w-full md:w-1/2 z-50 p-4">
            <header className="flex items-center py-4">
              <div className=" flex justify-end ml-5">
                <button onClick={handleCloseModal} className="w-6">
                  <img src={cancelButton} alt="" />
                </button>
              </div>
              <div className="mx-auto">
                <h2 className="text-2xl">Details</h2>
              </div>
            </header>

            <div className="property-listing overflow-auto h-[70vh]">
              <div className="property-listing-container flex flex-wrap   ">
                <div className="property-listed--1 w-1/2 m-5">
                  <div className="property-listed--image__container relative">
                    <div className="image__status absolute bg-white border-2 p-2">
                      Available
                    </div>

                    <div className="image">
                      <img
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-761451869585880202/original/87ced3f9-56d9-412a-a0f6-e0697f9b67e5.jpeg?aki_policy=large"
                        className="w-3/4"
                        alt=""
                      />
                    </div>
                  
                    <div className="property-info-details flex justify-between w-3/4">
                      <div>Check in</div>
                      <div>Dec 27, 2022</div>
                    </div>
                  </div>
                </div>
                <div className="property-listed--2 m-5 w-2/5">
                  <header className="text-2xl">Trip Details</header>
                  <div>
                    <p className="">Well crafted to perfection with impeccable art</p>

                    </div>
                  <div className="property-location text-gray-400 text-sm border-b-[1px] py-4">Lekki, Lagos, NG</div>

                  <div className="property-info-details flex items-center justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>{host.hostName}</div>
                    <div><img src="https://a0.muscache.com/im/pictures/user/24f4c560-4586-4eaf-bfef-06164ab677b4.jpg?aki_policy=profile_x_medium" className="w-10 object-cover rounded-full" alt="" /></div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Check-in</div>
                    <div>{tripDetails.checkInDate}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Check-out</div>
                    <div>{tripDetails.checkOutDate}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Guests</div>
                    <div>{tripDetails.numberOfGuests}</div>
                  </div>
                </div>
              </div>
              <div className="property-listed--3 m-5">
                <header className="text-2xl">Payment details</header>

                <div className="payment-details-info w-1/2">
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Rate per night</div>
                    <div>{paymentDetails.nightlyRate}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Number of nights</div>
                    <div>{paymentDetails.numberOfNights}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Subtotal</div>
                    <div>{paymentDetails.subtotal}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Shbro service fee</div>
                    <div>{paymentDetails.serviceFee}</div>
                  </div>
                  <div className="property-info-details flex justify-between py-4 text-gray-500 border-b-[1px]">
                    <div>Total</div>
                    <div>{paymentDetails.total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <header className="py-1 pl-4  items-center border-b-[1px]">
          <div>
            <span className=" text-2xl">User 1</span> <br />
            <span className="text-sm text-gray-400">Response time: 1 hour</span>
          </div>
          <div>
            <button onClick={handleOpenModal}>see details</button>
          </div>
        </header>
        <div className="chats">
          <div className="chat--conversations h-[80vh] overflow-auto border-b-[1px]">
            <div className="rounded-lg p-4 m-10">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.isUser1
                      ? "bg-gray-400 text-white"
                      : "bg-orange-400 text-white"
                  } rounded-lg p-2 mb-2`}
                >
                  <div className="flex space-x-4">
                    {message.image && (
                      <img
                        src={message.image}
                        alt={`${message.user}'s Image`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}

                    <div>
                      <span className="flex">{message.date}</span>
                      {message.user}: {message.text}
                      <div className="text-xs">time: {message.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="send-texts mt-2">
            <form
              onSubmit={handleSubmit}
              className="w-3/4 mx-auto flex justify-center p-2"
            >
              <input
                type="text"
                placeholder="Type a message"
                className="bg-gray-200 "
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2  ml-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
