import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notifySuccessRegister, notifyErrorRegister } from "../services/notify";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/api/auth/login", login)
      .then(() => {
        notifySuccessRegister();
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
        const error = err.response.data;
        notifyErrorRegister(error.validationErrors[0].message);
      });
  };

  return (
    <div className="cardForm">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
