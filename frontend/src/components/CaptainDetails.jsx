import React from 'react'
import { MdAccessTime } from "react-icons/md";

import { BsCashStack } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";

import { GrNotes } from 'react-icons/gr';
function CaptainDetails() {
  return (
    <div>

    <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*y-YpDxm4uOsulc3Zt_EG7w.png"
              alt=""
              className="w-16 rounded-full h-16 object-cover border-blue-500 border-4"
            />
            <h4 className="text-lg font-semibold">Harsh Patel</h4>
          </div>
          <div >
            <h4 className="font-semibold text-lg">$295.20</h4>
            <p>Earned</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center bg-green-100 p-4 rounded-2xl ">
          <div className="flex flex-col items-center">
            <MdAccessTime size={20}/>
            <h5 className="text-lg font-semibold">10.2</h5>
            <p className="font-semibold text-sm">Hours Online</p>
          </div>
          <div className="flex flex-col items-center">
            <BsSpeedometer size={20}/>
            <h5 className="text-lg font-semibold">45</h5>
            <p className="font-semibold text-sm">Average Speed</p>
          </div>
          <div className="flex flex-col items-center">

            <GrNotes size={20} />
            <h5 className="text-lg font-semibold">10.2</h5>
            <p className="font-semibold text-sm">Hours Online</p>
          </div>
        </div>
        
              </div>
  )
}

export default CaptainDetails