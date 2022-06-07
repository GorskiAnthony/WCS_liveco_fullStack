import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "./Register";
import Login from "./Login";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="flexGrow">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
