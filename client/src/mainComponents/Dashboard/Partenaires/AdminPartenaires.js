import React, { useEffect, useState } from "react";
import api from "../../../utils/api";
import PartenaireItem from "./PartenaireItem/PartenaireItem";
import "./AdminPartenaire.css";
import AddPartenaire from "./PartenaireItem/addPartenaire/AddPartenaire";

const Partenaires = () => {
  const [partenaires, setPartenaires] = useState([]);
  const [visible, setVisible] = useState(false);
  const fetchPartenaires = async () => {
    const res = await api.get("/api/v1/partenaire/all");
    setPartenaires(res.data.data);
  };
  useEffect(() => {
    fetchPartenaires();
  }, []);
  console.log(partenaires);

  return (
    <div className="admin-partenaire">
      {" "}
      <button
        className="admin-partenaire__button"
        onClick={(e) => setVisible(!visible)}
      >
        Ajouter partenaire
      </button>
      {visible && <AddPartenaire fetchPartenaires={fetchPartenaires} />}
      <div>
        {partenaires.map((item, i) => (
          <PartenaireItem {...item} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Partenaires;
