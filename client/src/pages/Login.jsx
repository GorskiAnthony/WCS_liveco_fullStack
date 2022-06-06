import React from "react";

const Login = () => {
  return (
    <div className="cardForm">
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
