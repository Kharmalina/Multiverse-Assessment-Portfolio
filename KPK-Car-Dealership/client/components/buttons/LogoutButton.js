import React from "react";
import { NavLink } from "react-router-dom";

function LogoutButton({
  setToken,
  setCarsList,
  setLoading,
  setCarsFilteredList,
}) {
  function logoutUser() {
    localStorage.removeItem("token");
    setToken(null);
    setCarsList(null);
    setLoading(false);
    setCarsFilteredList(null);
  }
  return (
    <NavLink to="/">
      <button
        className="btn btn-outline-danger mx-2 px-2"
        onClick={() => logoutUser()}
      >
        Logout
      </button>
    </NavLink>
  );
}

export default LogoutButton;
