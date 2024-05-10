import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./EditUserData.module.css";
import * as yup from "yup";

function EditUserData() {
  const initialValues = {
    username: "",
    email: "",
    address: "",
  };

  // error messages
  const validationSchema = yup.object().shape({
    username: yup.string().required("ادخل الاسم"),
    email: yup.string().required("ادخل الايميل"),
    address: yup.string().required("ادخل العنوان"),
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
                <button type="submit">حفظ التعديلات</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditUserData;
