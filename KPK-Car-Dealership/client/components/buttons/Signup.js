import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

async function signupUser(credentials) {
  return fetch("https://kpk-car-dealership.onrender.com/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(async (data) => {
    const signupData = await data.json();
    return signupData;
  });
}

function Signup() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(40, "Password must not exceed 40 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirmPassword: Yup.string()
      .required("Please Confirm Password")
      .oneOf([Yup.ref("password"), null], "Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accepting Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const [validRegistration, setValidRegistration] = useState(false);

  const onSubmit = async (e) => {
    try {
      setValidRegistration(true);

      const { user } = await signupUser({
        name,
        username,
        email,
        password,
        confirmPassword,
      });

      setValidRegistration(true);
    } catch (err) {
      console.log("invalid register: ", err);
    }
  };

  return (
    <>
      <Button variant="outline-primary ms-2" onClick={handleShow}>
        <span className="fa fa-user-plus me-1"></span> Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {validRegistration ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "none" }}
                  >
                    <symbol id="check-circle-fill" viewBox="0 -8 16 32">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </symbol>
                  </svg>
                  <div
                    className="alert alert-success d-flex align-items-center"
                    role="alert"
                  >
                    <svg className="bi me-2" role="img" aria-label="Success:">
                      <use xlinkHref="#check-circle-fill" />
                    </svg>
                    <div>Registration Successfully Complete! Please Log in</div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="form-group">
                <label>Name</label>
                <input
                  name="fullname"
                  type="text"
                  {...register("fullname", {
                    onChange: (e) => setName(e.target.value),
                  })}
                  className={`form-control ${
                    errors.fullname ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.fullname?.message}
                </div>
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  {...register("username", {
                    onChange: (e) => setUsername(e.target.value),
                  })}
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register("email", {
                    onChange: (e) => setEmail(e.target.value),
                  })}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
                  {...register("password", {
                    onChange: (e) => setPassword(e.target.value),
                  })}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    onChange: (e) => setConfirmPassword(e.target.value),
                  })}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>
              <br></br>
              <div className="form-group form-check">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  {...register("acceptTerms")}
                  className={`form-check-input ${
                    errors.acceptTerms ? "is-invalid" : ""
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label ms-2">
                  I have read and agree to the Terms
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <button
                  type="reset"
                  onClick={reset}
                  className="btn btn-warning ms-2 float-right"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
