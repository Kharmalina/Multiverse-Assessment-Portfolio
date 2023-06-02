import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

function Login({ setToken, setLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const [validLogin, setValidLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password'), null], 'Invalid password. Please try again.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  

  const onSubmit = async (e) => {
    try {
      const { token } = await loginUser({
        email,
        password,
      });
      setToken(token);
  
      setEmail("");
      setPassword("");
      setLoading(true)

      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch(err) {
      console.log("invalid email or password: ", err);
      setValidLogin(true)
    }
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
          <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {validLogin ? 
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </symbol>
                </svg>
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                  <div>
                    No user found with that email or password. Invalid, please try again.
                  </div>
                </div>
              </div> : ""}
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register('email', {onChange: (e) => setEmail(e.target.value)})}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  {...register('password', {onChange: (e) => setPassword(e.target.value)})}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <br></br>
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
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-3"
              >
                Submit
              </button>
            </form>
          </div>

        </Modal.Body>
      </Modal>    
    </>
  );
}

export default Login;
