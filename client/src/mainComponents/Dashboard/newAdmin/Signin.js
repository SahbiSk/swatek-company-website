import React, { Fragment } from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { signupUser } from "../../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import "../../Login/Login.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(5, "Password must be at least 5 characters long"),
});

const Signin = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: "", email: "", clearance: "", password: "" },
    validationSchema,
  });
  const fields = [
    { name: "name", value: formik.values.name },
    {
      name: "email",
      value: formik.values.email,
    },
    {
      name: "password",
      value: formik.values.password,
    },
    { name: "clearance", value: formik.values.clearance },
  ];

  //api calls

  /**  */

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signupUser(
        fields[0].value,
        fields[1].value,
        fields[2].value,
        fields[3].value
      )
    );
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Signin</h2>
        {fields.map(({ name, value }, i) => (
          <Fragment key={i}>
            <input
              required
              name={name}
              autoFocus={name === "email"}
              className="field"
              placeholder={`Enter ${name} ...`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={value}
              type={name === "password" ? "password" : "text"}
            />{" "}
            {formik.touched[name] && formik.errors[name] && (
              <p className="error">*{formik.errors[name]} </p>
            )}
          </Fragment>
        ))}
        <Button variant="contained" className="submit" type="submit">
          Signin
        </Button>
      </form>
    </div>
  );
};

export default Signin;
