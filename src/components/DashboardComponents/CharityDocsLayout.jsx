/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
// import "./css/Used.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./CharityDocsLayout.module.css";
import * as yup from "yup";
import FileInput from "../common/FileInput";
import { sendDocs } from "../../rtk/features/charity/charityActivitySlice";
import { useDispatch } from "react-redux";
//todo: add the loading and error handling
function CharityDocsLayout() {
  const dispatch = useDispatch();
  const initialValues = {
    bankDocs: {},
    charityDocs1: {},
    charityDocs2: {},
    charityDocs3: {},
    charityDocs4: {},
  };

  const validationSchema = yup.object().shape({});

  const submitHandler = (values) => {
    // wow you still have access to the data here without prop-drilling (wow)
    const docsData = {
      accNumber: "1503070704120700019",
      swiftCode: "ECBAEGCA",
      iban: "EG890003000930603696309000540",
      ...values,
    };
    dispatch(sendDocs(docsData));
    console.log(docsData);
  };

  return (
    <div className={styles["upload-docs"]}>
      <div className={styles["heading"]}>
        <div className="inner-container">
          <div className={styles.title}>الوثائق</div>
        </div>
      </div>
      <div className="inner-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, errors, touched, setFieldValue }) => {
            return (
              <Form method="post" className="needs-validation" noValidate>
                <div className={styles["input-group"]}>
                  <FileInput name="bankDocs" setFieldValue={setFieldValue}>
                    ادخل الصورة
                  </FileInput>
                  <FileInput name="charityDocs1" setFieldValue={setFieldValue}>
                    ادخل الصورة1
                  </FileInput>
                  <FileInput name="charityDocs2" setFieldValue={setFieldValue}>
                    ادخل الصورة2
                  </FileInput>
                  <FileInput name="charityDocs3" setFieldValue={setFieldValue}>
                    ادخل الصورة3
                  </FileInput>
                  <FileInput name="charityDocs4" setFieldValue={setFieldValue}>
                    ادخل الصورة4
                  </FileInput>
                </div>
                <div className={styles["button-container"]}>
                  <button type="submit">ارسال الملفات</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CharityDocsLayout;
