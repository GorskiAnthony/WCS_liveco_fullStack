import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/img/pattern-divider-desktop.svg";
import buttonImg from "../assets/img/icon-dice.svg";

const Card = () => {
  const [advice, setAdvice] = useState({});
  const getData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };

  return (
    <section className="card">
      <h1 className="advice">
        Advice <span className="id-advice"># {advice.id}</span>
      </h1>
      <div className="text-container">
        "<span className="text">{advice.advice}</span>"
      </div>
      <img src={img} alt="divider" className="divider" />
      <button onClick={handleClick}>
        <img src={buttonImg} alt="random advice" />
      </button>
    </section>
  );
};

export default Card;
