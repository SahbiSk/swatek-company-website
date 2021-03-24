import React, { Fragment } from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import { loginUser } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import "./Login.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(5, "Password must be at least 5 characters long"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
  });
  const fields = [
    {
      name: "email",
      value: formik.values.email,
    },
    {
      name: "password",
      value: formik.values.password,
    },
  ];

  //api calls

  /**  */

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(signupUser("user", fields[0].value, fields[1].value,"clearance"));
    dispatch(loginUser(fields[0].value, fields[1].value));
    // dispatch(getSecretContent())
    // dispatch(logoutUser());
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
