import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-form-container">
        <i className="fas fa-times" id="form-close"></i>

        <form action="">
          <h3>login</h3>
          <input type="email" className="box" placeholder="enter your email" />
          <input
            type="password"
            className="box"
            placeholder="enter your password"
          />
          <input type="submit" value="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">register now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
