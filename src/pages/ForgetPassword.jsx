import React, { useState } from "react";
import "./css/ForgetPassword.css";

function ForgetPassword() {
  const [formStatus, setFormStatus] = useState("notSubmitted");
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("submitted");
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
                  <form action="" method="post" onSubmit={handleSubmit}>
                    <label
                      for="exampleFormControlInput1"
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
                      />
                    </div>
                    <button className="btn d-block m-auto submit-btn fw-bold">
                      ارسل الرابط الى البريد
                    </button>
                  </form>
                </div>
              ) : (
                <div className="form-submitted-content text-center p-5 rounded w-75 m-auto">
                  <h3 className="mb-4">
                    {" "}
                    تم ارسال الرابط الى بريدك الالكترونى
                  </h3>
                  <i className="fa-solid fa-paper-plane sent-icon"></i>
                  <h4 className="mt-4">افحص بريدك الالكترونى الان</h4>
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
