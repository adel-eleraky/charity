/* eslint-disable no-unused-vars */
import React from "react";
import "./css/AddCase.css";
import Popup from "reactjs-popup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addCase } from "../rtk/features/charity/charityCaseSlice";
import SubmitButton from "./common/SubmitButton";

//*guide for formik submit

function AddCase() {
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    gender: "",
    location: "",
    type: "",
    targetDonationAmount: "",
    image: {},
    description: "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("ادخل الاسم"),
    gender: yup
      .string()
      .required("ادخل جنس الحالة")
      .oneOf(["male", "female"], "ادخل جنس الحالة"),
    location: yup.string().required("ادخل عنوان الحالة "),
    type: yup.string().required(" ادخل نوع الحالة   "),
    targetDonationAmount: yup
      .number()
      .required(" ادخل الاموال المطلوبة للحالة"),
    description: yup.string().required("  ادخل وصف الحالة"),
  });

  const submitHandler = (values, { setSubmitting }) => {
    const { type, location, ...rest } = values;
    const caseData = {
      ...rest,
      mainType: type,
      subType: type,
      "caseLocation[0][governorate]": location,
      helpedNumbers: 1,
    };
    dispatch(addCase(caseData)).then(() => {
      setSubmitting(false);
    });
  };

  return (
    <>
      <Popup
        className="add-case-popup"
        trigger={<button className="add-case-btn"> اضافة حالة </button>}
        modal
      >
        <div className="modal-content1 bg-white p-3 rounded ">
          <div className="case-details fs-3 fw-bold text-center mb-5">
            ادخل بيانات الحالة{" "}
          </div>
          <div className="form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                isSubmitting,
                dirty,
                isValid,
              }) => {
                return (
                  <Form method="post" className="needs-validation" noValidate>
                    <div className="d-flex flex-wrap justify-content-between mb-3">
                      <div className="input">
                        <label htmlFor="title" className="form-label">
                          {" "}
                          اسم الحالة{" "}
                        </label>
                        <Field
                          type="text"
                          name="title"
                          className={`form-control ${
                            touched.title && errors.title && "is-invalid"
                          } `}
                          id="title"
                          placeholder="ادخل اسم الحالة"
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="gender" className="form-label">
                          {" "}
                          جنس الحالة{" "}
                        </label>
                        <Field
                          as="select"
                          id="gender"
                          name="gender"
                          className={`form-control ${
                            touched.gender && errors.gender && "is-invalid"
                          } `}
                          aria-label="gender"
                          aria-describedby="basic-addon1"
                        >
                          <option value="">اختر جنس الحالة </option>
                          <option value="male"> ذكر </option>
                          <option value="female"> انثى </option>
                        </Field>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-3">
                      <div className="input">
                        <label htmlFor="location" className="form-label">
                          {" "}
                          العنوان{" "}
                        </label>
                        <Field
                          type="text"
                          name="location"
                          className={`form-control ${
                            touched.location && errors.location && "is-invalid"
                          } `}
                          id="location"
                          placeholder="ادخل عنوان الحالة"
                        />
                        <ErrorMessage
                          name="location"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="type" className="form-label">
                          {" "}
                          نوع الحالة{" "}
                        </label>
                        <Field
                          as="select"
                          id="type"
                          name="type"
                          className={`form-control ${
                            touched.type && errors.type && "is-invalid"
                          } `}
                          aria-label="type"
                          aria-describedby="basic-addon1"
                        >
                          <option value="">اختر نوع الحالة </option>
                          <option value=" مرضى "> مرضى </option>
                          <option value=" ايتام "> ايتام </option>
                          <option value="BloodDonation">تبرع بالدم</option>
                        </Field>
                        <ErrorMessage
                          name="type"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-3">
                      <div className="input">
                        <label
                          htmlFor="targetDonationAmount"
                          className="form-label"
                        >
                          {" "}
                          الاموال المطلوبة{" "}
                        </label>
                        <Field
                          type="number"
                          name="targetDonationAmount"
                          className={`form-control ${
                            touched.targetDonationAmount &&
                            errors.targetDonationAmount &&
                            "is-invalid"
                          } `}
                          id="targetDonationAmount"
                          placeholder=" الاموال المطلوبة "
                        />
                        <ErrorMessage
                          name="targetDonationAmount"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                      <div className="input">
                        <label htmlFor="image" className="form-label">
                          {" "}
                          صورة الحالة{" "}
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          onChange={(event) =>
                            setFieldValue("image", event.currentTarget.files[0])
                          }
                          className={`form-control ${
                            touched.image && errors.image && "is-invalid"
                          } file-input`}
                          aria-label="image"
                          aria-describedby="basic-addon1"
                        />
                        <ErrorMessage
                          name="image"
                          component="div"
                          className="invalid-feedback d-block fs-6"
                        />
                      </div>
                    </div>
                    <label htmlFor="description" className="form-label fw-bold">
                      {" "}
                      وصف الحالة{" "}
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      className={`form-control ${
                        touched.description &&
                        errors.description &&
                        "is-invalid"
                      } `}
                      id="description"
                      placeholder="وصف الحالة"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                    <SubmitButton
                      isDisabled={isSubmitting || !dirty || !isValid}
                      isLoading={isSubmitting}
                      text="حفظ البيانات"
                    />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default AddCase;
