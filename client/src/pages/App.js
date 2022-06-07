import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import { CurrentUserContextProvider } from "../context/CurrentUserContext";
import Profile from "./Profile";
import Favorite from "./Favorite";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <CurrentUserContextProvider>
      <div className="container">
        <Navbar />
        <div className="flexGrow">
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <ToastContainer />
        <Footer />
      </div>
    </CurrentUserContextProvider>
  );
};

export default App;
