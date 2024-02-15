import React, { useState } from 'react'
import "./css/ResetPassword.css"
import { Link } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup"
import { toast } from 'react-toastify';

function ResetPassword() {

    const [formStatus, setFormStatus] = useState("notSubmitted")

    const initialValues = {
        password: "",
        passwordConfirm: "",
    }

    const validationSchema = yup.object().shape({
        password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'يجب أن تحتوي كلمة المرور على حروف كبيرة وصغيرة وأرقام ورموز وأن تكون طولها 8 أحرف على الأقل').required("ادخل كلمة السر"),
        passwordConfirm: yup.string().required("ادخل كلمة السر").oneOf([yup.ref("password"), null], "كلمة المرور غير متطابقة"),
    })

    const submitHandler = values => {
        console.log(values)
        setFormStatus("submitted")
        toast.promise(
            // implement reset password function
            // dispatch(resetPassword(values.password)),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject()
                }, 2000)
            }),
            {
                pending: 'جاري التحقق...',
                success: 'تم التحقق بنجاح',
                error: 'فشل التحقق'
            }
        )

    }
    return (
        <>
            <div className="reset-password-page py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-xl-6">
                            {formStatus === "notSubmitted" ?
                                <div className="reset-password-form p-5 rounded w-75 m-auto">
                                    <h3 className='text-center mb-4'> تعيين كلمة المرور الجديدة </h3>
                                    <Formik 
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={submitHandler}
                                    >
                                        {({ values, errors, touched }) => {
                                            console.log("errors" , errors);
                                            console.log("touched" , touched);
                                            return (
                                                <Form method="post" className="needs-validation" noValidate>
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">كلمة المرور </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span
                                                            className="input-group-text  rounded-0 rounded-end"
                                                            id="basic-addon1"
                                                        >
                                                            <i className="fa-solid fa-lock"></i>
                                                        </span>
                                                        <Field
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            className={`form-control ${touched.password && errors.password && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder="ادخل كلمة المرور"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage name="password" component="div" className="invalid-feedback d-block fs-6" />
                                                    </div>
                                                    <label htmlFor="exampleFormControlInput1" className="form-label"> تأكيد كلمة المرور  </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span
                                                            className="input-group-text  rounded-0 rounded-end"
                                                            id="basic-addon1"
                                                        >
                                                            <i className="fa-solid fa-lock"></i>
                                                        </span>
                                                        <Field
                                                            type="password"
                                                            id="passwordConfirm"
                                                            name="passwordConfirm"
                                                            className={`form-control ${touched.passwordConfirm && errors.passwordConfirm && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder="ادخل كلمة المرور"
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage name="passwordConfirm" component="div" className="invalid-feedback d-block fs-6" />
                                                    </div>
                                                    <button type="submit" className="btn d-block m-auto submit-btn fw-bold">  حفظ كلمة المرور </button>
                                                </Form>
                                            )
                                        }}
                                    </Formik>
                                    {/* <form action="" method='post' onSubmit={handleSubmit}>
                                        <label htmlFor="exampleFormControlInput1" className="form-label">كلمة المرور </label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                            <input type="password" className="form-control rounded-0 rounded-start" placeholder="كلمة المرور " aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <label htmlFor="exampleFormControlInput1" className="form-label"> تأكيد كلمة المرور  </label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                            <input type="password" className="form-control rounded-0 rounded-start" placeholder=" تأكيد كلمة المرور  " aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <button className="btn d-block m-auto submit-btn fw-bold">  حفظ كلمة المرور </button>
                                    </form> */}
                                </div>
                                :
                                <div className='form-submitted-content text-center p-5 rounded w-75 m-auto'>
                                    <h3 className='mb-4'> تم حفظ كلمة المرور الجديدة </h3>
                                    <i className="fa-solid fa-lock lock-icon"></i>
                                    <Link to="/account/login">
                                        <h4 className='mt-4'> سجل دخولك الان <i className="fa-solid fa-right-to-bracket fa-rotate-180 me-1" style={{ color: "#a1cefa" }}></i></h4>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
