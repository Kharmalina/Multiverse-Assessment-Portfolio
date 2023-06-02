import React from "react";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import ReactLoading from "react-loading";
import "../style.css";

function LoginRegisterPage({ loading, setToken, setLoading }) {
  return (
    <>
      {loading ? (
        <div className="center-screen image-screen">
          <h2>Logging in...</h2>
          <ReactLoading
            type={"bubbles"}
            color={"black"}
            height={"15%"}
            width={"15%"}
          />
        </div>
      ) : (
        <>
          <div className="center-screen image-screen">
            <div>
              <h1>🚗 KPKar Dealership 🚗</h1>
              <p>
                Welcome to KPKar Dealership, a one-stop-shop for all your car
                needs! We sell the best quality cars with the best prices!
              </p>
              <p>
                To checkout the latest inventory, create an account and login
              </p>
            </div>
            <div>
              <Login setToken={setToken} setLoading={setLoading} />
              <Signup />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LoginRegisterPage;
