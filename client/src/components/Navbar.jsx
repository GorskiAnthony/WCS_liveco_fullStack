import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { clearItem } from "../services/localStorage";
import CurrentUserContext from "../context/CurrentUserContext";

const Navbar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const handleClick = () => {
    clearItem("currentUser");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <h1>
        <Link to="/">Full TP Authentification </Link>
      </h1>

      {currentUser ? (
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
            <li>
              <a onClick={handleClick} className="pointer">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
