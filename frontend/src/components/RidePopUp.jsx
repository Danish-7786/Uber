import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { FaSquare } from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'

function RidePopUp({vehicleImg,pickupLocation,dropLocation,rideFare,setConfirmRidePopUp,setRidePopUp}) {
  return (
     <div className="h-full w-[95%] overflow-hidden relative rounded-lg shadow-lg bg-white p-4">
          <h5 className="text-center w-full absolute top-0  p-2 font-semibold text-xl  border-b-[3px] border-blue-400 " onClick={() => {}}>
     Ride for You
          </h5>
          
    
          <div className="p-2 pt-[3.5rem] flex justify-between border-b-2 border-gray-400  ">
            <div className='flex gap-4'>

            <img src={vehicleImg} alt=""   className="w-12 h-[3.5rem] object-cover rounded-lg  border-green-500 border-2"/>
            <div className='flex flex-col  gap-2'> 
                

               <h1 className='font-semibold text-lg'>
                Krsna
                </h1> 
               
                <div className='flex gap-1'>

                <h4 className='bg-green-400 px-3  text-xs text-white font-thin rounded-full'>
                    GooglePay
                </h4>
                <h4 className='bg-green-400 px-3 text-xs text-white font-thin   rounded-full'>
                    Discount
                </h4>
                </div>
            </div>

            </div>
            
            <div>
                <h2 className='text-2xl font-semibold'>$25.00</h2>
                <p className='text-gray-200'>2.2Km</p>
            </div>
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
      <div className='flex items-center justify-end'>
        <button onClick={()=> setRidePopUp(false)} className='text-gray-500 p-3'>Ignore</button>
        <button  onClick={()=> setConfirmRidePopUp(true)} className='bg-green-400 px-2 py-1 rounded-md font-semibold'>Accept</button>
      </div>
            
        </div>
    
  )
}

export default RidePopUp