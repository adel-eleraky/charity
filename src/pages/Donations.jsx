/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Donations.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'


function Donations() {

    const initialValues = {
        name: "",
        address: "",
        phone: "",
        donations: "",
        images: [],
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("ادخل الاسم"),
        address: yup.string().required("ادخل العنوان"),
        phone: yup.string().matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").required("ادخل رقم الهاتف"),
        donations: yup.string().required(" ادخل اسم المسنعمل  "),
    })

    const submitHandler = (values) => {
        console.log(values)
    }

    return (
        <div className='donations-page py-5'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 col-lg-6 donation-details mb-3 mb-lg-0">
                        <div className="content rounded p-3">
                            <h3 className='fw-bold'>
                                طريقة التبرع
                            </h3>
                            <div className='mt-4'>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 1 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الاولى </h4>
                                        <p>
                                            قم بتسجيل بياناتك
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 2 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الثانية </h4>
                                        <p>
                                            اختار نوع التبرع و ادخل قيمة التبرع
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 3 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الثالثة </h4>
                                        <p>
                                            اختار الجمعية التى تريد التبرع لها
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 donation-form d-flex justify-content-center align-items-center">
                        <div className="content rounded bg-white p-3 w-100">
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto' style={{ width: "350px" }}> تبرع بالمال </h3>
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
                                                <div className='input'>
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
                                                        نوع التبرع
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-house"></i>
                                                        </span>
                                                        <Field
                                                            as="select"
                                                            id="organizationName"
                                                            name="organizationName"
                                                            className={`form-control ${touched.organizationName && errors.organizationName && "is-invalid"} rounded-0 rounded-start`}
                                                            aria-label="organizationName"
                                                            aria-describedby="basic-addon1"
                                                        >
                                                            <option value="">اختر نوع التبرع</option>
                                                            <option value="جمعية 1 "> صدقة </option>
                                                            <option value="جمعية 2"> كفارة </option>
                                                            <option value="جمعية 2"> اضحية </option>
                                                        </Field>
                                                        <ErrorMessage
                                                            name="organizationName"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="phone" className="form-label">
                                                        قيمة التبرع
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
                                                        اختر الجمعية
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-house"></i>
                                                        </span>
                                                        <Field
                                                            as="select"
                                                            id="organizationName"
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
                                            <button
                                                className="submit-btn btn d-block w-50 py-2 mt-4 mx-auto fs-5 text-white"
                                                type="submit"
                                            >
                                                تبرع الان <i className='bi bi-arrow-left'></i>
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

export default Donations
