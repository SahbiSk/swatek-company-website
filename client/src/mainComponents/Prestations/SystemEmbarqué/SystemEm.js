import React from "react";
import "./SystemEm.css";
import iot from "../../Home/miniComponents/Prestations/img/iot_1.gif";

const SystemEm = () => {
  return (
    <div className="system-em">
      <h1>
        LES SYSTÈMES EMBARQUÉS<sub>swatek</sub>
      </h1>
      <img src={iot} alt="" />
      <div className="system-em__container">
        <p>
          La grande compétence des ingénieurs en développement de systèmes
          embarqués de notre société de conseil informatique nous a permis de
          développer des systèmes et des applications sur la base des
          technologies les plus pointues. Nos compétences interdisciplinaires
          (Hardware, Software) créent des solutions complètes à partir des
          plateformes matérielles jusqu’au logiciels Frontal. Nous vous
          proposons des compétences hautement qualifiées orientées
          principalement vers les secteurs suivants:
        </p>
        <ul>
          <li>
            <span>.</span>Multimédia
          </li>
          <li>
            <span>.</span>Domotique
          </li>
          <li>
            <span>.</span> Wireless
          </li>
          <li>
            <span>.</span> Industrie
          </li>
          <li>
            <span>.</span>Equipements de télécommunications et instruments de
            mesure
          </li>
          <li>
            <span>.</span>Systèmes de sécurité (systèmes d’alarmes, systèmes de
            surveillance vidéo)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SystemEm;
