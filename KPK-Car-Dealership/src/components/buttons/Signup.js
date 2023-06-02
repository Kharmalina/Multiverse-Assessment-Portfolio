import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

async function signupUser(credentials) {
  console.log(credentials);
  return fetch("https://kpk-car-dealership.onrender.com/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(async (data) => {
    const signupData = await data.json();
    return signupData;
    // console.log(signupData)
  });
}

function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = await signupUser({
      name,
      username,
      email,
      password,
    });

    setName("");
    setUsername("");
    setPassword("");
    setEmail("");

    alert("Registration Complete! Head to login :)");
  };

  return (
    <>
      <Button variant="outline-primary ms-2" onClick={handleShow}>
        <span className="fa fa-user-plus me-1"></span> Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleUser" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleUser"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleUser" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleUser"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              <span className="fa fa-google me-2"></span>Sign up With Google
            </button>
            <button className="btn btn-primary w-100 mb-4">
              <span className="fa fa-facebook me-2"></span>Sign up With Facebook
            </button>
            <button
              type="submit"
              className="btn btn-outline-primary w-100 mt-3"
            >
              Register
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
