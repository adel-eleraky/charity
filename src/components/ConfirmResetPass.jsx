/* eslint-disable no-unused-vars */
//alert this component is only for testing and will not be in the production
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmResetPass,
  forgotPassword,
} from "../rtk/features/userAuthSlice";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import "./css/ConfirmResetPass.css"
import { toast } from "react-toastify";

function ConfirmResetPass() {

  const { error , confirmResetPassStatus } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    token: "",
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    token: yup
      .string()
      .required("ادخل الرمز"),
    email: yup
      .string()
      .required("ادخل بريدك الالكترونى")
      .email("ادخل بريد الكترونى"),
    password: yup
      .string()
      .required("ادخل كلمة السر"),
  });

  const submitHandler = (values) => {

    dispatch(confirmResetPass(values))
  }

  useEffect(() => {
    toast.dismiss();

      if (confirmResetPassStatus === "loading") toast.loading("جارى تغيير كلمة المرور");
      if (confirmResetPassStatus === "finished") {
        toast.success("تم تغيير كلمة المرور بنجاح");
        setTimeout(() => {
          navigate("/account/login");
        }, 3000);
      }
      if (confirmResetPassStatus === "failed") toast.error("حدث خطأ في تغيير كلمة المرور");
  }, [confirmResetPassStatus])

  return (

    <div className="confirm-reset-pass py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-xl-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
          >

            {({ values, errors, touched }) => {
              return (
                <Form method="post" className="needs-validation reset-password-form p-2 rounded w-75 m-auto" noValidate>
                  <p className="text-center fw-bold">تغيير كلمة المرور</p>
                  <label htmlFor="email" className="form-label">
                    الرمز
                  </label>
                  <div className="input-group has-validation mb-4">
                    <span
                      className="input-group-text  rounded-0 rounded-end"
                      id="basic-addon1"
                    >
                      <i className="fa-solid fa-key"></i>
                    </span>
                    <Field
                      type="text"
                      id="token"
                      name="token"
                      className={`form-control ${touched.token && errors.token && "is-invalid"
                        } rounded-0 rounded-start`}
                      placeholder="ادخل الرمز "
                      aria-label="token"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="token"
                      component="div"
                      className="invalid-feedback d-block fs-6 fw-bold"
                    />
                  </div>
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
                      className={`form-control ${touched.email && errors.email && "is-invalid"
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
                  <label htmlFor="email" className="form-label">
                    كلمة المرور الجديدة 
                  </label>
                  <div className="input-group has-validation mb-4">
                    <span
                      className="input-group-text  rounded-0 rounded-end"
                      id="basic-addon1"
                    >
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control ${touched.password && errors.password && "is-invalid"
                        } rounded-0 rounded-start`}
                      placeholder="ادخل كلمة المرور الجديدة"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback d-block fs-6 fw-bold"
                    />
                  </div>
                  
                  <button type="submit" className="btn d-block m-auto submit-btn">حفظ كلمة المرور</button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ConfirmResetPass;
