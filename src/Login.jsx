import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    //login logic
  };

  return (
    <div className="card-xl bg-base-300 w-96  shadow-sm mx-auto my-52 font-mono border rounded-box">
      <div className="card-body items-center ">
        <h2 className="card-title">Log In</h2>
        <div>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs p-4 ">
            {/* <legend className="fieldset-legend">Enter Your Credentias</legend> */}

            <label className="label mt-5 text-accent">Email</label>
            <input
              type="email"
              className="input "
              placeholder="xyz@mail.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <label className="label mt-5 text-accent">Password</label>
            <input
              type="password"
              className="input"
              placeholder="!Password@123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Email */}
            <button
              className="btn bg-amber-100 text-black border-[#e5e5e5] mt-8"
              onClick={handleLogin}
            >
              <svg
                aria-label="Email icon"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="black"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              Login with Email
            </button>

            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            {/* LinkedIn */}
            <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
              <svg
                aria-label="LinkedIn logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="white"
                  d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              Login with LinkedIn
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
