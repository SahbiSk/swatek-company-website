import React from "react";
import "./News.css";
import NewsItem from "./NewsItem";
import img1 from "./innovation-img/innovation.png";
import img2 from "./innovation-img/excellence.png";
import Innovation from "./Innovation";

const News = () => {
  const actualities = [
    {
      title: "Stage PFE – Développement web (ingénieur)",
      date: "Jan 8,2019",
    },
    {
      title:
        "Signature de convention d’assistance et économie d’énergie avec LEONI ",
      date: "Déc 15,2016",
    },
    {
      title: "Catalogue des PFE 2017",
      date: "Déc 14,2016",
    },
  ];

  const innovations = [
    {
      icon: img1,
      description:
        "« Comment puis-je innover aujourd’hui ? » est la pensée quotidienne d’un membre de l’équipe Smart Waves Technologies.",
      title: "INNOVATION",
      comment: "(Smart Waves Technologies)",
    },
    {
      icon: img2,
      description:
        "Nous aspirons à offrir le meilleur service possible tout en offrant une forte valeur ajoutée.",
      title: "EXCELLENCE",
      comment: "(Smart Waves Technologies)",
    },
  ];

  return (
    <div className="news-container">
      {" "}
      <div className="innovation">
        <h2>INNOVATION & EXCELLENCE</h2>
        <span>Chez Smart Waves Technologies</span>
        <div className="innovation-items">
          {innovations.map((inno, i) => (
            <Innovation {...inno} key={i} />
          ))}
        </div>
      </div>
      <div className="actualité">
        <h2>ACTUALITES</h2>
        <span>Smart Waves Technologies</span>
        <div className="news">
          {actualities.map(({ title, date }) => (
            <NewsItem title={title} date={date} key={date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
