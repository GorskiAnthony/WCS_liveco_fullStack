import React from "react";
import img from "../assets/img/pattern-divider-desktop.svg";
import buttonImg from "../assets/img/icon-dice.svg";

const Card = () => {
  return (
    <section className="card">
      <h1 className="advice">
        Advice <span className="id-advice">#117</span>
      </h1>
      <div className="text-container">
        "
        <span className="text">
          common regret in life is wishing one hadn't worked so hard.
        </span>
        "
      </div>
      <img src={img} alt="divider" className="divider" />
      <button>
        <img src={buttonImg} alt="random advice" />
      </button>
    </section>
  );
};

export default Card;
