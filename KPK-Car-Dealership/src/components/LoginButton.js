import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

function LoginButton() {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://kpk-car-dealership.onrender.com/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            username: username,
            name: username,
          }),
        }
      );
      const data = await response.json();
      setItems([...items, data]);

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");
      setImage("");
      setRating("");

      setAddItems(false);
    } catch (err) {
      console.log("form error", err);
    }

    setAddItems(false);
  };

  return (
    <div>
      <div className="login-container">
        <div className="col-xs-12 col-sm-4 col-sm-offset-4 login-box">
          <div className="login-header">
            {/* <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" /> */}
            <h3>Welcome</h3>
            <h5>PLEASE LOG IN</h5>
          </div>
          <div id="error-message" className="alert alert-danger"></div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="captcha-container form-group"></div>
            <button
              type="submit"
              id="btn-login"
              className="btn btn-primary btn-block"
            >
              Log In
            </button>
            <button
              type="button"
              id="btn-signup"
              className="btn btn-default btn-block"
            >
              Sign Up
            </button>
            <hr />
            <button
              type="button"
              id="btn-google"
              className="btn btn-default btn-danger btn-block"
            >
              Log In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginButton;
