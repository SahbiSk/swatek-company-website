import React from "react";
import Icon from "../mainComponents/Home/miniComponents/Icon";
import "./Footer.css";
const icons = [
  { linkClassName: "btn", iconType: "fab fa-facebook", path: "/" },
  { linkClassName: "btn", iconType: "fab fa-instagram", path: "/" },
  { linkClassName: "btn", iconType: "fab fa-linkedin-in", path: "/" },
  { linkClassName: "btn", iconType: "fab fa-twitter", path: "/" },
];

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <span>
          {" "}
          <p>
            {" "}
            Adresse
            <i className="fas fa-map-marker-alt"></i>: 3 rue des amandes Khézama
            Est 4051 Sousse Tunisie
          </p>
        </span>
        <span>
          <p>
            Tél :<i className="fas fa-phone-volume"></i> (+216) 73 277 052{" "}
          </p>{" "}
        </span>
        <span>
          <p>
            {" "}
            Email: <i className="fas fa-envelope-square"></i> contact@swatek.tn
          </p>{" "}
        </span>
      </div>
      <div className="right">
        <p>Suivez nous :</p>
        <div className="tags">
          {" "}
          {icons.map((icon, key) => (
            <Icon
              key={key}
              linkClassName={icon.linkClassName}
              path={icon.path}
              iconType={icon.iconType}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
