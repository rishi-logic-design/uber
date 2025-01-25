import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CaptainLogin() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      })
      console.log(userData);
      setEmail("");
      setPassword("");
    }
  return (
    <div><div className="p-7 flex flex-col justify-between h-screen">
    <div>
      <img className="w-16 mb-10" src="src\img\Uber-Driver.png" />
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
        <p className="text-center">Join a fleet?
        <Link to={'/captain-signup'} className="mb-3 text-blue-600 ">Register as a Captain</Link></p>
    </div>
    <div>
      <Link to={'/login'} className="bg-[#d5622d] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
    </div>
  </div></div>
  )
}

export default CaptainLogin