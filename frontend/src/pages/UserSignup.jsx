import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userDatacontext } from '../context/UserContext';
function UserSignup() {
  const [user,setUser] = useContext(userDatacontext);

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData= {
      fullname:{
          firstname:firstname,      
          lastname:lastname
      },
      email,
      password, 
    }
    try{
   const response = await axios.post('http://localhost:8000/users/register',userData);
    if( response){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      
      navigate("/home");
    }
    }
    catch(err){
        console.log(err);
    }
   console.log(userData);
    setEmail("");
    setPassword("");
    setFirstname("");   
    setLastname("");
}
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div className="w-16 mb-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
        <button
          className="bg-black rounded text-white font-semibold p-2 w-full mt-4"
          type="submit"
        >
          Create Account
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <div className="flex gap-1 font-semibold">
          <span>Already have a account? </span>
          <Link to="/login" className="text-blue-500 font-semibold">
            
            Login here
          </Link>
        </div>
      </div>
      <div className="h-full flex items-end">
        <p className='text-xs'> By proceeding, you consent to get calls, WhatsApp or SMS
messages, including by automated means, from Uber and
its affiliates to the number provided.Policy and Terms of Service apply</p>
      </div>
    </div>
  );
}

export default UserSignup