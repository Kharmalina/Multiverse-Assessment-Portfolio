import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./buttons/LogoutButton";

const Navbar = ({ setToken, setCarsList, setLoading, setCarsFilteredList }) => {
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
                <NavLink
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cars" className="nav-link" href="#">
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <LogoutButton
                setToken={setToken}
                setCarsList={setCarsList}
                setCarsFilteredList={setCarsFilteredList}
                setLoading={setLoading}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
