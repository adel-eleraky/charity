import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import styles from "./CharityCaseEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  editCase,
  updateCaseCoverImg,
} from "../../rtk/features/charity/charityCaseSlice";

import ProfileImageEdit from "../common/ProfileImageEdit";
import SubmitButton from "../common/SubmitButton";

function CharityCaseEdit({ currentCase }) {
  const { updateCaseCoverImgStatus, error, editCaseStatus } = useSelector(
    (s) => s.charityCase
  );
  const dispatch = useDispatch();

  const initialValues = {
    title: currentCase.title,
    finished: currentCase.finished,
    location: currentCase?.caseLocation[0]?.governorate,
    type: currentCase?.mainType,
    targetDonationAmount: currentCase?.targetDonationAmount,
    description: currentCase.description,
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("ادخل الاسم"),
    finished: yup
      .string()
      .required("ادخل جنس الحالة")
      .oneOf(["true", "false"], "ادخل جنس الحالة"),
    location: yup.string().required("ادخل عنوان الحالة "),
    type: yup.string().required(" ادخل نوع الحالة   "),
    targetDonationAmount: yup
      .number()
      .required(" ادخل الاموال المطلوبة للحالة"),
    description: yup.string().required("  ادخل وصف الحالة"),
  });

  const submitHandler = (values) => {
    const { type, location, ...rest } = values;
    const caseData = {
      ...rest,
      mainType: type,
      subType: type,
      "caseLocation[0][governorate]": location,
    };
    const editCaseData = { id: currentCase._id, caseData };
    dispatch(editCase(editCaseData));
    // console.log(caseData);
  };
  return (
    <div className={`${styles.content} bg-white p-3 rounded `}>
      <div className="fs-3 fw-bold text-center mb-5">تعديل الحالة</div>
      <ProfileImageEdit
        type="case"
        currentValue={{ id: currentCase._id, image: currentCase.coverImage }}
        updateProfileImageStatus={updateCaseCoverImgStatus}
        error={error}
        updateProfileImage={updateCaseCoverImg}
      />
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, errors, touched, setFieldValue }) => {
            return (
              <Form method="post" className="needs-validation" noValidate>
                <div className="d-flex flex-wrap justify-content-between mb-3">
                  <div className={styles.input}>
                    <label htmlFor="title" className="form-label">
                      اسم الحالة
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
                  <div className={styles.input}>
                    <label htmlFor="finished" className="form-label">
                      نوع الحالة
                    </label>
                    <Field
                      as="select"
                      id="finished"
                      name="finished"
                      className={`form-control ${
                        touched.finished && errors.finished && "is-invalid"
                      } `}
                      aria-label="finished"
                      aria-describedby="basic-addon1"
                    >
                      <option value="">اختر نوع الحالة</option>
                      <option value="false">مفتوح</option>
                      <option value="true">مغلق</option>
                    </Field>
                    <ErrorMessage
                      name="finished"
                      component="div"
                      className="invalid-feedback d-block fs-6"
                    />
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between mb-3">
                  <div className={styles.input}>
                    <label htmlFor="location" className="form-label">
                      العنوان
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
                  <div className={styles.input}>
                    <label htmlFor="type" className="form-label">
                      فئة الحالة
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
                      <option value="">اختر فئة الحالة </option>
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
                  <div className={styles.input}>
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
                </div>
                <label htmlFor="description" className="form-label fw-bold">
                  {" "}
                  وصف الحالة{" "}
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className={`form-control ${
                    touched.description && errors.description && "is-invalid"
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
                  // TODO: disabled also when the form is not touched
                  isDisabled={editCaseStatus === "loading"}
                  isLoading={editCaseStatus === "loading"}
                  text={"حفظ البيانات"}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CharityCaseEdit;
