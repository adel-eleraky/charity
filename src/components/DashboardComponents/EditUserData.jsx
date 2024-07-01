import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./EditUserData.module.css";
import * as yup from "yup";
import { Profiler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserProfile,
  getUserProfile,
} from "../../rtk/features/user/userProfileSlice";
import Loader from "../common/Loader";
import Error from "../common/Error";
import SubmitButton from "../common/SubmitButton";
import { useNavigate } from "react-router-dom";

//todo: preview errors and success masseges (after submit)
function EditUserData() {
  // JUST FETCH PROFILE HERE AS TEMP BUT IT MUST BE FETCHED BEFORE !IMP
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userProfile, getUserProfileStatus, error, isEmailVerified } =
    useSelector((store) => store.userProfile);
  //* if not verfied go to activate
  if (!isEmailVerified) navigate("/account/activate");
  useEffect(() => {
    if (
      //* this will refetch untill get data
      Object.keys(userProfile).length === 0 &&
      getUserProfileStatus !== "loading"
    )
      dispatch(getUserProfile());
  }, [dispatch, userProfile, getUserProfileStatus]);

  // error messages
  const validationSchema = yup.object().shape({
    username: yup.string().required("ادخل الاسم"),
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("ادخل الايميل"),
    address: yup.string().required("ادخل العنوان"),
  });

  if (getUserProfileStatus === "loading") return <Loader />;
  if (getUserProfileStatus === "failed") return <Error msg={error} />;

  const initialValues = {
    username: userProfile?.name?.firstName || "",
    email: userProfile.email || "",
    address: userProfile?.userLocation?.governorate || "",
  };

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    // make object of modified data only
    const editObject = {};
    if (values.username !== userProfile.name["firstName"])
      editObject.name = { firstName: values.username };
    if (values.email !== userProfile.email) editObject.email = values.email;
    if (values.address !== userProfile.userLocation["governorate"])
      editObject.userLocation = { governorate: values.address };

    dispatch(editUserProfile(editObject)).then(() => {
      setSubmitting(false);
      // * initialValues because they are based on userProfile
      // * not values so when error happens still display the right stored value
      resetForm({ initialValues });
    });
  };
  // status is idle or finished
  return (
    <div className={styles["edit-profile"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        enableReinitialize={true}
      >
        {({ values, errors, touched, isSubmitting, dirty }) => {
          return (
            <Form method="post" className="needs-validation" noValidate>
              <div className={styles.image}>
                <img src="/images/avatar.jpeg" alt="" />
                <img src="/images/change-image.svg" alt="" />
              </div>
              <div className={styles.group}>
                <div className={styles["input-box"]}>
                  <label htmlFor="username" className={styles.label}>
                    الاسم
                  </label>
                  <div>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className={`form-control ${
                        touched.username && errors.username && "is-invalid"
                      } ${styles["input-field"]} `}
                      placeholder="الاسم"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
                <div className={styles["input-box"]}>
                  <label htmlFor="email" className={styles.label}>
                    الايميل
                  </label>
                  <div>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className={`form-control ${
                        touched.email && errors.email && "is-invalid"
                      } ${styles["input-field"]} `}
                      placeholder="الايميل"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
                <div className={styles["input-box"]}>
                  <label htmlFor="address" className={styles.label}>
                    العنوان
                  </label>
                  <div>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      className={`form-control ${
                        touched.address && errors.address && "is-invalid"
                      }  ${styles["input-field"]}`}
                      placeholder="العنوان"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
              </div>
              <div className={styles["button-container"]}>
                <SubmitButton
                  isDisabled={isSubmitting || !dirty}
                  isLoading={isSubmitting}
                  text={"حفظ التعديلات"}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditUserData;
