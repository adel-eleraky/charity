/* eslint-disable no-unused-vars */
/**Returned data for Register user
 * {
    "_id": "65ba33130cec646d08530e63",
    "name": {
        "firstName": "saul",
        "lastName": "momo"
    },
    "email": "saadmu7ammad71171@gmail.com"
}
 */
import React, { useEffect } from "react";
import "./css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../rtk/features/userAuthSlice";
import { registerCharity } from "../rtk/features/charityAuthSlice";

function Register() {
  const [role, setRole] = React.useState("user");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerStatus } = useSelector((store) => store.userAuth);
  const { charity, charityRegisterStatus, charityError } = useSelector(
    (store) => store.charityAuth
  );
  function handleRegister(e) {
    e.preventDefault();
    // some user Data handling
    if (role === "user") {
      const registerData = {
        name: {
          firstName: userName,
          lastName: userName,
        },
        email,
        password,
        gender: "male",
        phone: "01030931139",
        location: { governorate: "Helwan" },
      };
      dispatch(registerUser(registerData));
    } else {
      const registerData = {
        name: userName,
        email,
        password,
        "location[governorate]": "Helwan",
        "contactInfo[email]": email,
        "contactInfo[phone]": "01030931139",
        "contactInfo[websiteUrl]": "www.google.com",
        description: "hello Wrold",
        "charityInfo[registeredNumber]": 123,
        "charityInfo[establishedDate]": "2001-01-01",
        image: selectedFile,
      };
      // console.log(registerData);
      dispatch(registerCharity(registerData));
    }
  }

  useEffect(() => {
    if (registerStatus === "finished") {
      navigate("/account/login");
    }
    console.log("status: ", charityRegisterStatus, charityError);
    console.log("charity", charity);
  }, [registerStatus, navigate, charityRegisterStatus, charityError, charity]);

  return (
    <div className="register-page py-5">
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
              <h2 className="text-center mb-4"> انشاء حساب </h2>
              <form method="post" onSubmit={handleRegister}>
                <label for="exampleFormControlInput1" className="form-label">
                  اسم المستخدم{" "}
                </label>
                <div className="input-group mb-4">
                  <span
                    className="input-group-text  rounded-0 rounded-end"
                    id="basic-addon1"
                  >
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control rounded-0 rounded-start"
                    placeholder=" ادخل اسم المستخدم"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                    type="text"
                    className="form-control rounded-0 rounded-start"
                    placeholder="ادخل كلمة المرور"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    onClick={() => setRole("user")}
                    checked={role === "user"}
                    className="form-check-input ms-2 float-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    انشاء حساب (متبرع)
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    onClick={() => setRole("organization")}
                    checked={role === "organization"}
                    className="form-check-input ms-2 float-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    انشاء حساب كجمعية خيرية
                  </label>
                </div>
                {role === "organization" && (
                  <div className="mb-4">
                    <label htmlFor="formFileLg" className="form-label">
                      مستندات الجمعية
                    </label>
                    <input
                      className="form-control form-control-lg"
                      id="formFileLg"
                      type="file"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                  </div>
                )}
                <button className="btn btn-dark d-block w-50 py-2 mb-4 mx-auto fs-4">
                  {" "}
                  انشاء حساب
                </button>
              </form>
              <h5 className="mb-4 text-center"> انشاء حساب باستخدام</h5>
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
                  to="/account/login"
                  className="text-white d-block text-center mb-3"
                >
                  {" "}
                  لديك حساب ؟
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
