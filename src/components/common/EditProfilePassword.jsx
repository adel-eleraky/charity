import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./EditProfilePassword.module.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordByUser } from "../../rtk/features/user/userProfileSlice";
import SubmitButton from "./SubmitButton";
import useEditPwdReducer from "../../hooks/useEditPwdReducer";

const initialValues = {
  oldPwd: "",
  newPwd: "",
  confirmPwd: "",
};

//*common for all user and charity
//todo: preview errors and success messages (after submit)
function EditProfilePassword({ type = "user" }) {
  console.log(type);
  // ? it is best practice to do it ?  -> they are just 2;
  const [changePassword, changePasswordStatus, error] = useEditPwdReducer(type);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    oldPwd: yup.string().required("ادخل كلمة السر القديمة"),
    newPwd: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "يجب أن تحتوي كلمة المرور على حروف كبيرة وصغيرة وأرقام ورموز وأن تكون طولها 8 أحرف على الأقل"
      )
      .required("ادخل كلمة السر"),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("newPwd"), null], "يجب أن تتطابق كلمة المرور")
      .required("ادخل كلمة السر"),
  });

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    dispatch(changePassword(values.newPwd)).then(() => {
      setSubmitting(false);
      resetForm({ initialValues });
    });
  };
  return (
    <div className={styles["edit-profile"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        enableReinitialize={true}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => {
          const isValidNewPwd = validationSchema.fields.newPwd.isValidSync(
            values.newPwd
          );
          if (!isValidNewPwd && values.confirmPwd !== "") {
            setFieldValue("confirmPwd", "");
          }
          return (
            <Form method="post" className="needs-validation" noValidate>
              <div className={styles.group}>
                <div className={styles["input-box"]}>
                  <label htmlFor="old-pwd" className={styles.label}>
                    الرقم السري القديم
                  </label>
                  <div>
                    <Field
                      type="password"
                      id="old-pwd"
                      name="oldPwd"
                      className={`form-control ${
                        touched.oldPwd && errors.oldPwd && "is-invalid"
                      } ${styles["input-field"]} `}
                      placeholder="قم باضافة الرقم السري القديم هنا..."
                      aria-label="oldPwd"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="oldPwd"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
                <div className={styles["input-box"]}>
                  <label htmlFor="new-pwd" className={styles.label}>
                    الرقم السري الجديد
                  </label>
                  <div>
                    <Field
                      type="password"
                      id="new-pwd"
                      name="newPwd"
                      className={`form-control ${
                        touched.newPwd && errors.newPwd && "is-invalid"
                      } ${styles["input-field"]} `}
                      placeholder="قم باضافة الرقم السري الجديد هنا..."
                      aria-label="new-pwd"
                      aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                      name="newPwd"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
                <div className={styles["input-box"]}>
                  <label htmlFor="confirm-pwd" className={styles.label}>
                    تاكيد الرقم السري
                  </label>
                  <div>
                    <Field
                      type="password"
                      id="confirm-pwd"
                      name="confirmPwd"
                      className={`form-control ${
                        touched.confirmPwd && errors.confirmPwd && "is-invalid"
                      }  ${styles["input-field"]} `}
                      placeholder="قم بتاكيد الرقم السري  هنا..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled={!isValidNewPwd}
                    />
                    <ErrorMessage
                      name="confirmPwd"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
              </div>
              <div className={styles["button-container"]}>
                <SubmitButton
                  isDisabled={isSubmitting}
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

export default EditProfilePassword;
