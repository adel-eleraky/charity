import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./EditCharityData.module.css";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../common/Loader";
import Error from "../common/Error";
import SubmitButton from "../common/SubmitButton";
import { useNavigate } from "react-router-dom";
import {
  editCharityProfile,
  editCharityProfileImg,
  getCharityProfile,
} from "../../rtk/features/charity/charityProfileSlice";
import ProfileImageEdit from "../common/ProfileImageEdit";

//todo: preview errors and success masseges (after submit)
//todo: for adding new attributes:
//todo             1. don't do anything in the slice 2.update initialValues , formik field and error msg, yup, submit Object
function EditCharityData() {
  // JUST FETCH PROFILE HERE AS TEMP BUT IT MUST BE FETCHED BEFORE !IMP
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    charityProfile,
    getCharityProfileStatus,
    isEmailVerified,
    error,
    editCharityImgStatus,
  } = useSelector((store) => store.charityProfile);
  //* if not verfied go to activate
  if (!isEmailVerified) navigate("/account/activate");
  useEffect(() => {
    if (
      Object.keys(charityProfile).length === 0 &&
      getCharityProfileStatus !== "loading"
    )
      dispatch(getCharityProfile());
  }, [dispatch, charityProfile, getCharityProfileStatus]);

  // error messages
  const validationSchema = yup.object().shape({
    username: yup.string().required("ادخل الاسم"),
    email: yup
      .string()
      .email("البريد الإلكتروني غير صالح")
      .required("ادخل الايميل"),
    address: yup.string().required("ادخل العنوان"),
  });

  if (getCharityProfileStatus === "loading") return <Loader />;
  if (getCharityProfileStatus === "failed") return <Error msg={error} />;

  // !for the idle state that will be in less ms you should insure that every thing generate no error
  // ! deal with charityProfile as empty object
  const initialValues = {
    username: charityProfile?.name ?? "",
    email: charityProfile?.email ?? "",
    address: charityProfile?.charityLocation
      ? charityProfile?.charityLocation[
          charityProfile.charityLocation.length - 1
        ].governorate
      : "",
  };

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    // make object of modified data only
    const editObject = {};
    if (values.username !== charityProfile.name)
      editObject.name = values.username;
    if (values.email !== charityProfile.email) editObject.email = values.email;
    if (
      values.address !==
      charityProfile.charityLocation[charityProfile.charityLocation.length - 1][
        "governorate"
      ]
    )
      editObject.location = { governorate: values.address };
    console.log(editObject);

    dispatch(editCharityProfile(editObject))
      // * you always handle errors so the returned promise will always be fullfilled
      .then(() => {
        setSubmitting(false);
        resetForm({ initialValues });
      });
  };
  // status is idle or finished
  return (
    <div className={styles["edit-profile"]}>
      <ProfileImageEdit
        type="charity"
        currentValue={{ image: charityProfile.image }}
        updateProfileImageStatus={editCharityImgStatus}
        error={error}
        updateProfileImage={editCharityProfileImg}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        enableReinitialize={true}
      >
        {({ values, errors, touched, isSubmitting, dirty }) => {
          return (
            <Form method="post" className="needs-validation" noValidate>
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

export default EditCharityData;
