import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "./Register";
import Login from "./Login";

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
      <Footer />
    </div>
  );
};

export default App;
