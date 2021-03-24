import React from "react";
import "./Cards.css";
import Icon from "../../miniComponents/Icon";

const cards = [
  {
    icon: "fas fa-handshake",
    title: "CLIENT",
    description:
      "Chaque projet Smart Waves Technologies obéit à une philosophie simple : vous redonner le contrôle.",
  },
  {
    icon: "fas fa-rocket",
    title: "ENTREPRENEURIAT",
    description:
      "Nous avons une culture startup. Nous prenons des risques afin d’innover.",
  },
  {
    icon: "fas fa-robot",
    title: "TECHNOLOGIE",
    description:
      "Outre la maîtrise de la technologie d’aujoud’hui, nous ambitionnons également d’inventer celle de demain.",
  },
  {
    icon: "fas fa-users",
    title: "EQUIPE",
    description:
      "Nous sommes une famille et le travail d’équipe est la raison principale de notre succès.",
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cards.map((card, i) => (
        <div className="card" key={i}>
          <Icon iconType={card.icon} linkClassName={"btn"} />{" "}
          <h3>{card.title} </h3>
          <p>{card.description}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default Cards;
