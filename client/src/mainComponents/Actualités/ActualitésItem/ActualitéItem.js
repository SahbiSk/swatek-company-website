import React from "react";
import { Link } from "react-router-dom";
import "./ActualitéItem.css";
import { Button } from "@material-ui/core";

const ActualitéItem = ({ title, date, description, path }) => (
  <div className="actualité-item">
    <h3>{title}</h3>
    <p className="actualité-item__date">{date}</p>
    <p className="actualité-item__description">{description}</p>
    <Link to={path} className="actualité-item__link">
      <Button className="actualité-item__button">Lire la suite</Button>
    </Link>
  </div>
);

export default ActualitéItem;
