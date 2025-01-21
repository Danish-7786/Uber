import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { FaSquare } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'

function ConfirmRidePopUp({vehicleImg,pickupLocation,dropLocation,rideFare,setConfirmRide,setRidePopUp}) {
  return (
     <div className="h-full w-full  overflow-hidden relative mt-10 bg-white p-4">
          <h5 className="text-center w-full  p-2 font-semibold text-xl  border-b-[3px] border-blue-400 " onClick={() => {}}>
     Ride for You
          </h5>
          
    
          <div className="p-2 mt-4 rounded-lg items-center flex justify-between border-b-2 border-gray-400  bg-green-400 ">
            <div className='flex gap-4'>

            <img src={vehicleImg} alt=""   className="w-12 h-[3.5rem] object-cover rounded-lg  border-green-500 border-2"/>
            <div className='flex flex-col justify-center  gap-2'> 
                

               <h1 className='font-semibold text-lg'>
                Krsna
                </h1> 
               
            </div>

            </div>
            
            <div>
              
                <p className='text-gray-900 font-semibold'>2.2Km</p>
            </div>
            </div>
          
          
          <div className="flex gap-2 p-4 mt-12 mb-4 border-b-[2px]  border-gray-400">
            <div className="flex items-center">
            <HiLocationMarker  size={20}/>
    
            </div>
            <div className='text-gray-400 text-sm'>

            <h3 className="text-xl font-semibold text-gray-900 ">{pickupLocation}</h3>
            <p>Lorem ipsum dolor sit? um dolor </p>
            </div>
          </div>
          <div className="flex gap-2 p-4 border-b-[2px] border-gray-400">
            <div className="flex items-center">
            <FaSquare  size={15}/>
    
            </div>
            <div>

            <h3 className="text-xl text-gray-900 font-semibold">{dropLocation}</h3>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit? um dolor </p>
            </div>
          </div>
      <div className='flex items-center justify-end'>
      
      </div>
       <div className="flex gap-2 p-4 border-b-2 border-gray-400">
              <div className="flex items-center">
              <FaCreditCard  size={15}/>
      
              </div>
              <div className=''>

              <h3 className="text-xl text-gray-900 font-semibold">${rideFare}</h3>
              <p className='text-sm text-gray-500 '>Cash Cash </p>
              </div>
            </div>
            
        </div>
    
  )
}

export default ConfirmRidePopUp