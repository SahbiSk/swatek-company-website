import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import api from "../../../../utils/api";
import InputComponent from "./InputComponent";

const styles = () => ({
  button: {
    background: "#16a085",
    color: "white",
    border: "1px solid #ffffff00",
    "&:hover": {
      background: "white",
      color: "#16a085",
      borderColor: " #16a085",
    },
  },
  data: {
    padding: "1vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
    justifyContent: "space-around",
  },
  titlesData: {
    fontWeight: "400",
  },
  stageItem: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    padding: "1vh",
    maxWidth: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
  },
  cruds: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1vh",
  },
  titles: { color: "#16a085", fontSize: "18px", fontWeight: "bold" },
});

const deleteStage = async (id) => {
  const configs = { headers: { "Content-Type": "application/json" } };
  try {
    const res = await api.delete(`/api/v1/stages/deleteStage/${id}`, configs);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

const updateStage = async (formik, profil, id) => {
  const { title, reference, description, mots_clefs } = formik.values;
  const body = { title, reference, description, mots_clefs, profil };
  const configs = { headers: { "Content-Type": "application/json" } };
  console.log("updateStage");
  try {
    const res = await api.patch(
      `/api/v1/stages/updateStage/${id}`,
      body,
      configs
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

const StageItem = ({
  title,
  reference,
  description,
  _id,
  mots_clefs,
  profil,
  classes,
}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <React.Fragment>
      {visible && (
        <InputComponent
          updateStage={updateStage}
          id={_id}
        />
      )}
      <div className={`${classes.stageItem}`}>
        <div className={`${classes.cruds}`}>
          <Button
            onClick={() => {
              deleteStage(_id);
              window.location.reload();
            }}
            className={`${classes.button}`}
          >
            delete
          </Button>
          <Button
            onClick={() => setVisible(!visible)}
            className={`${classes.button}`}
          >
            modify
          </Button>
        </div>
        <div className={`${classes.data}`}>
          {" "}
          <h4 className={`${classes.titlesData}`}>
            <span className={`${classes.titles}`}>title:</span> {title}{" "}
          </h4>
          <br />
          <h4 className={`${classes.titlesData}`}>
            <span className={`${classes.titles}`}>reference :</span> {reference}{" "}
          </h4>
          <br />
          <h4 className={`${classes.titlesData}`}>
            <span className={`${classes.titles}`}>description :</span>{" "}
            {description}{" "}
          </h4>
          <br />
          <h4 className={`${classes.titlesData}`}>
            <span className={`${classes.titles}`}>mots_clefs :</span>
            {mots_clefs}{" "}
          </h4>
          <br />
          <ul>
            <h4 className={`${classes.titles}`}>profil:</h4>
            {profil.map((pro, key) => (
              <li key={key}>{pro} </li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(StageItem);
