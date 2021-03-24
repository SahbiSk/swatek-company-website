import React from "react";
import "./CatalogueItem.css";

const CatalogueItem = ({
  title,
  profil,
  mots_clefs,
  description,
  reference,
}) => {
  return (
    <div className="catalogue-item">
      <h2>{title} :</h2>
      <h3>Ref : « {reference} »</h3>
      <p>{description}</p>
      <p className="mots">
        <strong>Mots Clefs :</strong>
        {mots_clefs}{" "}
      </p>
      <h3>Profil :</h3>
      <ul>
        {profil.map((item, i) => (
          <li key={i}>
            <span>.</span> {item}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default CatalogueItem;
