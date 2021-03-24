import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Commentaire.css";
import api from "../../../../utils/api";

const styles = (theme) => ({
  icon: {
    position: "relative",
    color: "red",
    width: "50px",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    background: "white",
    margin: "2vh",
    width: "80%",
    height: "200px",
    padding: "2vh",
  },
});

const deleteContact = async (id) => {
  try {
    await api.delete(`/api/v1/contacts/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCommentaire = async (id) => {
  try {
    await api.delete(`/api/v1/commentaires/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

const Commentaire = ({
  _id,
  name,
  email,
  message,
  sujet,
  classes,
  fetchData,
}) => {
  return (
    <div className={`${classes.container} main-container-message`}>
      <div className="commentaire">
        <h4>
          <span>name:</span> {name}{" "}
        </h4>
        <h4>
          <span>email :</span> {email}{" "}
        </h4>
        {sujet && (
          <h4>
            <span>sujet:</span>
            {sujet}{" "}
          </h4>
        )}
        <h4>
          <span>message:</span>{" "}
        </h4>
        <p> {message}</p>
      </div>{" "}
      <DeleteIcon
        className={classes.icon}
        onClick={() => {
          sujet ? deleteContact(_id) : deleteCommentaire(_id);
          window.location.reload();
        }}
      />
    </div>
  );
};

export default withStyles(styles)(Commentaire);
