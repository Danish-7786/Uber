import React from "react";
import { FaUser } from "react-icons/fa";

function ChooseAVehicle({vehicleCapacity,vehicleType,vehicleName,vehicleImg,rideText,rideTime,ridePrice,imgSize,isActive,setSelectedVehicle}) {
  
 
    const active = isActive?"border-[3px]":"";

  return (
    <div className="m-2"
    onClick={()=>{ 
      setSelectedVehicle(vehicleType)
      console.log(vehicleType);
    }
    }>
      <div className={`flex items-center gap-2 justify-between  px-2 bg-white rounded-lg shadow-md border-gray-900 ${active}`}>
        <img
          src={vehicleImg}
          alt=""
          className={`${imgSize} `}
        />
        <div className="flex flex-col ">
          <div className="flex items-center gap-2">
            <h1> {vehicleName}</h1>
            <div className=" flex items-center gap-1">
              <FaUser size={10}/>
              <p className="text-sm">{vehicleCapacity}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h4 className="font-semibold">{rideTime} mins away </h4>
            <p className="text-sm"> 15:24</p>
          </div>
          <p className="text-gray-500 text-sm">{rideText}</p>
        </div>

      <h3 className="font-semibold">
        Rs {ridePrice}
      </h3>

      </div>

    </div>
  );
}

export default ChooseAVehicle;
