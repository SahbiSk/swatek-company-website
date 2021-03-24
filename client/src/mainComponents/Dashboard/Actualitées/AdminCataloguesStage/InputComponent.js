import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import AddCircleIcon from "@material-ui/icons/AddCircle";

//input component
const styles = (theme) => ({
  button: {
    marginTop: "20px",
    background: "#16a085",
    color: "white",
    border: "1px solid #ffffff00",
    "&:hover": {
      background: "white",
      color: "#16a085",
      borderColor: " #16a085",
    },
  },
  add: {
    color: "#16a085",
    left: "50%",
  },
  profil: {
    fontSize: "18px",
  },
  container: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    padding: "1vh",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    border: "1px solid rgba(0,0,0,0.5)",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  addSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
  },
  title: {
    color: "#16a085",
    fontWeight: "400",
  },
  requirements: {
    display: "flex",
    padding: "auto",
    flexDirection: "column",
  },
});

const InputComponent = ({ classes, addStage, updateStage, id }) => {
  //api calls

  const [profil, setProfil] = useState([""]);

  const formik = useFormik({
    initialValues: {
      title: "",
      reference: "",
      description: "",
      mots_clefs: "",
    },
  });
  const fields = [
    { name: "title", value: formik.values.title },
    { name: "reference", value: formik.values.reference },
    { name: "description", value: formik.values.description },
    { name: "mots_clefs", value: formik.values.mots_clefs },
  ];

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Enter your data below : </h3>
      <form className={classes.formContainer}>
        {fields.map(({ name, value }, key) => (
          <TextField
            key={key}
            value={value}
            name={name}
            placeholder={`enter ${name} here`}
            onChange={formik.handleChange}
          />
        ))}
        <div>
          <div className={classes.addSection}>
            {" "}
            <span className={classes.profil}>profil :</span>{" "}
            <AddCircleIcon
              onClick={() => setProfil([...profil, ""])}
              className={classes.add}
            />
          </div>
          <div className={classes.requirements}>
            {profil.map((item, key) => (
              <TextField
                value={item}
                placeholder="enter requirements here"
                key={key}
                onChange={(e) => {
                  let exProfil = [...profil];
                  exProfil[key] = e.target.value;
                  setProfil([...exProfil]);
                }}
              />
            ))}{" "}
          </div>
        </div>
        <Button
          onClick={() => {
            addStage
              ? addStage(formik, profil)
              : updateStage(formik, profil, id);
          }}
          className={`${classes.button}`}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(InputComponent);
