import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaSquare } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

function ConfirmedRide({ vehicleImg, pickupLocation,dropLocation, rideFare }) {
  return (
    <div className="h-full w-full">
      <h5 className="text-center w-full absolute top-0  p-2 font-semibold text-xl  border-b-[3px] border-blue-400 " onClick={() => {}}>
        Looking for a nearby drivers
      </h5>
      

      <div className="w-full p-7 pt-20 border-b-2 border-gray-400 flex justify-center ">
        <img src={vehicleImg} alt=""  width={140} className=""/>
      </div>
      
      <div className="flex gap-2 p-4 border-b-2 border-gray-400">
        <div className="items-center">
        <HiLocationMarker  size={20}/>

        </div>
        
        <h3 className="text-base text-gray-600">{pickupLocation}</h3>
      </div>
      <div className="flex gap-2 p-4 border-b-2 border-gray-400">
        <div className="items-center">
        <FaSquare  size={15}/>

        </div>
        
        <h3 className="text-base text-gray-600">{dropLocation}</h3>
      </div>
      <div className="flex gap-2 p-4 border-b-2 border-gray-400">
        <div className="items-center">
        <FaCreditCard  size={15}/>

        </div>
        
        <h3 className="text-base text-gray-600">{rideFare}</h3>
      </div>
    </div>
  );
}

export default ConfirmedRide;
