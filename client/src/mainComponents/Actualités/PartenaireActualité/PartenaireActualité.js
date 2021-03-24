import React from "react";
import "./PartenaireActualité.css";
import Example from "./Carousel/Example";
import CommentSection from "../CommentSection/CommentSection";

export const PartenaireActualité = () => {
  /**const [state, setState] = useState({
    title:
      "Signature de convention d’assistance et économie d’énergie avec LEONI",
    date: "Déc 15,2016",
    place: "ECS, LEONI",
    description:
      "Energie Care System est une solution embarqué qui permet le suivie et la gestion des équipements électriques dans les locaux de production LTN LEONI. ECS c’est une solution d’objet connecté (internet of things) qui contribue à une efficacité énergétique et productique.",
  }); */
  const state = {
    title:
      "Signature de convention d’assistance et économie d’énergie avec LEONI",
    date: "Déc 15,2016",
    place: "ECS, LEONI",
    description:
      "Energie Care System est une solution embarqué qui permet le suivie et la gestion des équipements électriques dans les locaux de production LTN LEONI. ECS c’est une solution d’objet connecté (internet of things) qui contribue à une efficacité énergétique et productique.",
  };

  const { date, title, place, description } = state;
  return (
    <div className="partenaire-actualité__container">
      <h2>{title}</h2>
      <div className="date-place">
        <p>
          <i className="fas fa-table"></i> {date}
          <i className="fas fa-map-marker-alt"></i>
          {place}
        </p>
      </div>
      <Example />
      <p className="desc">{description} </p>
      <CommentSection />
    </div>
  );
};
