import React from "react";
import { Link } from "react-router-dom";
import "./PrestationItem.css";

const PrestationItem = ({ img, description, path }) => {
  return (
    <Link className="prestation-item" to={path}>
      <img src={img} alt={description} />
      <p>{description}</p>
    </Link>
  );
};

export default PrestationItem;
