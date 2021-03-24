import React, { useState, useEffect } from "react";
import "./Produits.css";
import api from "../../utils/api";

const Produits = () => {
  const [produits, setProduits] = useState("");
  const fetchProduits = async () => {
    const res = await api.get("/api/v1/produit/all");
    setProduits(res.data);
  };
  useEffect(() => {
    fetchProduits();
  }, []);
  /**
  const produits = [
    {
      icon: energy,
      name: "Energy Care System (BMS)",
      description: [
        "Connecter vos bâtiments et les rendre « Smart ».",
        "Augmenter le confort et la sécurité des occupants.",
        "Améliorer l’efficacité énergétique.",
        "Gestion plus rationnelle et plus efficace des bâtiments(le pouvoir de décision basés par des historiques et des mesures).",
      ],
    },
    {
      icon: update,
      name:
        "ISS : SWATEK Vous donne les outils pour améliorer vos performances et vos résultats.",
      description: [
        "Gestion de tous les services de votre école.",
        "Gestion des élèves et des enseignants.",
        "Gestion des notes et des bulletins.",
        "Gestion des paies et des finances.",
      ],
    },
  ]; */
  return (
    <div className="produits-container">
      <h1>Nos Produits :</h1>
      <div className="produits">
        {produits === "" ? (
          <h3>waiting...</h3>
        ) : (
          <div>
            {produits.map((prod, i) => (
              <div key={i} className="produit-item">
                <img
                  src={`http://localhost:5000/${prod.icon}`}
                  alt={prod.name}
                />
                <div className="produit-description">
                  <h2>{prod.name}</h2>
                  <ul>
                    {prod.description.map((desc, j) => (
                      <li key={j}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Produits;
