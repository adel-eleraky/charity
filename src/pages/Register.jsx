/* eslint-disable no-unused-vars */
/**Returned data for Register user
 * {
    "_id": "65ba33130cec646d08530e63",
    "name": {
        "firstName": "saul",
        "lastName": "momo"
    },
    "email": "saadmu7ammad71171@gmail.com"
}
 */
import React, { useEffect, useState } from "react";
import "./css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../rtk/features/userAuthSlice";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup"

const initialValues = {
    name: "",
    email: "",
    password: "",
    role: ""
}

const onSubmit = values => {
    // console.log(values)
}

const validationSchema = yup.object({
    firstName: yup.string().required("من فضلك ادخل اسم المستخدم علشان ممدش ايدى عليك"),
    lastName: yup.string().required("من فضلك ادخل اسم المستخدم علشان ممدش ايدى عليك"),
    email: yup.string().required("من فضلك ادخل بريدك الالكترونى علشان ممدش ايدى عليك").email("يبنى دخل ايميل عدل ابوس ايدك"),
    password: yup.string().required("من فضلك ادخل كلمة المرور علشان ممدش ايدى عليك"),
    role: yup.string().required("يبنى تعبتنى معاك"),
    phone: yup.number(),

})
function Register() {

    const [role, setRole] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { registerStatus } = useSelector((store) => store.userAuth);
    function handleRegister() {
        // some user Data handling
        const registerData = {
            name: {
                firstName: userName,
                lastName: userName,
            },
            email,
            password,
            gender: "male",
            phone: "01030931139",
            location: { governorate: "Helwan" },
        };
        console.log(registerData);
        if (role === "user") dispatch(registerUser(registerData));
    }

    useEffect(() => {
        if (registerStatus === "finished") {
            navigate("/account/login");
        }
    }, [registerStatus, navigate]);

    return (
        <div className="register-page py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center img-column">
                        <img
                            src={`/images/${role === "user" ? "individual" : "organization"
                                }.png`}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content w-75 mx-auto">
                            <h2 className="text-center mb-4"> انشاء حساب </h2>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                            >
                                {({ values, errors, touched }) => (
                                    <Form method="post" className="needs-validation" noValidate >
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
                                                name="firstName"
                                                className={`form-control ${touched.firstName && errors.firstName && "is-invalid"} rounded-0 rounded-start`}
                                                placeholder="ادخل الاسم الأول"
                                                aria-label="First Name"
                                                aria-describedby="basic-addon1"
                                            />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback d-block fs-6" />
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
                                                name="lastName"
                                                className={`form-control ${touched.lastName && errors.lastName && "is-invalid"} rounded-0 rounded-start`}
                                                placeholder="ادخل اسم العائلة"
                                                aria-label="Last Name"
                                                aria-describedby="basic-addon1"
                                            />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback d-block fs-6" />
                                        </div>
                                        <label htmlFor="email" className="form-label">
                                            بريدك الالكترونى
                                        </label>
                                        <div className="input-group has-validation mb-4">
                                            <span
                                                className="input-group-text  rounded-0 rounded-end"
                                                id="basic-addon1"
                                            >
                                                <i className="fa-regular fa-envelope"></i>
                                            </span>
                                            <Field
                                                type="text"
                                                id="email"
                                                name="email"
                                                className={`form-control ${touched.email && errors.email && "is-invalid"} rounded-0 rounded-start`}
                                                placeholder="ادخل بريدك الالكترونى"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback d-block fs-6" />
                                        </div>
                                        <label htmlFor="password" className="form-label">
                                            كلمة المرور
                                        </label>
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
                                        <div className="form-check mb-3">
                                            <Field
                                                onClick={() => setRole("user")}
                                                className={`form-check-input ${touched.role && errors.role && "is-invalid"} ms-2 float-none`}
                                                type="radio"
                                                name="role"
                                                value="user"
                                                id="user-role"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="user-role"
                                            >
                                                انشاء حساب (متبرع)
                                            </label>
                                        </div>
                                        <div className="form-check mb-4">
                                            <Field
                                                onClick={() => setRole("organization")}
                                                className={`form-check-input ${touched.role && errors.role && "is-invalid"} ms-2 float-none`}
                                                type="radio"
                                                name="role"
                                                value="organization"
                                                id="org-role"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="org-role"
                                            >
                                                انشاء حساب كجمعية خيرية
                                            </label>
                                        </div>
                                        <ErrorMessage name="role" component="div" className="invalid-feedback d-block fs-6 mb-4" />
                                        {role === "organization" &&
                                            (
                                                <div className="mb-4">
                                                    <label htmlFor="formFileLg" className="form-label">
                                                        مستندات الجمعية
                                                    </label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        id="formFileLg"
                                                        type="file"
                                                    />
                                                </div>
                                            )
                                        }
                                        {role === "user" &&
                                            (
                                                <div className="mb-4">
                                                    <label htmlFor="phone" className="form-label">
                                                        رقم الهاتف
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span
                                                            className="input-group-text  rounded-0 rounded-end"
                                                            id="basic-addon1"
                                                        >
                                                            <i className="fa-solid fa-phone"></i>
                                                        </span>
                                                        <Field
                                                            type="number"
                                                            id="phone"
                                                            name="phone"
                                                            className={`form-control ${touched.phone && errors.phone && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder="ادخل رقم الهاتف"
                                                            aria-label="Phone"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage name="phone" component="div" className="invalid-feedback d-block fs-6" />
                                                    </div>
                                                    <label htmlFor="governorate" className="form-label">
                                                        المحافظة
                                                    </label>
                                                    <Field
                                                        as="select"
                                                        id="governorate"
                                                        name="governorate"
                                                        className={`form-select ${touched.governorate && errors.governorate && "is-invalid"} mb-4`}
                                                        aria-label="Governorate"
                                                    >
                                                        <option value="">اختر المحافظة</option>
                                                        <option value="governorate1">محافظة 1</option>
                                                        <option value="governorate2">محافظة 2</option>
                                                    </Field>
                                                    <ErrorMessage name="governorate" component="div" className="invalid-feedback d-block fs-6" />
                                                    <label htmlFor="gender" className="form-label">
                                                        الجنس
                                                    </label>
                                                    <div className="form-check mb-4">
                                                        <Field
                                                            type="radio"
                                                            id="male"
                                                            name="gender"
                                                            value="male"
                                                            className={`form-check-input ${touched.gender && errors.gender && "is-invalid"} float-none ms-2`}
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
                                                            className={`form-check-input ${touched.gender && errors.gender && "is-invalid"} float-none ms-2`}
                                                        />
                                                        <label className="form-check-label" htmlFor="female">
                                                            أنثى
                                                        </label>
                                                    </div>
                                                    <ErrorMessage name="gender" component="div" className="invalid-feedback d-block fs-6" />
                                                </div>
                                            )
                                        }
                                        <button
                                            className="btn btn-dark d-block w-50 py-2 mb-4 mx-auto fs-4"
                                            onClick={handleRegister}
                                            type="submit"
                                        >
                                            انشاء حساب
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <h5 className="mb-4 text-center"> انشاء حساب باستخدام</h5>
                            <div className="social-icons d-flex gap-15 justify-content-center mb-4">
                                <div className="facebook-icon bg-white text-dark py-1 px-4 rounded">
                                    <img
                                        src="/images/facebook_icon.svg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="google-icon bg-white text-dark py-1 px-4 rounded">
                                    <img
                                        src="/images/google_icon.svg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="apple-icon bg-white text-dark py-1 px-4 rounded">
                                    <img
                                        src="/images/apple_icon.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                            <div>
                                <Link
                                    to="/account/login"
                                    className="text-white d-block text-center mb-3"
                                >
                                    {" "}
                                    لديك حساب ؟
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
