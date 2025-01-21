import React,{useContext} from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function CaptainSignup() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  
  
  const [vehicleColor ,setVehicleColor] = useState("");
  const [vehiclePlate ,setVehiclePlate] = useState("");
  const [vehicleCapacity ,setVehicleCapacity] = useState("");
  const [vehicleType ,setVehicleType] = useState("");
  const {captain,setCaptain} = useContext(CaptainDataContext);
const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname:{
          firstname:firstname,      
          lastname:lastname
      },
      email,
      password, 
      vehicle: {
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    }
    console.log(captainData);
    try {
      const response = await axios.post('http://localhost:8000/captains/register',captainData)
      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        console.log(data);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(userData);
    // setEmail("");
    // setPassword("");
    // setFirstname("");   
    // setLastname("");
}
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div className="w-20 mb-8">
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
      </div>


      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={(e) => {
            submitHandler(e);
            }   }
      >
        <h3 className=" text-base font-semibold">What's your name</h3>
       <div className='flex gap-2'>
        <input
          onChange={(e) => setFirstname(e.target.value)}
          
          type="text"
          name=""
          id=""
          className="bg-gray-200 rounded p-3 w-full  text-base"
          required
          placeholder="Firstname"
          value={firstname}
          
        />
        <input
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          type="text"
          name=""
          id=""
          className="bg-gray-200 rounded p-3 w-full  text-base"
          required
          placeholder="Lastname"
        />
       </div>
        <h3 className="text-base font-semibold">What's your email?</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name=""
          id=""
          className="bg-gray-200 rounded p-3 w-full text-base"
          required
          placeholder="email@example.com"
        />
        <h3 className="text-base font-semibold">What's your password?</h3>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name=""
          id=""
          required
          className="bg-gray-200 rounded p-3 w-full text-base"
          placeholder="password"
        />
        <div>
        <h3 className="text-base font-semibold mb-2">Vehicle information</h3>
        <div className='flex gap-2 w-full'>
          
          <input 
          value={vehicleColor}
          onChange={(e)=>setVehicleColor(e.target.value)}
          type="text" 
          className='p-2 bg-gray-200 w-full rounded outline-none'
          placeholder='Vehicle Color'
          />

          <input 
          value={vehiclePlate}
          onChange={(e)=>setVehiclePlate(e.target.value)}
          className='p-2 bg-gray-200 w-full rounded outline-none'
          type="text" 
          placeholder='Vehicle Plate'
          />
         
        </div>
        <div className='flex gap-2 mt-2'>
        
        
        <input 
          value={vehicleCapacity}
          onChange={(e)=>setVehicleCapacity(e.target.value)}
          type="number" 
          className='p-2 bg-gray-200 w-full rounded'

          placeholder='Vehicle Capacity'
          />
         
         <select 
         name="vehicleType" 
         id="vehicleType" 
         className='bg-gray-200 w-full p-2 rounded'
         value={vehicleType}
         required
         onChange={(e)=>setVehicleType(e.target.value)}
         >
          
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">car</option>
          <option value="auto">auto</option>
          <option value="bike">bike</option>
  
</select>
         
        </div>
        
        </div>
        <button
          className="bg-black rounded text-white font-semibold p-2 w-full mt-4"
          type="submit"
        >
          Create Captain Account
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <div className="flex gap-1 font-semibold">
          <span>Already a Driver? </span>
          <Link to="/captain-login" className="text-blue-500 font-semibold">
            
            Login here
          </Link>
        </div>
      </div>
      <div className="h-full flex items-end">
        <p className='text-xs'> By proceeding, you consent to get calls, WhatsApp or SMS
messages, Policy and Terms of Service apply</p>
      </div>
    </div>
  );
}

export default CaptainSignup