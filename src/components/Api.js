import React, { useState } from "react";
import Axios from "axios";
import gsap from "gsap";
const Api = () => {
  const [state, setState] = useState();
  const getQuote = () => {
    Axios.get("https://api.kanye.rest")
      .then((result) => {
        console.log(result);
        setState(result.data.quote);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === "404") {
          setState("Couldn't Kanye You");
        }
      });
  };
  gsap.fromTo(
    ".animate",
    { opacity: 0, y: 50, color: "black" },
    { opacity: 1, y: 0, duration: 2, color: "white", ease: "power4.out" }
  );
  return (
    <div className='grid'>
      <h1>Kanye West Quotes</h1>
      <h2 className='animate'>{state}</h2>
      <button onClick={getQuote}>Kanye Me</button>
    </div>
  );
};

export default Api;
