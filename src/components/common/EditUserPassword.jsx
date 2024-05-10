import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./EditUserPassword.module.css";
import * as yup from "yup";

function EditUserPassword() {
  const initialValues = {
    oldPwd: "",
    newPwd: "",
    confirmPwd: "",
  };

  // error messages
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
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "يجب أن تحتوي كلمة المرور على حروف كبيرة وصغيرة وأرقام ورموز وأن تكون طولها 8 أحرف على الأقل"
      )
      .required("ادخل كلمة السر"),
  });

  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <div className={styles["edit-profile"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ values, errors, touched }) => {
          return (
            <Form method="post" className="needs-validation" noValidate>
              <div className={styles.group}>
                <div className={styles["input-box"]}>
                  <label htmlFor="old-pwd" className={styles.label}>
                    الرقم السري القديم
                  </label>
                  <div>
                    <Field
                      type="text"
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
                      type="text"
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
                      type="text"
                      id="confirm-pwd"
                      name="confirmPwd"
                      className={`form-control ${
                        touched.confirmPwd && errors.confirmPwd && "is-invalid"
                      }  ${styles["input-field"]}`}
                      placeholder="قم بتاكيد الرقم السري  هنا..."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
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
                <button type="submit">حفظ التعديلات</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditUserPassword;
