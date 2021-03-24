import React, { Fragment } from "react";
import Cards from "./HomeComponents/Cards/Cards";
import Prestation from "./miniComponents/Prestations/Prestation";
import "./Home.css";
import News from "./miniComponents/news/News";
const Home = () => {
  return (
    <Fragment>
      <section className="video-section">
        <video autoPlay loop muted playsInline >
          <source src={require("./video/acceuil.mp4")} type="video/mp4" />
        </video>
      </section>
      <div className="translate"></div>
      <section className="first-section">
        <h1>Smart Waves Technologies (SWATEK)</h1>
        <p>
          Smart Waves Technologies est une société de recherche et de
          développement en électronique embarqué, informatique, et informatique
          industriel.
        </p>
      </section>{" "}
      <Cards />
      <Prestation />
      <News />
    </Fragment>
  );
};

export default Home;
