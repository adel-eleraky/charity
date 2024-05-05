/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Zakat.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'

function Zakat() {

    const initialValues = {
        name: "",
        address: "",
        phone: "",
        organizationName: "",
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("ادخل الاسم"),
        address: yup.string().required("ادخل العنوان"),
        phone: yup.string().matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا").required("ادخل رقم الهاتف"),
        organizationName: yup.string().required(" اختار الجمعية "),
    })

    const submitHandler = (values) => {
        console.log(values)
    }

    return (
        <div className='zakat-page py-5'>
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 payment-details mb-3 mb-lg-0">
                        <div className="content rounded p-3">
                            <h3 className='fw-bold'>
                                طريقة دفع الزكاة
                            </h3>
                            <div className='mt-4'>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 1 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الاولى </h4>
                                        <p>
                                            تأكد أن اموالك قد تخطت نصاب الزكاة وقد مر عليها حول كامل
                                            <br />
                                            نصاب الذهب عيار 24 : {85 * 3526} جنيه
                                            <br />
                                            نصاب الفضة : {595 * 40.92} جنيه
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 2 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الثانية </h4>
                                        <p>
                                            ادخل قيمة اموالك فى الفورم و سيتم حساب مقدار الزكاة الخاص بك
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <span className='d-block p-2 border rounded-circle text-center ms-3' style={{ width: "48px", height: "48px", fontSize: "20px", fontWeight: "bold" }}> 3 </span>
                                    <div className="content">
                                        <h4 className='fw-bold'> الخطوة الثالثة </h4>
                                        <p>
                                            اختار الجمعية الذي تريد التبرع بها و سيتم دفع الزكاة لها
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 payment-form d-flex justify-content-center align-items-center">
                        <div className="content rounded bg-white p-3 w-100">
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto calc-heading' style={{ width: "350px" }}> حاسب قيمة الزكاة </h3>
                            <div className="d-flex justify-content-evenly flex-wrap">
                                <div className='input'>
                                    <label htmlFor="name" className="form-label">
                                        جميع اموالك
                                    </label>
                                    <div className="input-group has-validation mb-4">
                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <input
                                            type="number"
                                            id="money"
                                            name="money"
                                            className="form-control rounded-0 rounded-start"
                                            placeholder=" ادخل قيمة اموالك  "
                                            aria-label="money"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                                <div className='input'>
                                    <label htmlFor="name" className="form-label">
                                        قيمة الزكاة
                                    </label>
                                    <div className="input-group has-validation mb-4">
                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <input
                                            type="number"
                                            id="zakat_money"
                                            name="zakat_money"
                                            className="form-control rounded-0 rounded-start"
                                            placeholder=" قيمة الزكاة الواجبة "
                                            aria-label="money"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto pay-heading' style={{ width: "350px" }}>دفع الزكاة </h3>
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
                                                        الجمعية
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
                                                            <option value="">اختر الجمعية</option>
                                                            <option value="جمعية 1 ">جمعية 1</option>
                                                            <option value="جمعية 2">حمعية 2</option>
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
                                                ادفع الان <i className='bi bi-arrow-left'></i>
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

export default Zakat
