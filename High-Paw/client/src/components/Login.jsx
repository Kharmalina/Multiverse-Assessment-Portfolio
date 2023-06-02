import React, { useEffect } from "react";
// import { ReactComponent as PawSteps } from "./assets/pawsteps.svg";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  // form validation frontend
  const [err, setErr] = useState({});
  // import  setUser from context
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // for controlling the inputs, we need to add name attribute to each input and set the value to the state
  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if form is not valid(return false), return and do not submit form
    if (!validateForm()) return;
    // form = body of the request
    axios
      // conn to backend
      .post("https://high-paw-production.up.railway.app/auth/login", form)
      .then((res) => {
        // set user in context and local storage
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateForm = () => {
    // create an empty object to hold the errors, this will be updated with each if statement, if there is an error, the error message will be added to the object and the object will be returned, if there are no errors, the object will be empty and the function will return false
    const err = {};
    let noErr = true;
    if (!form.email) {
      // err.email = "Please enter email";
      err.email = "Please enter email";
      noErr = false;
    }

    if (!form.password) {
      // err.password = "Please enter password";

      err.password = "Please enter password";
      noErr = false;
    }
    if (form.password.length < 8) {
      err.password = "Password must be at least 8 characters long";
      noErr = false;
    }
    setErr(err);

    return noErr;
  };

  return (
    <div className="parentContainer w-screen   md:flex-1  m-auto   md:pt-0 px-5 lg:w-2/5">
      {/* <div className='parentSvg' style={{border: "1px solid red", height: "100vh", width: "100vw"}}> 
        <PawSteps style={{height: "100%"}} > */}
      <form
        className="bg-white shadow-md rounded md:px-8 md:pt-6 px-2 pb-8 mb-4  md:w-4/5 flex flex-col mx-auto md:my-20 z-80 xl:w-2/5 lg:w-3/5 mt-60"
        onSubmit={handleSubmit}
      >
        <h1 className="login font-semibold mb-4 text-2xl text-stone-700">
          Login
        </h1>
        <div className="childOne mb-4">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            name="email"
          />
          {err.email && <p className="text-red-500 text-sm">{err.email}</p>}
        </div>
        <div className="childTwo mb-4">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="password"
            placeholder="Please enter password"
            value={form.password}
            onChange={handleChange}
            name="password"
          />
          {err.password && (
            <p className="text-red-500 text-sm">{err.password}</p>
          )}
        </div>
        <div>
          <button className="btnbg-transparent border border-green-700 hover:border-0 hover:bg-green-600 text-green-900 hover:text-green-50 transition delay-0 text-xl font-normal py-2 px-4 rounded-full w-full mt-8 shadow-green-700 shadow-sm">
            Login
          </button>
          <p className="text-stone-700">
            No account? Click here to{" "}
            <Link to="/signup">
              <strong>Register</strong>
            </Link>
          </p>
        </div>
      </form>
      {/* </PawSteps>
        </div> */}
    </div>
  );
}

export default Login;
