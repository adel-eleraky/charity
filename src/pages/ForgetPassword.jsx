/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./css/ForgetPassword.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../rtk/features/userAuthSlice";
import ConfirmResetPass from "../components/ConfirmResetPass";

function ForgetPassword() {
  const [formStatus, setFormStatus] = useState("notSubmitted");
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("ادخل بريدك الالكترونى")
      .email("ادخل بريد الكترونى"),
  });

  const submitHandler = (values) => {
    console.log(values);
    setFormStatus("submitted");
    toast.promise(
      // implement forget password function
      dispatch(forgotPassword(values.email)),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 2000);
      }),
      {
        pending: "جاري التحقق...",
        success: "تم التحقق بنجاح",
        error: "فشل التحقق",
      }
    );
  };
  return (
    <>
      <div className="forget-password-page py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-xl-6">
              {formStatus === "notSubmitted" ? (
                <div className="forget-password-form p-5 rounded w-75 m-auto">
                  <h3 className="text-center mb-4">نسيت كلمة السر ؟</h3>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                  >
                    {({ values, errors, touched }) => {
                      return (
                        <Form
                          method="post"
                          className="needs-validation"
                          noValidate
                        >
                          <label htmlFor="email" className="form-label">
                            بريدك الالكترونى
                          </label>
                          <div className="input-group has-validation mb-4">
                            <span
                              className="input-group-text  rounded-0 rounded-end"
                              id="basic-addon1"
                            >
                              <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              className={`form-control ${
                                touched.email && errors.email && "is-invalid"
                              } rounded-0 rounded-start`}
                              placeholder="ادخل بريدك الالكترونى"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback d-block fs-6 fw-bold"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn d-block m-auto submit-btn fw-bold"
                          >
                            ارسل الرابط الى البريد
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              ) : (
                <div className="form-submitted-content text-center p-5 rounded w-75 m-auto">
                  <h3 className="mb-4">
                    {" "}
                    تم ارسال الرابط الى بريدك الالكترونى
                  </h3>
                  <i className="fa-solid fa-paper-plane sent-icon" style={{ color: "#EEE"}}></i>
                  <h4 className="mt-4">افحص بريدك الالكترونى الان</h4>
                  <ConfirmResetPass />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
