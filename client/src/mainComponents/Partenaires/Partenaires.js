import React, { useState } from "react";
import api from "../../utils/api";
import "./Partenaires.css";

const Partenaires = () => {
  const [state, setState] = useState("");
  React.useEffect(() => {
    const fetchPartenaires = async () => {
      const res = await api.get("/api/v1/partenaire/all");
      setState(res.data.data);
    };
    fetchPartenaires();
  }, []);
  return state === "" ? (
    <div />
  ) : (
    <div className="partenaires-container">
      <h1>Nos Partenaires :</h1>
      {state.map((item, i) => (
        <a href={item.link} className="partenaires-item" key={i}>
          <img
            className="partenaire-icon"
            src={`http://localhost:5000/${item.icon}`}
            alt={item.link}
          />
          <p>{item.description} </p>
        </a>
      ))}
    </div>
  );
};

export default Partenaires;
