import React, { useState,useRef } from "react";
import DatePicker from "react-datepicker";
import DateIcon from "../../assets/svg/date-icon.svg";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button, Dropdown, Space, message, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Popup from "../../hoc/Popup";

export default function ListingForm() {
  function showModal(e) {
    e.preventDefault();
    setIsModalVisible(true);
  }

  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const messageRef = useRef(null);

  const [form] = Form.useForm(); // Define the form variable

  const showMessageModal = () => {
    setMessageModalVisible(true);
  };
  const sendMessage = () => {
    // Get the message from the form field using Ant Design's Form
    const message = form.getFieldValue("message");

    // Log the message to the console
    console.log("Message:", message);

    // Perform the logic to send the message here

    // Assuming the message has been sent successfully
    setMessageSent(true);

    // Display a success notification
    message.success("Inquiry sent successfully");

    // Close the message modal
    setMessageModalVisible(false);
  };
  
  
  

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
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <div className=" block w-full h-full">
      <div
        className="block mt-12 mb-12 md:sticky z-[100]  top-[80px] box-border  
         w-full max-w-sm rounded-lg bg-white md:p-6 
        md:shadow-xl "
      >
        <div className=" p-3 rounded relative box-border">
          <div className=" justify-between items-center flex text-sm">
            <div className=" gap-2 items-end flex box-border">
              <div className=" flex-col flex box-border">
                <div className=" gap-2 justify-start flex-wrap flex-row items-center flex">
                  <div>
                    <span aria-hidden="true">
                      <div className=" font-medium text-xl box-border">
                        $110
                      </div>
                    </span>
                  </div>
                  <div className=" font-normal text-start text-xs">
                    per night
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <form>
            <div className="grid grid-cols-2 gap-4 p-2">
              {/* <!--check In name input--> */}
              <div className="border border-gray-300 p-2 rounded-lg shadow-sm relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckIn}
                  placeholderText="Check in"
                  dateFormat="dd/MM/yyyy" // You can customize the date format
                />
                <img
                  src={DateIcon}
                  className="w-4 absolute transform-[translateY(-50%)]"
                  alt="Check In"
                />
              </div>

              {/* <!--check out input--> */}
              <div className="border border-gray-300 p-2 rounded-lg shadow-sm">
                <DatePicker
                  selected={checkOutDate}
                  onChange={handlecheckOut}
                  className=""
                  placeholderText="Check in"
                  dateFormat="dd/MM/yyyy" // You can customize the date format
                />
                <img src={DateIcon} className="w-4" alt="Check out" />
              </div>
            </div>

            {/* <!--Traveler input--> */}

            <div className=" relative box-border p-2  ">
              <div className=" overflow-hidden relative border rounded min-h-[50px] block box-border ">
                <label className=" text-xs font-normal px-4  overflow-hidden absolute text-ellipsis whitespace-nowrap  ">
                  Travelers
                </label>
                {/* <input className=' border rounded text-base font-normal '/> */}
                <MyDropdown
                  adults={adults}
                  children={children}
                  pets={pets}
                  infants={infants}
                  messageModalVisible={messageModalVisible} // Pass the prop here
                />

                {/* <ListingFormModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
                 */}
              </div>
            </div>

            {/* <!--total before and after tax--> */}
            <div className=" min-h-[1.5rem] w-full   p-3">
              <div className=" border-t py-4 flex flex-col gap-1">
                <div className=" font-medium text-base box-border flex items-end justify-between break-words    ">
                  <span> Total before tax </span>
                  <div className=" whitespace-nowrap break-normal ">
                    $566.54
                  </div>
                </div>

                <div className=" font-normal text-sm box-border flex items-end justify-between break-words    ">
                  <span> see full price</span>
                  <button
                    type="button"
                    className=" whitespace-nowrap break-normal underline text-blue-500 cursor-pointer "
                    onClick={showModal}
                  >
                    price details
                  </button>
                </div>
                {/* handles the modal  when price details is clicked  */}
                <Popup
                  isModalVisible={isModalVisible}
                  handleCancel={handleCancel}
                  title={"Price details"}
                >
                  <div className="p-3 pt-6 border-y   ">
                    <div>
                      <div className=" pb-4 md:pb-0 ">
                        <div className=" ">
                          <div className="relative">
                            {/* 1 */}
                            <div className=" pb-4 border-b">
                              <div className=" mb-2 box-border block">
                                <div className=" flex items-end justify-between break-words    ">
                                  <div className=" block box-border">
                                    <span>$140.00 x 2 nights</span>
                                  </div>
                                  <div className=" ml-4 whitespace-nowrap block box-border   ">
                                    $280.00
                                  </div>
                                </div>
                              </div>

                              <div className=" mb-2 box-border block">
                                <div className=" relative box-border ">
                                  <div className=" overflow-hidden max-h-24 relative   ">
                                    <div className=" ">
                                      <div className=" mb-2 flex justify-between items-end break-words  ">
                                        <span className=" capitalize">
                                          Host Fees
                                        </span>

                                        <div className=" ml-4 ">$194.00</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" mb-2 box-border block">
                                <div className=" flex items-end justify-between break-words    ">
                                  <div className=" block box-border">
                                    <span>Service Fee</span>
                                  </div>
                                  <div className=" ml-4 whitespace-nowrap block box-border   ">
                                    $20.00
                                  </div>
                                </div>
                              </div>
                              <div className=" mb-2 box-border block">
                                <div className=" flex items-end justify-between break-words    ">
                                  <div className=" block box-border">
                                    <span>Tax</span>
                                  </div>
                                  <div className=" ml-4 whitespace-nowrap block box-border   ">
                                    $18.00
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Total */}
                            <div className="  py-4">
                              <div className=" font-bold text-lg flex items-end justify-between break-words    ">
                                <span> Total </span>
                                <div className=" whitespace-nowrap break-normal ">
                                  $566.54
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button
                      type="button"
                      className="block w-full h-11 rounded bg-orange-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal 
                                                        text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                                                        focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                                        focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                                                        dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                                                        dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                                                        ,0_4px_18px_0_rgba(59,113,202,0.1)]]"
                    >
                      Book
                    </button>
                  </div>
                </Popup>
              </div>
            </div>

            {/* <!--Submit button--> */}
            <div className="p-2">
              <Link to="/RequestBook">
                <button
                  type="button"
                  className="block w-full h-11 rounded bg-orange-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal 
                            text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                            ,0_4px_18px_0_rgba(59,113,202,0.1)]]"
                >
                  Book
                </button>
              </Link>

              <button
                type="button"
                onClick={showMessageModal}
                className="block w-full h-11 mt-3 rounded bg-orange-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal 
                            text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                            focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                            dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                            dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2)
                            ,0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Message Host
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Message Modal */}
      <Modal
          title="Message Host"
          visible={messageModalVisible}
          onCancel={() => setMessageModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => setMessageModalVisible(false)}>
              Cancel
            </Button>,
            <Button key="send" type="primary" onClick={sendMessage}>
              Send
            </Button>,
          ]}
        >
        <Form
  onFinish={sendMessage}
  form={form}
  initialValues={{ message: "" }}
