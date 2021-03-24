import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import api from "../../../utils/api";

const styles = (theme) => ({
  icon: {
    color: "red",
    cursor: "pointer",
  },
});

const deleteProduit = async (id) => {
  try {
    await api.delete(`/api/v1/produit/delete/${id}`);
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

const ProduitItem = ({ _id, name, description, icon, classes }) => {
  return (
    <a className="partenaire-item-admin">
      <img src={`http://localhost:5000/${icon}`} alt="" />
      <div className="inner-item">
        <h3>{name} </h3>
        <ul
          style={{
            display: "flex !important",
            flexDirection: "column !important",
          }}
        >
          {description.map((item, i) => (
            <li key={i}>{item} </li>
          ))}{" "}
        </ul>
      </div>
      <DeleteIcon
        className={classes.icon}
        onClick={() => {
          deleteProduit(_id);
        }}
      />
    </a>
  );
};

export default withStyles(styles)(ProduitItem);
