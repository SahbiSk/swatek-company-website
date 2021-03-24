import React, { useState, useEffect } from "react";
import api from "../../../../../utils/api";
import "./AddPartenaire.css";

const AddPartenaire = ({ fetchPartenaires }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [partenaire, setPartenaire] = useState({
    link: "",
    description: "",
  });
  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const addPartenaire = async () => {
    try {
      const formData = new FormData();
      formData.append("link", partenaire.link);
      formData.append("description", partenaire.description);
      formData.append("image", file);

      const res = await api.post("/api/v1/partenaire/add", formData);
      fetchPartenaires();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="add-item-partenaire">
      <div className="add-item-partenaire__fields">
        {" "}
        {Object.keys(partenaire).map((item, i) =>
          item !== "description" ? (
            <input
              className="input"
              key={i}
              name={item}
              style={{ minHeight: "50px" }}
              placeholder={`enter ${item}`}
              value={partenaire[item]}
              onChange={(e) =>
                setPartenaire({
                  ...partenaire,
                  [e.target.name]: e.target.value,
                })
              }
            />
          ) : (
            <textarea
              className="input"
              style={{ minHeight: "80px" }}
              key={i}
              name={item}
              placeholder={`enter ${item}`}
              value={partenaire[item]}
              onChange={(e) =>
                setPartenaire({
                  ...partenaire,
                  [e.target.name]: e.target.value,
                })
              }
            />
          )
        )}{" "}
      </div>{" "}
      <div className="validate-container">
        {" "}
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          className="add-item-partenaire__button"
          onClick={() => addPartenaire()}
        >
          {" "}
          upload
        </button>
      </div>
    </div>
  );
};

export default AddPartenaire;
