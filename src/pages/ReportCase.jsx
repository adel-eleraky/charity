/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/ReportCase.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    ReporterName: "",
    ReporterAddress: "",
    ReporterPhone: "",
    organizationName: "",
    CaseName: "",
    CaseAddress: "",
    CaseDetails: ""
}

const validationSchema = yup.object().shape({
    ReporterName: yup.string().required("ادخل الاسم"),
    ReporterAddress: yup.string().required("ادخل العنوان"),
    ReporterPhone: yup.string().matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").required("ادخل رقم الهاتف"),
    organizationName: yup.string().required(" اختار الجمعية"),
    CaseName: yup.string().required(" ادخل اسم الحالة  "),
    CaseAddress: yup.string().required("ادخل العنوان"),
    CaseDetails: yup.string().required(" ادخل تفاصيل الحالة "),
})

const submitHandler = (values) => {
    console.log(values)
}

function ReportCase() {

    return (
        <div className='report-case-page py-5'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-6 report-details mb-3 mb-lg-0">
                        <div className="content rounded p-3">
                            <h3>
                                طريقه التبليغ عن حالة مستحقة
                            </h3>
                            <div className='mt-4'>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 1 </span>
                                    <div className="content">
                                        <h5> الخطوة الاولى </h5>
                                        <p>
                                            قم بتسجيل بياناتك
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 2 </span>
                                    <div className="content">
                                        <h5> الخطوة الثانية </h5>
                                        <p>
                                            قم بتسجيل بيانات الحالة المستحقة
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 3 </span>
                                    <div className="content">
                                        <h5> الخطوة الثالثة </h5>
                                        <p>
                                            اختار الجمعية المراد ابلاغ الحالة بها , يمكنك اختيار اكتر من جمعية
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 report-form d-flex justify-content-center align-items-center">
                        <div className="content rounded bg-white p-3 w-100">
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto reporter-details' style={{ width: "350px" }}> تسجيل بياناتك </h3>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={submitHandler}
                            >
                                {({ values, errors, touched }) => {
                                    return (
                                        <Form method='post' className="needs-validation" noValidate>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="ReporterName" className="form-label">
                                                        الاسم
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-regular fa-user"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="ReporterName"
                                                            name="ReporterName"
                                                            className={`form-control ${touched.ReporterName && errors.ReporterName && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب اسمك "
                                                            aria-label="ReporterName"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="ReporterName"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="ReporterAddress" className="form-label">
                                                        العنوان
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="ReporterAddress"
                                                            name="ReporterAddress"
                                                            className={`form-control ${touched.ReporterAddress && errors.ReporterAddress && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب عنوانك "
                                                            aria-label="ReporterAddress"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="ReporterAddress"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="ReporterPhone" className="form-label">
                                                        التليفون
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-phone"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="ReporterPhone"
                                                            name="ReporterPhone"
                                                            className={`form-control ${touched.ReporterPhone && errors.ReporterPhone && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" رقم التليفون "
                                                            aria-label="ReporterPhone"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="ReporterPhone"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="OrganizationName" className="form-label">
                                                        اختر الجمعية
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-house"></i>
                                                        </span>
                                                        <Field
                                                            as="select"
                                                            id="OrganizationName"
                                                            name="organizationName"
                                                            className={`form-control ${touched.organizationName && errors.organizationName && "is-invalid"} rounded-0 rounded-start`}
                                                            aria-label="organizationName"
                                                            aria-describedby="basic-addon1"
                                                        >
                                                            <option value="">اختر جمعية </option>
                                                            <option value="جمعية 1 "> جمعية 1  </option>
                                                            <option value="جمعية 2"> جمعية 2 </option>
                                                            <option value="جمعية 3"> جمعية 3 </option>
                                                        </Field>
                                                        <ErrorMessage
                                                            name="organizationName"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto case-details' style={{ width: "350px" }}>تسجيل بيانات الحالة  </h3>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="CaseName" className="form-label">
                                                        الاسم
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-phone"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="CaseName"
                                                            name="CaseName"
                                                            className={`form-control ${touched.CaseName && errors.CaseName && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب اسم الحالة  "
                                                            aria-label="CaseName"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="CaseName"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="CaseAddress" className="form-label">
                                                        العنوان
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="CaseAddress"
                                                            name="CaseAddress"
                                                            className={`form-control ${touched.CaseAddress && errors.CaseAddress && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" ادخل عنوان الحالة  "
                                                            aria-label="CaseAddress"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="CaseAddress"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <label htmlFor="CaseDetails" className="form-label">
                                                تفاصيل الحالة
                                            </label>
                                            <div className="input-group has-validation mb-4">
                                                <Field
                                                    as="textarea"
                                                    id="CaseDetails"
                                                    name="CaseDetails"
                                                    className={`form-control ${touched.CaseDetails && errors.CaseDetails && "is-invalid"} rounded-0 rounded-start`}
                                                    placeholder=" اكتب تفاصيل الحالة   "
                                                    aria-label="CaseDetails"
                                                    aria-describedby="basic-addon1"
                                                />
                                                <ErrorMessage
                                                    name="CaseDetails"
                                                    component="div"
                                                    className="invalid-feedback d-block fs-6"
                                                />
                                            </div>
                                            <button
                                                className="submit-btn btn d-block w-50 py-2 mt-4 mx-auto fs-5 text-white"
                                                type="submit"
                                            >
                                                ابلاغ الان <i className='bi bi-arrow-left'></i>
                                            </button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportCase
