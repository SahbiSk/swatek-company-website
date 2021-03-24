import React from "react";
import PrestationItem from "./PrestationItem";
import smartHome from "./img/smartHome.gif";
import system from "./img/iot_1.gif";
import database from "./img/database.gif";
import "./Prestation.css";

const items = [
  {
    img: smartHome,
    description: "La gestion technique du bâtiment",
    path: "/gestion-tech-batiment",
  },
  { img: system, description: "Les systèmes embarqués", path: "/sys-embarqué" },
  {
    img: database,
    description: "Les systèmes d’informations",
    path: "/sys-info",
  },
];

const Prestation = () => {
  return (
    <div className="container">
      <h2>NOS PRESTATIONS</h2>
      <div className="prestations">
        {items.map((item, i) => (
          <PrestationItem
            key={i}
            img={item.img}
            description={item.description}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Prestation;
