import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaSquare } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";


function WaitForDriver({
  vehicleImg,
  DriverImg,
  pickupLocation,
  dropLocation,
  rideFare,
}) {
  return (
    <div className="h-full w-full">
      <div className="flex h-20 items-center border-b-2 ">
        <h5
          className="text-center w-full   p-2 font-semibold text-xl"
          onClick={() => {}}
        >
          Meet at the pickup point
        </h5>
        <span className="m-2 bg-black text-white h-[3.7rem]  px-4 py-5 flex flex-col items-center justify-center">
          <span>2</span>
          <span>min</span>
        </span>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex">
          <div className="border-b-2  border-gray-400 rounded-full overflow-hidden w-20 h-20">
            <img
              src={DriverImg}
              alt=""
              className="w-[20rem] h-full object-cover"
            />
          </div>
          <img className="absolute -z-10 left-7" src={vehicleImg} width={120} />
        </div>
        <div>
          <h3>EMIWAY BANTAI</h3>
          <h1 className="text-2xl font-bold">MHI5AK00-0</h1>
          <h2>White Suzuki S-Presso LXI</h2>
          <div className="flex items-center gap-1 justify-end">
            <FaStar />
            <span>4.8</span>
          </div>
        </div>
       
      </div>
      <div className="bg-gray-200 w-fit flex items-center rounded-lg p-3 ml-4">
          <input type="text" className="bg-gray-200 text-gray-700 w-32  outline-none font-semibold placeholder-gray-700 rounded-lg" placeholder="send a message....."/>
          <IoSend size={25} className="text-gray-500" />

        </div>
        <div className="flex  justify-center gap-[2rem] p-4">
          <div className="flex flex-col">

          < span className=" bg-gray-300 text-blue-500 p-4 rounded-full">
            <FaShield/>
          </span>
            <h2 className="font-semibold text-base ">Safety</h2>
          </div>
          <div className="flex flex-col items-center">

          < span className=" bg-gray-300 text-blue-500 p-4 rounded-full">
            <HiLocationMarker/>
          </span>
            <h2 className="font-semibold text-base ">Share my trip</h2>
          </div>
          <div className="flex flex-col items-center">

          <span className=" bg-gray-300 text-blue-500 p-4 rounded-full">
          <IoMdCall />

          </span>
          <h2 className="font-semibold text-base"> Call driver</h2>
          </div>
        </div>

      <div className="flex gap-2 p-4 border-t-[1px] items-center border-gray-400 ">
        <div className="items-center">
          <HiLocationMarker size={20} />
        </div>
          <div>

        <h3 className="font-semibold text-xl ">{pickupLocation ||"Sector 32"}</h3>
        <h5 className="text-sm">Chandigarh ,Chandigarh University </h5>
          </div>
      </div>
      
        
      
    </div>
  );
}

export default WaitForDriver;
