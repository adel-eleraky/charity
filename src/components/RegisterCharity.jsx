/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ErrorMessage, Field } from 'formik'
import React from 'react'

function RegisterCharity({ touched, errors }) {
    return (
        <div className='register-charity-component'>
            <div className="mb-4">
                <label
                    htmlFor="organizationName"
                    className="form-label"
                >
                    اسم الجمعية
                </label>
                <div className="input-group has-validation mb-4">
                    <span
                        className="input-group-text  rounded-0 rounded-end"
                        id="basic-addon1"
                    >
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </span>
                    <Field
                        type="text"
                        id="organizationName"
                        name="organizationName"
                        className={`form-control ${touched.organizationName &&
                            errors.organizationName &&
                            "is-invalid"
                            } rounded-0 rounded-start`}
                        placeholder="ادخل اسم الجمعية"
                        aria-label="Organization Name"
                        aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                        name="organizationName"
                        component="div"
                        className="invalid-feedback d-block fs-6 fw-bold"
                    />
                </div>
                <label
                    htmlFor="organizationDescription"
                    className="form-label"
                >
                    نبذة عن الجمعية 
                </label>
                <div className="input-group has-validation mb-4">
                    
                    <Field
                        as="textarea"
                        id="organizationDescription"
                        name="organizationDescription"
                        className={`form-control ${touched.organizationDescription &&
                            errors.organizationDescription &&
                            "is-invalid"
                            } `}
                        placeholder="ادخل اسم الجمعية"
                        aria-label="Organization Name"
                        aria-describedby="basic-addon1"
                    />
                    <ErrorMessage
                        name="organizationDescription"
                        component="div"
                        className="invalid-feedback d-block fs-6 fw-bold"
                    />
                </div>
            </div>
        </div>
    )
}

export default RegisterCharity
