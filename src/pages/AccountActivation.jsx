/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../rtk/features/user/userAuthSlice";
import { getUserProfile } from "../rtk/features/user/userProfileSlice";
import "./css/AccountActivation.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AccountActivation() {
  // const [token, setToken] = useState("");
  const { user, error, activateStatus } = useSelector(
    (store) => store.userAuth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function handleVerify(e) {
  //   e.preventDefault();
  //   if (!token) return;
  //   console.log({ token });
  //   dispatch(activateAccount(token));
  // }

  console.log(activateStatus);
  const initialValues = {
    token: "",
  };

  const validationSchema = yup.object().shape({
    token: yup.string().required("ادخل الرمز"),
  });

  const submitHandler = (values) => {
    console.log(values);
    if (activateStatus === "idle")
      toast.loading("جارى تأكيد البريد الالكترونى");
    dispatch(activateAccount(values.token));
  };
  // charityauthSlice (login - register are handled in the login page)
  // 3.activate charity account

  useEffect(() => {
    toast.dismiss();

    if (activateStatus === "finished") {
      toast.success("تم تأكيد البريد بنجاح");
      navigate("/account");
    }
    if (activateStatus === "failed")
      toast.error("خطأ فى تأكيد البريد الالكترونى");
  }, [activateStatus]);

  return (
    <div className="account-activation-page py-5 d-flex justify-content-center align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched }) => {
          return (
            <Form
              action="post"
              className="needs-validation p-4 rounded"
              noValidate
            >
              <p className="text-center fw-bold fs-4">
                {" "}
                انسخ ارمز المرسل الى بريدك الالكترونى{" "}
              </p>
              <div className="input-group has-validation mb-4">
                <span
                  className="input-group-text  rounded-0 rounded-end"
                  id="basic-addon1"
                >
                  <i className="fa-solid fa-key"></i>
                </span>
                <Field
                  type="text"
                  placeholder="ادخل الرمز"
                  className={`form-control ${
                    touched.token && errors.token && "is-invalid"
                  } rounded-0 rounded-start`}
                  name="token"
                />
                <ErrorMessage
                  name="token"
                  component="div"
                  className="invalid-feedback d-block fs-6 fw-bold"
                />
              </div>
              <button
                type="submit"
                className="btn d-block w-75 py-2 mt-3 mx-auto fs-4"
                style={{ backgroundColor: "#927238", color: "white" }}
              >
                {" "}
                تأكيد البريد الاكترونى{" "}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AccountActivation;
