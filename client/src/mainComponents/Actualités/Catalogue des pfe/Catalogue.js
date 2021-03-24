import React, { useState, useEffect } from "react";
import CatalogueItem from "./CatalogueItem/CatalogueItem";
import CommentSection from "../CommentSection/CommentSection";
import stage from "../img/stage2.png";
import api from "../../../utils/api";
import "./Catalogue.css";

const Catalogue = () => {
  const [items, setItems] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("/api/v1/stages/getAllStages");
        setItems([...data.data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const date = new Date(Date.now())
  const year = date.getFullYear();
  return (
    <div className="catalogue-container">
      <div className="catalogue-section">
        {" "}
        <h1>Catalogue des PFE {year} :</h1>
        <img src={stage} alt="stage" className="stage-icon" />
        <strong>
          Dans le cadre de son expansion notre société propose, pour l’année
          {year}, plusieurs projets de fin d’étude.
        </strong>
        <h3>Comment postuler ?</h3>
        <p className="moyen">
          Le seul moyen de postuler est d’envoyer un mail à{" "}
          <span> contact@swatek.tn</span> :
        </p>{" "}
        <ul>
          <li>
            <span>.</span>
            Préciser au moins la référence du sujet mentionnée en haut de cette
            page dans l’objet du mail
          </li>
          <li>
            <span>.</span>Joindre un CV mis à jour
          </li>
          <li>
            <span>.</span>
            Une lettre de motivation personnalisée en mettant en valeur les
            compétences acquises ou le potentiel du candidat.
          </li>
        </ul>
        <p className="si">
          Si le candidat est intéressé par plus qu’un sujet, il peut mettre la
          référence de celui qui l’intéresse le plus dans l’objet du mail et
          citer dans le corps du mail tous ceux pour lesquels il postule dans
          l’ordre de préférence décroissant.
        </p>
      </div>
      <div className="catalogue-items">
        <h1>Liste des sujets</h1>
        {items === "" ? (
          <h2>waiting...</h2>
        ) : (
          <div className="items">
            {items.map((item, i) => (
              <CatalogueItem key={i} {...item} />
            ))}
          </div>
        )}
      </div>
      <CommentSection />
    </div>
  );
};

export default Catalogue;
