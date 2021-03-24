import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import api from "../../../utils/api";

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

const AddProduit = ({ classes, fetchProduits }) => {
  //api calls
  const addProduit = async (name, description, icon) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", icon);

      const res = await api.post("/api/v1/produit/create", formData);
      // fetchProduit();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [profil, setProfil] = useState([""]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });
  const fields = [{ name: "name", value: formik.values.title }];

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
            <span className={classes.profil}>description :</span>{" "}
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
          <div className="validate-container">
            {" "}
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
        <Button
          onClick={() => {
            addProduit(formik.values.name, profil, file);
            fetchProduits();
          }}
          className={`${classes.button}`}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(AddProduit);
