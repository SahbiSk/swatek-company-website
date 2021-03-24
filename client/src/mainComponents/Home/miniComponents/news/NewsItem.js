import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, date }) => {
  return (
    <div className="item">
      <h3><span>.</span> {title}</h3>
      <p>{date} </p>
    </div>
  );
};

export default NewsItem;
