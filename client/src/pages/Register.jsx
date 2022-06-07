import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notifySuccessRegister, notifyErrorRegister } from "../services/notify";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = React.useState({
    email: "",
    password: "",
    repeat_password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password !== register.repeat_password) {
      notifyErrorRegister("Passwords do not match");
      return;
    }
    axios
      .post("http://localhost:5500/api/auth/register", register)
      .then(() => {
        notifySuccessRegister();
        // redirect to login page
        return navigate("/login");
      })
      .catch((err) => {
        const error = err.response.data;
        notifyErrorRegister(error.validationErrors[0].message);
      });
  };

  return (
    <div className="cardForm">
      <h1>S'enregistrer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="repeat_password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Go!" />
      </form>
    </div>
  );
};

export default Register;