>
  {messageSent ? (
    <p>Message sent successfully</p>
  ) : (
    <>
      <Form.Item
        name="message"
        rules={[
          {
            required: true,
            message: "Please enter your message",
          },
        ]}
      >
        <Input.TextArea
          placeholder="Type your message here..."
          style={{ width: "100%", minHeight: "100px" }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </>
  )}
</Form>

        </Modal>
    </div>
  );
}

function MyDropdown({ adults, children, pets, infants, messageModalVisible }) {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <button
        className="w-full h-11 rounded bg-white border border-gray-300 pl-4 pr-10 py-2 text-left text-sm font-normal"
        onClick={toggleDropdown}
      >
        <span className="block">Guests</span>
        <span className="text-gray-500">
          {adults + children + pets + infants} guests
        </span>
      </button>

      {visible && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-b-lg mt-1 z-10">
          <div className="p-4">
            <div className="mb-4">
              <span className="font-medium text-lg">Guests</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Adults</span>
              <button
                className="ml-4 text-gray-400"
                onClick={() => setAdults(adults + 1)}
              >
                +
              </button>
              <span className="mx-2">{adults}</span>
              <button
                className="text-gray-400"
                onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
              >
                -
              </button>
            </div>
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Children</span>
              <button
                className="ml-4 text-gray-400"
                onClick={() => setChildren(children + 1)}
              >
                +
              </button>
              <span className="mx-2">{children}</span>
              <button
                className="text-gray-400"
                onClick={() => setChildren(children > 0 ? children - 1 : 0)}
              >
                -
              </button>
            </div>
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Pets</span>
              <button
                className="ml-4 text-gray-400"
                onClick={() => setPets(pets + 1)}
              >
                +
              </button>
              <span className="mx-2">{pets}</span>
              <button
                className="text-gray-400"
                onClick={() => setPets(pets > 0 ? pets - 1 : 0)}
              >
                -
              </button>
            </div>
            <div className="mb-4">
              <span className="text-gray-600 text-sm">Infants</span>
              <button
                className="ml-4 text-gray-400"
                onClick={() => setInfants(infants + 1)}
              >
                +
              </button>
              <span className="mx-2">{infants}</span>
              <button
                className="text-gray-400"
                onClick={() => setInfants(infants > 0 ? infants - 1 : 0)}
              >
                -
              </button>
            </div>
            <button
              className="block w-full bg-orange-500 text-white text-center rounded py-2"
              onClick={toggleDropdown}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
