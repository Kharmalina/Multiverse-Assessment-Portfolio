import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("https://kpk-car-dealership.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(async (data) => {
    const loginData = await data.json();
    if (!loginData?.token) throw new Error(loginData.message);
    else {
      localStorage.setItem("token", JSON.stringify(loginData.token));
      return loginData;
    }
  });
}

function Login({ setToken, token }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await loginUser({
      email,
      password,
    });
    setToken(token);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <span className="fa fa-sign-in me-1"></span> Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 mb-4">
              <span className="fa fa-google me-2"></span>Sign in With Google
            </button>
            <button className="btn btn-primary w-100 mb-4">
              <span className="fa fa-facebook me-2"></span>Sign in With Facebook
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 mt-3"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
