/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function RegisterUser({ touched, errors }) {
    return (
        <div className='register-user-component'>
            <div className="mb-4">
                <label htmlFor="firstName" className="form-label">
                    الاسم الأول
                </label>
                <div className="input-group has-validation mb-4">
                    <span
                        className="input-group-text  rounded-0 rounded-end"
                        id="basic-addon1"
                    >
                        <i className="fa-regular fa-user"></i>
                    </span>
                    <Field
                        type="text"
                        id="firstName"
                        name="name[firstName]"
                        className={`form-control ${touched.name?.firstName &&
                            errors.name?.firstName &&
                            "is-invalid"
                            } rounded-0 rounded-start`}
                        placeholder="ادخل الاسم الأول"
                        aria-label="First Name"
                        aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                        name="name[firstName]"
                        component="div"
                        className="invalid-feedback d-block fs-6 fw-bold"
                    />
                </div>
                <label htmlFor="lastName" className="form-label">
                    اسم العائلة
                </label>
                <div className="input-group has-validation mb-4">
                    <span
                        className="input-group-text  rounded-0 rounded-end"
                        id="basic-addon1"
                    >
                        <i className="fa-regular fa-user"></i>
                    </span>
                    <Field
                        type="text"
                        id="lastName"
                        name="name[lastName]"
                        className={`form-control ${touched.name?.lastName &&
                            errors.name?.lastName &&
                            "is-invalid"
                            } rounded-0 rounded-start`}
                        placeholder="ادخل اسم العائلة"
                        aria-label="Last Name"
                        aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                        name="name[lastName]"
                        component="div"
                        className="invalid-feedback d-block fs-6 fw-bold"
                    />
                </div>
                <label htmlFor="gender" className="form-label">
                    الجنس
                </label>
                <div className="form-check mb-4">
                    <Field
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        className={`form-check-input ${touched.gender && errors.gender && "is-invalid"
                            } float-none ms-2`}
                    />
                    <label className="form-check-label" htmlFor="male">
                        ذكر
                    </label>
                </div>
                <div className="form-check mb-4">
                    <Field
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className={`form-check-input ${touched.gender && errors.gender && "is-invalid"
                            } float-none ms-2`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="female"
                    >
                        أنثى
                    </label>
                </div>
                <ErrorMessage
                    name="gender"
                    component="div"
                    className="invalid-feedback d-block fs-6 fw-bold"
                />
            </div>
        </div>
    )
}

export default RegisterUser
