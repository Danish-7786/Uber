import React from "react";
import { useState} from "react";
import { useContext } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { Link } from "react-router-dom";
function Captainlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [captainData, setCaptainData] = useState({});
  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password, 
    }
   
    try {
      const response = await axios.post('http://localhost:8000/captains/login',captainData);
      if(response){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        console.log(data);
        navigate("/captain-home");
      }
    } catch (error) {
      
    }
    setEmail(""); 
    setPassword("");
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
        }}
      >
        <h3 className="font-semibold">What's your email?</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name=""
          id=""
          className="bg-gray-200 rounded p-3 w-full  font-semibold"
          required
          placeholder="email@example.com"
        />
        <h3 className="font-semibold">What's your password?</h3>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name=""
          id=""
          required
          className="bg-gray-200 rounded p-3 w-full  font-semibold"
          placeholder="password"
        />
        <button
          className="bg-black rounded text-white font-semibold p-2 w-full mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <div className="flex gap-1 font-semibold">
          <span>Join a fleet?</span>
          <Link to="/captain-signup" className="text-blue-500 font-semibold">
            {" "}
            Register as a Captain
          </Link>
        </div>
      </div>
      <div className="h-full flex items-end">
        <Link to="/login" className="flex w-full bg-orange-400 text-white p-3 font-semibold justify-center">
          Signin as user
        </Link>
      </div>
    </div>
  );
}

export default Captainlogin;
