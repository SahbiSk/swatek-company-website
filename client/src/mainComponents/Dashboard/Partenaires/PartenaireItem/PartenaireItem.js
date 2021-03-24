import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import api from "../../../../utils/api";
import "./PartenaireItem.css";

const styles = (theme) => ({
  icon: {
    color: "red",
    cursor: "pointer",
  },
});

const deletePartenaire = async (id) => {
  try {
    await api.delete(`/api/v1/partenaire/delete/${id}`);
    window.location.reload();
  } catch (error) {
    console.log(error.message);
  }
};

const PartenaireItem = ({ _id, description, icon, classes }) => {
  return (
    <a className="partenaire-item-admin">
      <img src={`http://localhost:5000/${icon}`} alt="" />
      <div className="inner-item">
        <p> {description} </p>
      </div>
      <DeleteIcon
        className={classes.icon}
        onClick={() => {
          deletePartenaire(_id);
        }}
      />
    </a>
  );
};

export default withStyles(styles)(PartenaireItem);
