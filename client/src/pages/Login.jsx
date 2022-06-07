import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notifySuccess, notifyError } from "../services/notify";
import CurrentUserContext from "../context/CurrentUserContext";
import { setItem } from "../services/localStorage";

const Login = () => {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const { setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5500/api/auth/login", login, {
        withCredentials: true,
      })
      .then((res) => {
        notifySuccess();
        setItem("currentUser", res.data);
        setCurrentUser(res.data);
        return navigate("/");
      })
      .catch((err) => {
        const error = err.response.data;
        notifyError(error.validationErrors[0].message);
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
