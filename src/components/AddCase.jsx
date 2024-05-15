/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AddCase.css"
import Popup from "reactjs-popup";
import { Field, Form, Formik } from 'formik';

function AddCase() {
    return (
        <>
            <Popup className="popup" trigger={<button className="add-case-btn"> اضافة حالة </button>} modal>
                <div className="modal-content bg-white p-3 rounded ">
                    <div className="case-details fs-3 fw-bold text-center mb-5"> ادخل بيانات الحالة </div>
                    <div className="form">
                        <Formik >
                            {({ values, errors, touched }) => {
                                return (
                                    <Form >
                                        <div className="d-flex flex-wrap justify-content-between mb-3">
                                            <div className="input">
                                                <label htmlFor="title" className="form-label"> اسم الحالة </label>
                                                <Field type="text" name="title" className="form-control" id="title" placeholder="ادخل اسم الحالة" />
                                            </div>
                                            <div className="input">
                                                <label htmlFor="gender" className="form-label"> جنس الحالة </label>
                                                <Field
                                                    as="select"
                                                    id="gender"
                                                    name="gender"
                                                    className={`form-control ${touched.organizationName && errors.organizationName && "is-invalid"} `}
                                                    aria-label="gender"
                                                    aria-describedby="basic-addon1"
                                                >
                                                    <option value="">اختر جنس الحالة  </option>
                                                    <option value=" ذكر "> ذكر  </option>
                                                    <option value=" انثى "> انثى </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between mb-3">
                                            <div className="input">
                                                <label htmlFor="location" className="form-label"> العنوان  </label>
                                                <Field type="text" name="location" className="form-control" id="location" placeholder="ادخل عنوان الحالة" />
                                            </div>
                                            <div className="input">
                                                <label htmlFor="type" className="form-label"> نوع الحالة  </label>
                                                <Field
                                                    as="select"
                                                    id="type"
                                                    name="type"
                                                    className={`form-control ${touched.organizationName && errors.organizationName && "is-invalid"} `}
                                                    aria-label="type"
                                                    aria-describedby="basic-addon1"
                                                >
                                                    <option value="">اختر نوع الحالة  </option>
                                                    <option value=" مرضى "> مرضى  </option>
                                                    <option value=" ايتام "> ايتام </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between mb-3">
                                            <div className="input">
                                                <label htmlFor="targetDonationAmount" className="form-label"> الاموال المطلوبة </label>
                                                <Field type="number" name="targetDonationAmount" className="form-control" id="targetDonationAmount" placeholder=" الاموال المطلوبة " />
                                            </div>
                                            <div className="input">
                                                <label htmlFor="image" className="form-label"> صورة الحالة </label>
                                                <Field
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    className={`form-control ${touched.images && errors.images && "is-invalid"} file-input`}
                                                    aria-label="image"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                        </div>
                                        <label htmlFor="description" className="form-label fw-bold"> وصف الحالة </label>
                                        <Field as="textarea" name="description" className="form-control mb-3" id="description" placeholder="وصف الحالة" />
                                        <button className='btn save-btn'> حفظ البيانات  </button>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default AddCase
