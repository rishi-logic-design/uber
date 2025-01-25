import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img className="w-16 mb-3" src="src\img\Uber-Driver.png" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-base font-medium mb-2">What's our Captain's name</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded  px-4 py-2 border  text-base placeholder:text-sm"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#eeeeee] w-1/2 rounded  px-4 py-2 border  text-base placeholder:text-sm"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's our Captain's E-mail</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-6 rounded  px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center text-sm">
          Already have an account?
          <Link to={"/captain-login"} className="mb-3 text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline text-blue-600 pointer">
            Google Privacy Policy
          </span>{" "}
          and{" "}
          <span className="underline text-blue-600 pointer">
            Terms of Service apply
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default CaptainSignUp;
