import React, { useRef,useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

import { GrLogout } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import {useGSAP} from "@gsap/react"
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import gsap from "gsap";
const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(true)
  const [confirmRidePopUp,setConfirmRidePopUp] = useState(true);
  const ridePopUpRef = useRef(null);
  const confirmRidePopUpRef = useRef(null);
useGSAP(function(){
if(ridePopUp){
  console.log(ridePopUp);
  gsap.to(ridePopUpRef.current,{
    transform: "translateY(0)"

  })
}
else{
  console.log(ridePopUp);
  gsap.to(ridePopUpRef.current,{
    transform: "translateY(100%)"

  })
}
},[ridePopUp])

useGSAP(function(){
  if(confirmRidePopUp){
    console.log(confirmRidePopUp);
    gsap.to(confirmRidePopUpRef.current,{
      transform: "translateY(0)"
  
    })
  }
  else{
    console.log(confirmRidePopUp);
    gsap.to(confirmRidePopUpRef.current,{
      transform: "translateY(100%)"
  
    })
  }
  },[confirmRidePopUp])


  return (
    <div className="h-screen">
      <div className="fixed p-3 top-1 flex w-full items-center justify-between">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className=" right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <GrLogout className="text-gray-800" />
        </Link>
      </div>
      <div className="h-3/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="h-full w-full object-cover"
          
        />
      </div>
      <div className="h-2/5 p-4 mt-4  bg-white">
     <CaptainDetails/>
      </div>
      <div ref= {ridePopUpRef} className="fixed bottom-0 w-full translate-y-full flex justify-center mb-2">
        <RidePopUp  
        vehicleImg={
              "https://yt3.googleusercontent.com/ytc/AIdro_n00p_ZePoxDQQ9m1fOAv5f6CPy-GyG97eU5hKHI3wX5cM=s900-c-k-c0x00ffffff-no-rj"
            }
            pickupLocation={"H2"}
            dropLocation={"Baba"}
            rideFare={200}
            setConfirmRidePopUp = {setConfirmRidePopUp}
            setRidePopUp={setRidePopUp}
            />
      </div>

      <div ref= {confirmRidePopUpRef} className="fixed bottom-0 bg-white h-screen w-full translate-y-full flex justify-center mb-2">
        <ConfirmRidePopUp  
        vehicleImg={
              "https://yt3.googleusercontent.com/ytc/AIdro_n00p_ZePoxDQQ9m1fOAv5f6CPy-GyG97eU5hKHI3wX5cM=s900-c-k-c0x00ffffff-no-rj"
            }
            pickupLocation={"562/11-A"}
            dropLocation={"532/23 -B"}
            rideFare={200}
            setConfirmRidePopUp = {setConfirmRidePopUp}
            setRidePopUp={setRidePopUp}
            />
      </div>

    </div>
  );
};

export default CaptainHome;
