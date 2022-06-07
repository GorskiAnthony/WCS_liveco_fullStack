import React, { useContext } from "react";
import axios from "axios";
import CurrentUserContext from "../context/CurrentUserContext";
const { notifyError, notifySuccess } = require("../services/notify");

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5500/api/users", currentUser)
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        notifyError(err.response.data.validationErrors[0].message);
      });
  };

  return (
    <div className="card">
      <header className="header">
        <h1>Hello !</h1>
        <img
          src={
            currentUser.avatar
              ? currentUser.avatar
              : `https://robohash.org/${currentUser.id}`
          }
          alt="avatar"
        />
      </header>
      <p>This is your profile</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={currentUser.email}
          />
        </div>
        <input type="submit" value="mettre à jour" />
      </form>
    </div>
  );
};

export default Profile;