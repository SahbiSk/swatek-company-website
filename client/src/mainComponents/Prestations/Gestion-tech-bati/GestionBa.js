import React from "react";
import "./GestionBa.css";
import iot from "../../Home/miniComponents/Prestations/img/smartHome.gif";

const GestionBa = () => {
  return (
    <div className="gestion-ba">
      <h1>
        LA GESTION TECHNIQUE DU BÂTIMENT<sub>swatek</sub>
      </h1>
      <img src={iot} alt="smart-home" />
      <div className="gestion-details">
        <p>
          La Gestion Technique du Bâtiment – GTB – permet de raccorder les
          équipements techniques du bâtiment afin de sécuriser, maitriser,
          économiser et gérer. Concept communiquant numérique et informatique,
          elle permet de :
        </p>
        <ul>
          <li>
            {" "}
            <span>.</span> Surveiller des installations 24h/24 7j/7
          </li>
          <li>
            {" "}
            <span>.</span>Réduire les dépenses énergétiques
          </li>
          <li>
            <span>.</span>Maintenir la température et le confort
          </li>
          <li>
            <span>.</span>Fiabiliser les installations et augmenter leur durée
            de vie
          </li>
          <li>
            <span>.</span>
            Réduire des déplacements et intervenir très rapidement à distance
          </li>
          <li>
            <span>.</span>Assurer une gestion énergétique optimum du bâtiment.
          </li>
        </ul>
        <strong>LES PRINCIPAUX AVANTAGES D’ UNE GTB</strong>
        <p>
          L’avantage premier est de permettre la conduite simplifiée et
          centralisée des installations techniques d’un bâtiment, que
          l’exploitation soit organisée sur site et/ou déportée. Nous insistons
          particulièrement, en tant que prescripteur, sur le fait que
          l’appropriation de l’outil est un préalable à l’utilisation et la
          pérennité de la GTB ; en ce sens, la GTB doit être un outil conçu et
          utilisable par un personnel non informaticien.
        </p>
        <p>Les autres avantages procurés par la GTB sont :</p>
        <ul>
          <li>
            <span>.</span>la remontée d’informations temps réel (état de
            fonctionnement d’équipements, remontée d’alarmes sur défaut ou sur
            dépassement de seuil, mesure de grandeurs physiques telles que
            comptage d’énergies, relève de température, comptabilisation des
            temps de fonctionnement, etc…).
          </li>
          <li>
            <span>.</span>la planification des opérations de maintenance
            préventive ; la remontée d’informations de terrain permet
            d’anticiper et de cibler précisément les besoins de maintenance. Il
            en résulte une diminution du nombre de pannes et donc une meilleure
            disponibilité des installations.
          </li>
          <li>
            <span>.</span>enfin, la GTB permet l’interconnexion d’installations
            techniques au travers de bus de terrain fédérateurs et rend les
            bâtiments intelligents dans leur fonctionnement (le fonctionnement
            s’avère quasi-autonome une fois la mise en exploitation de la GTB
            validée); l’interconnexion des installations permet également
            d’éviter les doublons d’équipements (exemple : multi-capteurs
            installés dans les bureaux commandant à la fois les terminaux de
            CVC, les luminaires et les protections solaires).
          </li>
        </ul>
        <strong>LES ENJEUX D’UNE GTB</strong>
        <p>
          Les enjeux essentiels de la GTB sont avant tout la maîtrise de la
          gestion d’énergie et la réduction d’émissions de gaz à effet de serre,
          enjeux majeurs des bâtiments d’aujourd’hui et de demain. Deux aspects
          de la GTB permettent de converger vers ces objectifs :
        </p>{" "}
        <ul>
          <li>
            <span>.</span>La configuration de scénarii de fonctionnement
            associés à la définition de programmes horaires,
          </li>
          <li>
            <span>.</span>L’interaction des installations techniques, exemple
            des bureaux : En hiver : bénéficier des apports solaires en relevant
            les protections solaires mobiles et diminuer le besoin en éclairage,
            En été : descente et inclinaison des protections solaires mobiles en
            cas de surexposition limitant les besoins en rafraîchissement.
          </li>
        </ul>
        <p>
          Les autres enjeux sont d’améliorer de façon significative le confort
          des occupants des bâtiments en agissant automatiquement et de manière
          précise sur le comportement des installations mais également
          d’anticiper les périodes de fortes consommations énergétiques en
          délestant de manière automatique une partie des installations. Dans
          même esprit, certaines GTB permettent la reconfiguration des espaces
          sans intervention sur le câblage. Le gain de temps se cumule avec
          l’absence de gêne des occupants. La GTB doit être adaptée et
          directement parlante aux utilisateurs, quel que soit le profil de ces
          derniers, de manière à constituer un outil de conduite utilisé et
          pérenne (il est en effet rarement organisé de formation à
          l’utilisation du système au changement d’exploitant).
        </p>
        <strong>LES POSSIBILITÉS D’ECONOMIES</strong>
        <p>
          L’exploitation d’un bâtiment représente environ 80% du coût global de
          l’ouvrage contre 15 à 20% pour son coût de construction. La GTB permet
          une meilleure conduite des installations (gestion au plus près des
          besoins par le recours aux programmes horaires, délestage en cas de
          dépassement de seuils de puissance, etc.) et une meilleure
          anticipation des besoins de maintenance ce qui se traduit par une
          meilleure prévention des pannes (remontée à la supervision des temps
          de fonctionnement des équipements tournants, du pourcentage
          d’encrassement des filtres, de l’état d’usure des ballasts
          d’éclairage, etc.) et donc une planification au plus juste des besoins
          en maintenance corrective (nombre de déplacements optimisés,
          maintenance et réglage à distance). La GTB permet également la
          télé-relève des compteurs d’énergie et des états des équipements
          (remontée à distance) ce qui évite les déplacements spécifiques sur
          site. La norme NF EN 15-232 « Performance énergétique des bâtiments,
          impact de l’automatisation, de la régulation et de la gestion
          technique » permet aujourd’hui d’évaluer les économies attendues en
          fonction du degré d’automatisation du bâtiment. Ce référentiel vise
          l’unification des méthodes d’évaluation de l’impact des
          automatisations, des systèmes de régulation et de la GTB sur la
          consommation d’énergie. Nous pouvons également citer la norme NF EN
          15-193 visant les exigences énergétiques en matière d’éclairage.
        </p>
        <strong>RETOUR SUR INVESTISSEMENT</strong>
        <p>
          Une nouvelle fois la norme NF 15-232 peut permettre d’évaluer
          l’incidence financière de l’automatisation plus ou moins prononcée des
          bâtiments. Le retour sur investissement est également accessible par
          le bais du retour d’expériences entre les bâtiments fonctionnant avec
          et sans GTB, notamment :
        </p>
        <ul>
          <li>
            <span>.</span> Comparaison des factures d’énergies,
          </li>
          <li>
            <span>.</span>Comparaison des coûts d’exploitation / maintenance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GestionBa;
