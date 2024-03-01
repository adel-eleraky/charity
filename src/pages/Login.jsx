/* eslint-disable no-unused-vars */

import React from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../rtk/features/userAuthSlice";
import { useEffect } from "react";
import AccountActivation from "./AccountActivation";
import Popup from "../components/Popup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

function Login() {
  const [role, setRole] = React.useState("user");
  // const [email, setEmail] = React.useState("mohhero4@gmail.com");
  // const [password, setPassword] = React.useState("123456");
  const { loginStatus, error, registerStatus, user } = useSelector(
    (store) => store.userAuth
  );

  console.log("user", user);
  console.log("error", error);
  console.log("loginStatus", loginStatus);
  console.log("registerStatus", registerStatus);
  const isVerified =
    user.msg !=
    "Your Account is not Activated Yet,A Token Was Sent To Your Email.";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // function handleLogin(e) {
  //     e.preventDefault();
  //     // checking email (empty, wrong fromat)
  //     // checking password (empty, number of chars < 6)
  //     if (role === "user") dispatch(loginUser({ email, password }));
  // }

  // useEffect(() => {
  //     if (registerStatus === "finished") {
  //         setEmail(user.email);
  //     }
  //     if (loginStatus === "finished") {
  //         if (isVerified) navigate("/account");
  //     } else {
  //         console.log(error, user);
  //     }
  // }, [loginStatus, registerStatus, navigate, isVerified, error, user]);

  const initialValues = {
    email: "",
    password: "",
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
  });

  useEffect(
    function () {
      toast.dismiss();
      if (loginStatus === "loading") toast.loading("جارى تسجيل الدخول");
      if (loginStatus === "finished") {
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/user-dashboard");
      }
      if (loginStatus === "failed") toast.error("حدث خطأ فى الدخول");
    },
    [loginStatus, navigate]
  );
  const submitHandler = (values) => {
    dispatch(loginUser(values));

    // toast.promise(dispatch(loginUser(values)), {
    //   pending: "جارى تسجيل الدخول",
    //   success: "تم تسجيل الدخول بنجاح",
    //   error: "حدث خطأ فى الدخول",
    // });
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-6 text-center img-column">
            <img
              src={`/images/${
                role === "user" ? "individual" : "organization"
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
                          className="invalid-feedback d-block fs-6"
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
                          className={`form-control ${
                            touched.password && errors.password && "is-invalid"
                          } rounded-0 rounded-start`}
                          placeholder="ادخل كلمة المرور"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
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
              <Popup isOpen={!isVerified}>
                <AccountActivation />
              </Popup>
              <h5 className="mb-4 text-center">او سجل الدخول باستخدام </h5>
              <div className="social-icons d-flex gap-15 justify-content-center mb-4">
                <div className="facebook-icon bg-white text-dark py-1 px-4 rounded">
                  <img
                    src="/images/facebook_icon.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="google-icon bg-white text-dark py-1 px-4 rounded">
                  <img
                    src="/images/google_icon.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="apple-icon bg-white text-dark py-1 px-4 rounded">
                  <img
                    src="/images/apple_icon.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div>
                <Link
                  to="/account/register"
                  className="text-white d-block text-center mb-3"
                >
                  ليس لديك حساب ؟
                </Link>
                <Link
                  to="/account/forget-password"
                  className="text-white d-block text-center mb-3"
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
