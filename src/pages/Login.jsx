/* eslint-disable no-unused-vars */
/**returned data for Login user
 * {
    "_id": "65b3e2f51273b517b477995c",
    "name": {
        "firstName": "saad10",
        "lastName": "muhammad"
    },
    "email": "saadmu7ammad711@gmail.com"
}
 */

import React from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../rtk/features/userAuthSlice";
import { useEffect } from "react";
import AccountActivation from "./AccountActivation";
import Popup from "../components/Popup";

function Login() {
  const [role, setRole] = React.useState("user");
  const [email, setEmail] = React.useState("mohhero4@gmail.com");
  const [password, setPassword] = React.useState("123456");
  const { loginStatus, error, registerStatus, user } = useSelector(
    (store) => store.userAuth
  );
  const isVerified =
    user.msg !=
    "Your Account is not Activated Yet,A Token Was Sent To Your Email.";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    // checking email (empty, wrong fromat)
    // checking password (empty, number of chars < 6)
    if (role === "user") dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    if (registerStatus === "finished") {
      setEmail(user.email);
    }
    if (loginStatus === "finished") {
      if (isVerified) navigate("/account");
    } else {
      console.log(error, user);
    }
  }, [loginStatus, registerStatus, navigate, isVerified, error, user]);
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
            <div className="content w-75 mx-auto">
              <h2 className="text-center mb-4">تسجيل الدخول </h2>
              <form method="post" onSubmit={handleLogin}>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  بريدك الالكترونى
                </label>
                <div className="input-group mb-4">
                  <span
                    className="input-group-text  rounded-0 rounded-end"
                    id="basic-addon1"
                  >
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0 rounded-start"
                    placeholder="ادخل بريدك الالكترونى"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {" "}
                  كلمة المرور{" "}
                </label>
                <div className="input-group mb-4">
                  <span
                    className="input-group-text  rounded-0 rounded-end"
                    id="basic-addon1"
                  >
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control rounded-0 rounded-start"
                    placeholder="كلمة المرور"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    onClick={() => setRole("user")}
                    className="form-check-input ms-2 float-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    تسجيل الدخول كفرد (متبرع)
                  </label>
                </div>
                <div className="form-check mb-5">
                  <input
                    onClick={() => setRole("organization")}
                    className="form-check-input ms-2 float-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    تسجيل الدخول كجمعية خيرية
                  </label>
                </div>
                <button className="btn btn-dark d-block w-50 py-2 mb-4 mx-auto fs-4">
                  {" "}
                  تسجيل الدخول
                </button>
              </form>
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
