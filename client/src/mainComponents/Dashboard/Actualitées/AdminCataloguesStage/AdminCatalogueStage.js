import React, { useEffect, useState } from "react";
import "./AdminCatalogueStage.css";
import api from "../../../../utils/api";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import InputComponent from "./InputComponent";
import StageItem from "./StageItem";

//styles
const styles = (theme) => ({
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
  edit: { position: "absolute", top: "15%", right: "4%" },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
const addStage = async (formik, profil) => {
  const { title, reference, description, mots_clefs } = formik.values;
  const body = { title, reference, description, mots_clefs, profil };
  const configs = { headers: { "Content-Type": "application/json" } };
  try {
    const res = await api.post("/api/v1/stages/addStage", body, configs);
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

const AdminCatalogueStage = (props) => {
  //styles
  const { classes } = props;

  const [items, setItems] = useState("");
  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/api/v1/stages/getAllStages");
      setItems([...data.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return items === "" ? (
    <div>FETCHING DATA</div>
  ) : (
    <div className={`${classes.container}`}>
      {visible && <InputComponent addStage={addStage} />}
      <div>
        {items.map((item, i) => (
          <StageItem {...item} key={i} />
        ))}{" "}
      </div>
      <Fab
        onClick={() => setVisible(!visible)}
        className={`${classes.edit}`}
        aria-label="Add"
        color="secondary"
      >
        <EditIcon />
      </Fab>
    </div>
  );
};

export default withStyles(styles)(AdminCatalogueStage);
