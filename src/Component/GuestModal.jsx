import React, { useState } from "react";
import { Modal as AntModal, Button } from "antd";

function GuestModal({ visible, onCancel, onOk, adults, children, pets, infants }) {
  const [adultCount, setAdultCount] = useState(adults);
  const [childCount, setChildCount] = useState(children);
  const [petCount, setPetCount] = useState(pets);
  const [infantCount, setInfantCount] = useState(infants);

  const handleDecrease = (setter, value) => {
    if (value > 0) {
      setter(parseInt(value, 10) - 1);
    }
  };

  const handleSubmitInsideModal = (e) => {
    e.preventDefault();
    onOk(adultCount, childCount, petCount, infantCount);
    onCancel();
  };

  const handleIncrease = (setter, value) => {
    setter(parseInt(value, 10) + 1);
  };

  return (
    <AntModal
      title="Select Guests"
      visible={visible}
      onCancel={onCancel}
      onOk={() => onOk(adultCount, childCount, petCount, infantCount)}
    >
      <form onSubmit={handleSubmitInsideModal}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <span className="text-lg">Adults:</span> <br />
              <p className="text-gray-400">Ages 13 or above</p>
            </div>
            <div className="space-x-2">
              <Button
                shape="circle"
                onClick={() => handleDecrease(setAdultCount, adultCount)}
              >
                -
              </Button>
              <span>{adultCount}</span>
              <Button
                shape="circle"
                onClick={() => handleIncrease(setAdultCount, adultCount)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <span className="text-lg">Children:</span>
              <p className="text-gray-400">Ages 2–12</p>
            </div>
            <div className="space-x-2">
              <Button
                shape="circle"
                onClick={() => handleDecrease(setChildCount, childCount)}
              >
                -
              </Button>
              <span>{childCount}</span>
              <Button
                shape="circle"
                onClick={() => handleIncrease(setChildCount, childCount)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <span className="text-lg">Pets:</span>
              <p>
                <Link className="text-gray-400 underline">
                  Bringing a service animal?
                </Link>
              </p>
            </div>
            <div className="space-x-2">
              <Button
                shape="circle"
                onClick={() => handleDecrease(setPetCount, petCount)}
              >
                -
              </Button>
              <span>{petCount}</span>
              <Button
                shape="circle"
                onClick={() => handleIncrease(setPetCount, petCount)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-col">
              <span className="text-lg">Infants:</span>
              <p className="text-gray-400">Under 2</p>
            </div>
            <div className="space-x-2">
              <Button
                shape="circle"
                onClick={() => handleDecrease(setInfantCount, infantCount)}
              >
                -
              </Button>
              <span>{infantCount}</span>
              <Button
                shape="circle"
                onClick={() => handleIncrease(setInfantCount, infantCount)}
              >
                +
              </Button>
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </AntModal>
  );
}

export default GuestModal;
