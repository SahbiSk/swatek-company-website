import React from "react";
import "./SystemInfo.css";
import database from "../../Home/miniComponents/Prestations/img/database.gif";

const SystemInfo = () => {
  return (
    <div className="system-info">
      <h1>LES SYSTÈMES D’INFORMATIONS<sub>swatek</sub></h1>
      <img src={database} alt="LES SYSTÈMES D’INFORMATIONS" />
      <div className="details">
        <p className="intro">
          Face aux besoins particuliers de ses clients opérants dans les
          différents secteurs, Smart Waves Technologie propose ses services de
          développement spécifique software et hardware.
        </p>
        <strong>Développement spécifique : Méthodologie</strong>
        <p>
          Notre méthodologie de développement spécifique consiste en première
          phase à accompagner le client dans la formulation de ses besoins,
          étudier la faisabilité de son projet et l’assister dans l’élaboration
          du cahier des charges.
        </p>
        <strong>Développement spécifique : Processus</strong>
        <p>
          Pour la bonne réalisation du produit, Les ingénieurs Smart Waves
          Technologie affectés au projet mettent en œuvre tout les processus
          prédéfinis et rodés conformément aux termes du cahier des charges.
        </p>
        <p>
          En étroite collaboration avec le client, l’équipe projet transfert le
          produit développé en assurant son bon fonctionnement dans
          l’environnement de déploiement et s’engage dans la formation de
          l’équipe client.
        </p>
        <p>
          Smart Waves Technologie s’engage aussi à garantir le service
          après-vente ainsi que le support technique pour tout type de
          maintenance : le meilleur service de TMA , Tierce qualification
          applicative…
        </p>
      </div>
    </div>
  );
};

export default SystemInfo;
