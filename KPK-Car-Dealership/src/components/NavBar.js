import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import LogoutButton from "./LogoutButton";
// import CartBtn from "./buttons/CartBtn";

const Navbar = ({
  setSingleItem,
  singleItem,
  setUpdateItem,
  updateItem,
  setAddItems,
  addItems,
  setIsCart,
  isCart,
  setAbout,
  about,
  setToken,
  setCarsList,
}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KPK Dealership
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-2" type="submit">
                Search
              </button>
              <LogoutButton setToken={setToken} setCarsList={setCarsList} />
            </form>
            {/* <Login setToken={setToken}/>
      <Signup /> */}
          </div>
        </div>
      </nav>
      {/* <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="https://www.youtube.com/watch?v=dUZGTfEQqqI" target={"_blank"}>
          KPK Dealership
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home" onClick={() => {}}>
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#products" onClick={() => {}}>
                    Cars
                </a>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={() => {}}>
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Contact
                </a>
                </li>
            </ul>
          <Login />
          <Signup />
          <CartBtn setIsCart={setIsCart}/>
        </div>
      </div>
    </nav>
  </div> */}
    </>
  );
};

export default Navbar;
