import React from "react";
import { useRouteMatch } from "react-router-dom";
import ActualitéItem from "./ActualitésItem/ActualitéItem";
import "./MainActualités.css";

const items = [
  {
    title:
      "Signature de convention d’assistance et économie d’énergie avec LEONI",
    date: "15 décembre 2016",
    description:
      "  Energie Care System est une solution embarqué qui permet le suivie et la gestion des équipements électriques dans les locaux de production LTN LEONI. ECS c’est...",
  },
  {
    title: "Catalogue des PFE 2017",
    date: "14 décembre 2016",
    description:
      "Catalogue des PFE 2016/2017 Dans le cadre de son expansion notre société  propose, pour l’année 2017, plusieurs projets de fin d’étude. Comment postuler Le seul moyen de postuler est...",
  },
];

const MainActualités = () => {
  const url = useRouteMatch().url + "/";

  return (
    <div className="main-actualités">
      <h2>ACTUALITÉS :</h2>
      <div className="main-actualités__items">
        {" "}
        {items.map((item, i) => (
          <ActualitéItem {...item} path={url + i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainActualités;
