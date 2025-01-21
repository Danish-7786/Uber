import React from 'react'
import { IoLocation } from "react-icons/io5";

function LocationSearchPanel({location,onClick}) {
    
  return (
    <div value={location} onClick={()=>onClick(location)} className='cursor-pointer'>

        <div className='flex items-center gap-2 my-4'>
            <div className='bg-gray-200 p-2 rounded-full'>
                <IoLocation size={20} />
                </div>
            <h3 className='font-semibold' >{location}</h3>
        </div>
        
        
        
    </div>
  )
}

export default LocationSearchPanel