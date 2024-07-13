/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateAccount } from "../rtk/features/user/userAuthSlice";
import { getUserProfile } from "../rtk/features/user/userProfileSlice";
import "./css/AccountActivation.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function AccountActivation() {

  const [loading, setLoading] = useState(true);
  const { token } = useParams()

  console.log(token)
  const { user, error, activateStatus } = useSelector(
    (store) => store.userAuth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // console.log(activateStatus);
  // const initialValues = {
  //   token: "",
  // };

  // const validationSchema = yup.object().shape({
  //   token: yup.string().required("ادخل الرمز"),
  // });

  // const submitHandler = (values) => {
  //   console.log(values);
  //   if (activateStatus === "idle")
  //     toast.loading("جارى تأكيد البريد الالكترونى");
  //   dispatch(activateAccount(values.token));
  // };
  // charityauthSlice (login - register are handled in the login page)
  // 3.activate charity account

  useEffect(() => {
    toast.dismiss();

    if (activateStatus === "idle" && token) {
      toast.loading("جارى تأكيد البريد الالكترونى");
      dispatch(activateAccount(token));
    }

    if (activateStatus === "finished") {
      toast.success("تم تأكيد البريد بنجاح");
      setTimeout(() => {

        navigate("/");
      }, 4000)
    }

    if (activateStatus === "failed")
      toast.error("خطأ فى تأكيد البريد الالكترونى");

  }, [activateStatus]);

  return (
    <div className="account-activation-page py-5 d-flex justify-content-center align-items-center">
      <div className="content rounded p-4 fw-bold text-center">
        {token ?

          <>
            <h1>جارى تأكيد البريد الالكترونى </h1>
            <BeatLoader
              color={"black"}
              className="d-block mt-3"
              loading={loading}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </>
          :
          <>
            <h1 className="mb-3">يجب تأكيد البريد الالكترونى</h1>
            <h3>تم ارسال رابط الى بريدك الالكترونى </h3>
          </>

        }
      </div>
    </div>
  );
}

export default AccountActivation;
