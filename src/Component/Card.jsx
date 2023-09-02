import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="bg-white border rounded-lg shadow-md p-4  cursor-pointer">
        <div>
          <img src={props.icon} alt="" className="w-7 h-7 mb-5" />
        </div>
       <div>
       <div>
          <h1 className="text-xl font-semibold">{props.title}</h1>
        </div>
        <div>
          <p className="text-gray-600">{props.text}</p>
        </div>
       </div>
      </div>
    </div>
  );
}
