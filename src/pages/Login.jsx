/* eslint-disable no-unused-vars */

import React from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../rtk/features/user/userAuthSlice";
import { useEffect } from "react";
import AccountActivation from "./AccountActivation";
import Popup from "../components/Popup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { loginCharity } from "../rtk/features/charity/charityAuthSlice";

function Login() {
  const [role, setRole] = React.useState("");

  const { loginStatus, error, registerStatus, user } = useSelector(
    (store) => store.userAuth
  );


  const isVerified = user?.isVerified

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    role: ''
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("ادخل بريدك الالكترونى")
      .email("ادخل بريد الكترونى"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "يجب أن تحتوي كلمة المرور على حروف كبيرة وصغيرة وأرقام ورموز وأن تكون طولها 8 أحرف على الأقل"
      )
      .required("ادخل كلمة السر"),

    role: yup
      .string()
      .required("اختار نوع الحساب")
      .oneOf(["user", "organization"], "نوع الحساب يجب ان يكون متبرع او جمعية"),
  });

  useEffect(
    function () {
      toast.dismiss();

      if (loginStatus === "loading") toast.loading("جارى تسجيل الدخول");
      if (loginStatus === "finished") {
        toast.success("تم تسجيل الدخول بنجاح");

        isVerified ? navigate("/account") : navigate("/account/activate");
      }
      if (loginStatus === "failed") toast.error("حدث خطأ فى الدخول");
    },
    [loginStatus]
  );
  const submitHandler = (values) => {
    if(role === "user"){
      dispatch(loginUser(values));
    }else{
      dispatch(loginCharity(values));
    }
    // dispatch(loginUser(values));

  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center img-column">
            <img
              src={`/images/${role === "user" ? "individual" : "organization"
                }.png`}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="content  w-75 mx-auto py-3 px-4 rounded">
              <h2 className="text-center mb-4">تسجيل الدخول </h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
              >
                {({ values, errors, touched }) => {
                  return (
                    <Form method="post" className="needs-validation" noValidate>
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
                      <label htmlFor="password" className="form-label">
                        كلمة المرور
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
                          placeholder="ادخل كلمة المرور"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback d-block fs-6 fw-bold"
                        />
                      </div>
                      <div className="form-check mb-3">
                        <Field
                          onClick={() => setRole("user")}
                          className={`form-check-input ${touched.role && errors.role && "is-invalid"
                            } ms-2 float-none`}
                          type="radio"
                          name="role"
                          value="user"
                          id="user-role"
                        />
                        <label className="form-check-label" htmlFor="user-role">
                          تسجيل الدخول (متبرع) 
                        </label>
                      </div>
                      <div className="form-check mb-4">
                        <Field
                          onClick={() => setRole("organization")}
                          className={`form-check-input ${touched.role && errors.role && "is-invalid"
                            } ms-2 float-none`}
                          type="radio"
                          name="role"
                          value="organization"
                          id="org-role"
                        />
                        <label className="form-check-label" htmlFor="org-role">
                          تسجيل الدخول (جمعية)
                        </label>
                      </div>
                      <ErrorMessage
                        name="role"
                        component="div"
                        className="invalid-feedback d-block fs-6 mb-4 fw-bold"
                      />
                      <button
                        className="submit-btn btn d-block w-50 py-2 mb-4 mx-auto fs-4"
                        type="submit"
                      >
                        تسجيل الدخول
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div>
                <Link
                  to="/account/register"
                  className="text-dark fs-5 fw-bold d-block text-center mb-3"
                >
                  ليس لديك حساب ؟
                </Link>
                <Link
                  to="/account/forget-password"
                  className="text-dark fs-5 fw-bold d-block text-center mb-3"
                >
                  هل نسيت كلمة السر ؟
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
