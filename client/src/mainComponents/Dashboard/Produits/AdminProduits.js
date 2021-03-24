import React, { useState, useEffect } from "react";
import AddProduit from "./AddProduit";
import ProduitItem from "./ProduitItem.js";
import api from "../../../utils/api";

const AdminProduits = () => {
  const [partenaires, setPartenaires] = useState([]);
  const [visible, setVisible] = useState(false);
  const fetchProduits = async () => {
    const res = await api.get("/api/v1/produit/all");
    setPartenaires(res.data);
  };
  useEffect(() => {
    fetchProduits();
  }, []);

  return (
    <div className="admin-partenaire">
      {" "}
      <button
        className="admin-partenaire__button"
        onClick={(e) => setVisible(!visible)}
      >
        Ajouter produit
      </button>
      {visible && <AddProduit fetchProduits={fetchProduits} />}
      <div>
        {partenaires.map((item, i) => (
          <ProduitItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AdminProduits;
