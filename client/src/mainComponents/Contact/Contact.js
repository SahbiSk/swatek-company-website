import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../utils/api";
import "./Contact.css";

const validationSchema = Yup.object({
  nom: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  sujet: Yup.string().required("Sujet is required"),
  message: Yup.string().required("Message isrequired"),
});

const addContact = async ({ name, email, sujet, message }) => {
  const configs = { "Content-Type": "application/json" };
  const body = { name, email, sujet, message };
  try {
    await api.post("/api/v1/contacts/create", body, configs);
  } catch (error) {
    console.log(error.message);
  }
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      sujet: "",
      message: "",
    },
    validationSchema,
  });

  const fields = [
    {
      name: "name",
      value: formik.values.nom,
    },
    {
      name: "email",
      value: formik.values.email,
    },
    {
      name: "sujet",
      value: formik.values.sujet,
    },
    { name: "message", value: formik.values.message },
  ];
  return (
    <div className="form-container">
      <form className="form">
        <h2>Contact Us</h2>
        {fields.map(({ name, value }, i) =>
          name === "message" ? (
            <Fragment key={i}>
              <textarea
                name={name}
                className="message"
                placeholder={`Enter ${name} ...`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={value}
                required
              />
              {formik.touched[name] && formik.errors[name] && (
                <p className="error">*{formik.errors[name]} </p>
              )}
            </Fragment>
          ) : (
            <Fragment key={i}>
              <input
                name={name}
                className="field"
                placeholder={`Enter ${name} ...`}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={value}
                required
              />{" "}
              {formik.touched[name] && formik.errors[name] && (
                <p className="error">*{formik.errors[name]} </p>
              )}
            </Fragment>
          )
        )}
        <Button
          variant="contained"
          className="submit"
          onClick={() => addContact(formik.values)}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
