import React, { Fragment } from "react";
import "./CommentSection.css";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../utils/api";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  comment: Yup.string().required("Comment is required"),
});

const CommentSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema,
  });
  const fields = [
    {
      name: "name",
      value: formik.values.name,
    },
    {
      name: "email",
      value: formik.values.email,
    },
  ];

  const addCommentaire = async ({ name, email, comment }) => {
    const configs = { "Content-Type": "application/json" };
    const body = { name, email, comment };

    try {
      await api.post("/api/v1/commentaires/create", body, configs);
      alert("message envoyé");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="comment-section">
      <h3>Laissez un commentaire</h3>
      <p>Votre adresse de commentrie ne sera pas publiée.</p>
      <form className="comment-form">
        {" "}
        <div className="all-fields">
          <div className="fields">
            {fields.map(({ name, value }, i) => (
              <Fragment key={i}>
                <TextField
                  className="text-field"
                  variant="outlined"
                  name={name}
                  label={name}
                  placeholder={`Enter ${name} ...`}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={value}
                  required
                  type={name}
                />{" "}
                {formik.touched[name] && formik.errors[name] && (
                  <p className="error">*{formik.errors[name]} </p>
                )}
              </Fragment>
            ))}
          </div>
          <div className="text-area">
            <TextField
              className="area-field"
              multiline
              rows="6"
              label="comment"
              variant="outlined"
              name={"comment"}
              placeholder={`Enter comment ...`}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.comment}
              required
            />{" "}
            {formik.touched.comment && formik.errors.comment && (
              <p className="error">*{formik.errors.comment} </p>
            )}
          </div>
        </div>
        <Button
          onClick={() => addCommentaire(formik.values)}
          className="send submit"
        >
          VALIDER
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
