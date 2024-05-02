/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import "./css/Used.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
function Used() {

    const handleUploadClick = (e) => {
        document.querySelector(".file-input").click()
    }

    const initialValues = {
        name: "",
        address: "",
        phone: "",
        used: "",
        images: [],
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("ادخل الاسم"),
        address: yup.string().required("ادخل العنوان"),
        phone: yup.string().matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").required("ادخل رقم الهاتف"),
        used: yup.string().required(" ادخل اسم المسنعمل  "),
    })

    const submitHandler = (values) => {
        console.log(values)
    }

    return (
        <div className='used-page py-5'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-6 report-details mb-3 mb-lg-0">
                        <div className="content rounded p-3">
                            <h3>
                                طريقه التبليغ عن الحاجات المستعملة؟
                            </h3>
                            <div className='mt-4'>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 1 </span>
                                    <div className="content">
                                        <h5> الخطوة الاولى </h5>
                                        <p>
                                            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 2 </span>
                                    <div className="content">
                                        <h5> الخطوة الثانية </h5>
                                        <p>
                                            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 3 </span>
                                    <div className="content">
                                        <h5> الخطوة الثالثة </h5>
                                        <p>
                                            هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 report-form d-flex justify-content-center align-items-center">
                        <div className="content rounded bg-white p-3 w-100">
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto' style={{ width: "350px"}}> التبرع بالحاجات المستعملة </h3>
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
                                                    <label htmlFor="name" className="form-label">
                                                        الاسم
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-regular fa-user"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className={`form-control ${touched.name && errors.name && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب اسمك "
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="name"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div  className='input'>
                                                    <label htmlFor="address" className="form-label">
                                                        العنوان
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            className={`form-control ${touched.address && errors.address && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب عنوانك "
                                                            aria-label="address"
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
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="phone" className="form-label">
                                                        التليفون
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-phone"></i>
                                                        </span>
                                                        <Field
                                                            type="number"
                                                            id="phone"
                                                            name="phone"
                                                            className={`form-control ${touched.phone && errors.phone && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" رقم التليفون "
                                                            aria-label="phone"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="phone"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="used" className="form-label">
                                                        الحاجة المستعملة
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="used"
                                                            name="used"
                                                            className={`form-control ${touched.used && errors.used && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب اسم الحاجة المستعملة "
                                                            aria-label="used"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="used"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-2 text-center fw-600 border rounded w-50 mx-auto' onClick={handleUploadClick}> <img src="/images/upload-icon.png" alt="" className="img-fluid mx-2" />قم بارفاق صور التبرع
                                                <Field
                                                    type="file"
                                                    id="images"
                                                    name="images"
                                                    className={`form-control ${touched.images && errors.images && "is-invalid"} file-input rounded-0 rounded-start d-none`}
                                                    aria-label="images"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                            <button
                                                className="submit-btn btn d-block w-50 py-2 mt-4 mx-auto fs-5 text-white"
                                                type="submit"
                                            >
                                                ارسال الان <i className='bi bi-arrow-left'></i>
                                            </button>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container items-sec">
                <h2 className='text-center fw-bold  mb-4 position-relative mx-auto' style={{ width: "275px"}}> الحالات المتبرع بها  </h2>
                <div className="d-flex flex-wrap justify-content-center gap-4 used-items" >
                    <div className='rounded border p-3 bg-white'> <img src="/images/used-item.png" alt="" className="img-fluid w-100" /> </div>
                    <div className='rounded border p-3 bg-white'> <img src="/images/used-item.png" alt="" className="img-fluid w-100" /> </div>
                    <div className='rounded border p-3 bg-white'> <img src="/images/used-item.png" alt="" className="img-fluid w-100" /> </div>
                    <div className='rounded border p-3 bg-white'> <img src="/images/used-item.png" alt="" className="img-fluid w-100" /> </div>
                    <div className='rounded border p-3 bg-white'> <img src="/images/used-item.png" alt="" className="img-fluid w-100" /> </div>
                </div>
            </div>
        </div>
    )
}

export default Used
