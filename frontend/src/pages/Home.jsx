import React, { useState, useRef, useEffect } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { IoIosArrowDown } from "react-icons/io";
import ChooseAVehicle from "../components/ChooseAVehicle";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import ConfirmedRide from "../components/ConfirmedRide";
import WaitForDriver from "../components/WaitForDriver";
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [error, setError] = useState("");
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const [selectedVehicle, setSelectedVehicle] = useState("car");
const [waitForDriver, setWaitForDriver] = useState(false)
  const buttonRef = useRef(null);
  const [confirmedRidePanel, setConfirmRidePanel] = useState(false);
  const vehicleChoosePanelRef = useRef(null);

  const waiForDriverPanelRef = useRef(null);
  const locationClickHandler = (location) => {
    setDestination(location);
    console.log(location);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (pickup.length === 0 || destination.length === 0) {
      setError("Enter both locations");
    } else {
      setError("");
      setVehiclePanel(true);
      // setConfirmRidePanel(false);
      setPanelOpen(false);
      console.log(vehiclePanel);
    }
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          display: "block",
          height: "70%",
          padding: 24,
          duration: 0.5,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
        gsap.to(buttonRef.current, {
          display: "block",
          duration: 0.5,
        });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          display: "none",
          duration: 0.5,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
        gsap.to(buttonRef.current, {
          display: "none",
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });

        gsap.to(buttonRef.current, {
          display: "none",
        });

        gsap.to(vehicleChoosePanelRef.current, {
          display: "block",
          duration: 0.5,
        });
      } else {
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
          display: "block",
          duration: 0.5,
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          onComplete: () => {
            gsap.set(confirmRidePanelRef.current, { display: "none" }); // Hide completely after animation
          },
        });
      }
    },
    [confirmedRidePanel]
  );

  useGSAP(
    function(){
      if(waitForDriver){
        gsap.to(waiForDriverPanelRef.current,{
          transform:"translateY(0)",
          display:"block",
          duration:0.5
        })
      }
      else{
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
        })
      }

    }
  ,[WaitForDriver])

  return (
    <div className="h-screen,relative overflow-hidden">
      <div className="absolute top-5 left-5 w-20  ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
      </div>
      <div className="w-screen h-screen bg-cover ">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="absolute flex flex-col justify-end top-0 w-full h-screen ">
        <div className=" relative bg-white p-5 h-[30%]  w-full mx-auto rounded-t-lg ">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setVehiclePanel(false);
              setPanelOpen(false);
            }}
            className="absolute right-5 opacity-0 top-8"
          >
            <IoIosArrowDown className=" top-1 " size={20} />
          </h5>

          <h4 className="text-3xl font-semibold mb-4">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2 items-center bg-[#eee] p-3 rounded">
              <FaDotCircle size={10} />
              <div className="bg-gray-900 h-[58px] w-1 absolute top-[100px] left-[34px]"></div>
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                onChange={(e) => setPickup(e.target.value)}
                value={pickup}
                className="bg-[#eee] w-full   rounded font-semibold outline-none"
                type="text"
                placeholder="Add a pickup location"
              />
            </div>
            <div className="flex gap-2 items-center bg-[#eee] p-3 rounded ">
              <FaSquareFull size={8} />
              <input
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
                className="bg-[#eee] w-full outline-none rounded font-semibold"
                type="text"
                placeholder="Enter your destination"
              />
            </div>
            <h3 className="text-red-400">{error}</h3>
            <button
              ref={buttonRef}
              type="submit"
              className="text-white font-semibold bg-gray-800 p-3 w-[95%] rounded bottom-1 hidden fixed right-2"
            >
              Continue
            </button>
          </form>
        </div>

        <div
          ref={panelRef}
          className="hidden overflow-hidden h-0 bg-white w-full mx-auto rounded-lg "
        >
          <LocationSearchPanel
            onClick={(e) => {
              locationClickHandler(e);
            }}
            location={"Baba Appartment Block 5 Shivjot, GTB Nagar"}
          />
        </div>
        <div
          ref={vehicleChoosePanelRef}
          className="bg-white p-2 z-10 fixed bottom-0 hidden w-full overflow-hidden"
        >
          <h5
            className="flex justify-center"
            onClick={() => setVehiclePanel(false)}
          >
            <IoIosArrowDown className="black" size={20} />
          </h5>
          <ChooseAVehicle
            vehicleName={"UberGo"}
            vehicleCapacity={4}
            vehicleImg={
              "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            }
            rideText={"Affordable, compact rides"}
            rideTime={5}
            ridePrice={200}
            vehicleType={"car"}
            setSelectedVehicle={setSelectedVehicle}
            imgSize={"w-28"}
            isActive={selectedVehicle === "car" ? true : false}
          />
          <ChooseAVehicle
            vehicleName={"Moto"}
            vehicleCapacity={1}
            vehicleImg={
              "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1649231046/assets/84/ad96b0-f8d6-41a7-babf-816237fe530d/original/Uber_Moto_Orange_696x464_pixels_Tablet.png"
            }
            rideText={"Affordable, bike rides"}
            rideTime={3}
            vehicleType={"bike"}
            setSelectedVehicle={setSelectedVehicle}
            ridePrice={100}
            imgSize={"w-20"}
            isActive={selectedVehicle === "bike" ? true : false}
          />
          <ChooseAVehicle
            vehicleName={"UberAuto"}
            vehicleCapacity={3}
            vehicleImg={
              "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            }
            rideText={"Affordable, rikshaw rides"}
            vehicleType={"auto"}
            setSelectedVehicle={setSelectedVehicle}
            rideTime={3}
            ridePrice={100}
            imgSize={"w-24 p-4 mr-1"}
            isActive={selectedVehicle === "auto" ? true : false}
          />
          <div>
            <button
              onClick={() => {
                setConfirmRidePanel(true);
                // setSelectedVehicle(true)
                setPanelOpen(false);
              }}
              className="bg-green-600 text-white w-full p-3 rounded"
            >
              Continue
            </button>
          </div>
        </div>
        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bottom-0  bg-white "
        >
          <ConfirmedRide
            vehicleImg={
              "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            }
            pickupLocation={pickup}
            dropLocation={destination}
            rideFare={200}
          />
        </div>

        <div
          ref={waiForDriverPanelRef}
          className="fixed w-full translate-y-full z-10 bottom-0 bg-white"
        >
          <WaitForDriver
            vehicleImg={
              "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          }
            DriverImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7ISNDmt7ik0-fP5f9PxkYgq6TpZSjfwESA&s"}
            pickupLocation={pickup}
            dropLocation={destination}
            rideFare={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
