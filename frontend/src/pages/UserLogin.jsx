import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
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
          e.preventDefault();
          setUserData({
            email,
            password,
          })
        console.log(userData);
          setEmail("");
          setPassword("");
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
          <span>New Here?</span>
          <Link to="/signup" className="text-blue-500 font-semibold">
            {" "}
            Create new Account
          </Link>
        </div>
      </div>
      <div className="h-full flex items-end">
        <Link to="/captain-login" className="flex w-full bg-green-400 text-white p-3 font-semibold justify-center">
          Signin as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
