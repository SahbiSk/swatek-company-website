import React, { useState, useEffect } from "react";
import Commentaire from "./Commentaire/Commentaire";
import api from "../../../utils/api";
import "./DashboardSection.css";

const DashboardSection = () => {
  const [contacts, setContacts] = useState("");
  const [commentaires, setCommentaires] = useState("");

  const fetchData = async () => {
    try {
      const contactData = await api.get("/api/v1/contacts/contacts");
      const commentairesData = await api.get(
        "/api/v1/commentaires/commentaires"
      );
      setContacts(contactData.data);
      setCommentaires(commentairesData.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {contacts === "" || commentaires === "" ? (
        "Waiting"
      ) : (
        <div className="admin-commentaires-messages-section">
          <div className="admin-message-section">
            <h3>Messages : </h3>
            <div className="admin-contacts">
              {" "}
              {contacts.map((contact, i) => (
                <Commentaire key={i} {...contact} />
              ))}{" "}
            </div>{" "}
          </div>
          <div className="admin-commentaire-section">
            <h3>Commentaires :</h3>
            <div className="admin-commentaire">
              {commentaires.map((commentaire, i) => (
                <Commentaire key={i} {...commentaire} />
              ))}
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default DashboardSection;
