import React, { useState } from "react";
import "./Example.css";

const Example = () => {
  let sliderArr = [
    require("./img/1.png"),
    require("./img/2.png"),
    require("./img/3.png"),
    require("./img/4.png"),
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (sliderArr.length - 1));
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === (sliderArr.length - 1) * -100) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          <img src={item} className="img" alt="" />
        </div>
      ))}
      <button className="prev" onClick={goLeft}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="next" onClick={goRight}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Example;
