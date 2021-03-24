import React from "react";
import "./Innovation.css";

const Innovation = ({ icon, description, title, comment }) => {
  return (
    <div className="innovation-item" >
      <img  className="innovation-img" src={icon} alt={description} />
      <div className="lorem">
        <p className="description">{description}</p>
        <p className="title">
          <span>{title}</span>
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Innovation;
