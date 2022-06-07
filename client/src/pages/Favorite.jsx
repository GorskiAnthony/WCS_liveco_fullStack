import React from "react";
import axios from "axios";

const Favorite = () => {
  axios
    .get("http://localhost:5500/test", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>Favorite</div>;
};

export default Favorite;
