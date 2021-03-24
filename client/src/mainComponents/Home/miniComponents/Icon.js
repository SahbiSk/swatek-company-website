import React from "react";
import { Link} from "react-router-dom";
import "./Icon.css";

const Icon = ({ linkClassName, iconType, path }) => {
  return (
    <Link className={linkClassName} to={ path || "/"}>
      <i className={`${iconType}`}></i>
    </Link>
  );
};

export default Icon;
