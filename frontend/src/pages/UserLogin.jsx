import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    console.log(userData);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-10" src="src\img\Uber.png" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg font-medium mb-2">What's your E-mail</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded  px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
          <p className="text-center">New here?
          <Link to={'/signup'} className="mb-3 text-blue-600 ">Create an account</Link></p>
      </div>
      <div>
        <Link to={'/captain-login'} className="bg-[#10b461] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
      </div>
    </div>
  );
}

export default UserLogin;
