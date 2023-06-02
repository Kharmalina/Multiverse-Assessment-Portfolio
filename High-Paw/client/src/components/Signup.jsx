import React from "react";
import { useState } from "react";
import axios from "axios";

import adressToLatLong from "../../utils/adressToLatLong";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [err, setErr] = useState({});
  // for cloudinary
  const preset_key = "rmfpv4pk";

  const validateForm = () => {
    // create an empty object to hold the errors, this will be updated with each if statement, if there is an error, the error message will be added to the object and the object will be returned, if there are no errors, the object will be empty and the function will return false
    const err = {};
    let noErr = true;
    if (!form.name) {
      // err.email = "Please enter email";
      err.name = "Please enter name";
      noErr = false;
    }
    if (!form.breed) {
      // err.email = "Please enter email";
      err.breed = "Please enter breed";
      noErr = false;
    }
    if (!form.age) {
      // err.email = "Please enter email";
      err.age = "Please enter age";
      noErr = false;
    }
    if (!form.picture) {
      // err.email = "Please enter email";
      err.picture = "Please upload a picture";
      noErr = false;
    }
    if (!form.address) {
      // err.email = "Please enter email";
      err.address = "Please enter address";
      noErr = false;
    }
    if (!form.city) {
      // err.email = "Please enter email";
      err.city = "Please enter city";
      noErr = false;
    }
    if (!form.email) {
      err.email = "Please enter email";
      noErr = false;
    }
    if (!form.password) {
      err.password = "Please enter password";
      noErr = false;
    }
    if (form.password.length < 8) {
      err.password = "Password must be at least 8 characters long";
      noErr = false;
    }
    if (form.password !== form.confirmPassword) {
      err.confirmPassword = "Passwords do not match";
      noErr = false;
    }
    setErr(err);

    return noErr;
  };
  // for cloudinary to upload image
  function handleFile(event) {
    const selectedImages = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", preset_key);
    axios
      .post("https://api.cloudinary.com/v1_1/dhknz3izf/image/upload", formData)
      .then((response) =>
        // add img to current state of the form
        setForm({ ...form, picture: response.data.secure_url })
      )
      .catch((error) => console.log(error));
  }

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: "",
    picture: "",
    address: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const latLong = await adressToLatLong(form.address, form.city);
    if (!latLong || !latLong.length) {
      return alert("Please enter a valid address");
    }
    console.log(latLong);
    axios
      .post("https://high-paw-production.up.railway.app/auth/register", {
        ...form,
        latLong,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
    navigate("/login");
  };

  return (
    <div className="parentContainer w-screen   md:flex-1  m-auto   md:pt-0 px-5 lg:w-2/5 ">
      {/* <div className='parentSvg' style={{border: "1px solid red", height: "100vh", width: "100vw"}}> 
    <PawSteps style={{height: "100%"}} > */}
      <form
        className="bg-white shadow-md rounded md:px-8 md:pt-6 px-2 pb-8 mb-4  md:w-4/5 flex flex-col mx-auto md:my-20 z-80 xl:w-2/5 lg:w-3/5"
        onSubmit={handleSubmit}
      >
        <h1 className="login font-semibold mb-4 text-2xl text-stone-700">
          Signup
        </h1>
        <div className="childOne mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            name="name"
            autoComplete="off"
          />
          {err.name && <p className=" text-red-500 text-sm">{err.name}</p>}
        </div>
        <div className="childTwo mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="text"
            placeholder="Breed"
            value={form.breed}
            onChange={handleChange}
            name="breed"
            autoComplete="off"
          />
          {err.breed && <p className=" text-red-500 text-sm">{err.breed}</p>}
        </div>
        <div className="childThree mb-2">
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            name="age"
            autoComplete="off"
          />
          {err.age && <p className=" text-red-500 text-sm">{err.age}</p>}
        </div>

        <div className="childFour mb-2">
          <label htmlFor="img">Upload image</label>
          <input
            id="img"
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="file"
            placeholder="123 Address Street"
            onChange={handleFile}
            accept="image/png, image/jpeg, image/jpg"
            autoComplete="off"
          />
          {err.picture && (
            <p className=" text-red-500 text-sm">{err.picture}</p>
          )}
        </div>
        <div className="childFive mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="text"
            placeholder="123 Address Street"
            value={form.address}
            onChange={handleChange}
            name="address"
            autoComplete="off"
          />
          {err.address && (
            <p className=" text-red-500 text-sm">{err.address}</p>
          )}
        </div>
        <div className="childSix mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="text"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            name="city"
            autoComplete="off"
          />
          {err.city && <p className=" text-red-500 text-sm">{err.city}</p>}
        </div>

        <div className="childSeven mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            autoComplete="off"
          />
          {err.email && <p className=" text-red-500 text-sm">{err.email}</p>}
        </div>
        <div className="childEight mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="password"
            placeholder="Please enter password"
            value={form.password}
            onChange={handleChange}
            name="password"
            autoComplete="off"
          />
          {err.password && (
            <p className="text-red-500 text-sm">{err.password}</p>
          )}{" "}
        </div>

        <div className="childEight mb-2">
          <input
            className="input-title shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500"
            type="password"
            placeholder="Confirm  password"
            value={form.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            autoComplete="off"
          />
          {err.confirmPassword && (
            <p className="text-red-500 text-sm">{err.confirmPassword}</p>
          )}{" "}
        </div>

        <div>
          <button className="btn bg-transparent border border-green-700 hover:border-0 hover:bg-green-600 text-green-900 hover:text-green-50 transition delay-0 text-xl font-normal py-2 px-4 rounded-full w-full mt-8 shadow-green-700 shadow-sm">
            Signup
          </button>
          <p className="text-stone-700">
            Already have an account? Click here to{" "}
            <Link to="/login">
              <strong>Login</strong>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
