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
import { registerUser } from "../rtk/features/user/userAuthSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { registerCharity } from './../rtk/features/charity/charityAuthSlice';
import RegisterUser from "../components/RegisterUser";
import RegisterCharity from "../components/RegisterCharity";

function Register() {
  const { error, registerStatus: registerUserStatus, user } = useSelector(
    (store) => store.userAuth
  );

  const {registerStatus: registerCharityStatus,  error: errorCharity, charity } = useSelector(store => store.charityAuth)
  
  console.log('user' , registerUserStatus)
  console.log('charity' , registerCharityStatus)
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  if (registerUserStatus === "finished" || registerCharityStatus === "finished") {
    return navigate("/activateAccount");
  }

  const initialValues = {
    email: "",
    password: "",
    role: "",
    name: {
      firstName: "",
      lastName: "",
    },
    gender: "",
    phone: "",
    location: "",
    organizationName: "",
    organizationImage: "",
    organizationDescription: "",
    contactInfo: {
      websiteUrl: "www.org.com",
      email: "xsxsxs@gmail.com",
      phone: "01554138144",
    },
    charityInfo: {
      registeredNumber: "123",
      establishedDate: "2001-01-01",
    },
    currency: "AED"
  };

  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("ادخل بريدك الالكترونى")
      .email("ادخل بريد الكترونى"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "يجب أن تحتوي كلمة المرور على حروف كبيرة وصغيرة وأرقام ورموز وأن تكون طولها 8 أحرف على الأقل"
      )
      .required("ادخل كلمة السر"),
    role: yup
      .string()
      .required("اختار نوع الحساب")
      .oneOf(["user", "organization"], "نوع الحساب يجب ان يكون متبرع او جمعية"),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
      .required("ادخل رقم التليفون"),
    location: yup.string().required("ادخل المحافظة"),
  });

  if (role === "user") {
    validationSchema = validationSchema.concat(
      yup.object().shape({
        name: yup.object().shape({
          firstName: yup.string().required("ادخل اسمك الاول"),
          lastName: yup.string().required("ادخل اسم العائلة"),
        }),
        gender: yup.string().required("اختار نوع الجنس"),
      })
    );
  }
  if (role === "organization") {
    validationSchema = validationSchema.concat(
      yup.object().shape({
        organizationName: yup.string().required("ادخل اسم الجمعية"),
        organizationDescription: yup.string().required("ادخل وصف الجمعية"),
        organizationImage: yup.mixed()
        .test("fileType",  "يجب أن يكون الصورة من نوع png , jpg , jpeg", (value) => {
          return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        })
        .test("fileSize", "يجب أن يكون الصورة اقل من 5MB", (value) => {
          return value && value.size <= 5 * 1024 * 1024
        })
        .required("ادخل صورة الجمعية"),
      })
    );
  }

  const submitHandler = (values) => {
    console.log(values)
    let RegisterData = { email: values.email, password: values.password };
    if (values.role === "user") {
      RegisterData = {
        ...RegisterData,
        name: values.name,
        gender: values.gender,
        phone: values.phone,
        userLocation: { 
          governorate: values.location
        },
      };
      console.log(RegisterData);
      toast.promise(dispatch(registerUser(RegisterData)), {
        pending: "جارى التسجيل بياناتك",
        success: "تم التسجيل بنجاح",
        error: "لم يتم التسجيل",
      });
    }
    if (values.role === "organization") {
      RegisterData = {
        ...RegisterData,
        name: values.organizationName,
        image: values.organizationImage,
        description: values.organizationDescription,
        phone: values.phone,
        "charityLocation[governorate]": values.location,
        currency: "AED",
        "charityInfo[establishedDate]": "2001-01-01",
        "charityInfo[registeredNumber]": "123456789",
        "contactInfo[email]": "qyj9M@example.com",
        "contactInfo[phone]": "01554138144",
        "contactInfo[websiteUrl]": "https://www.example.com",
      };
      console.log('values: ',values)
      console.log(RegisterData);
      toast.promise(dispatch(registerCharity(RegisterData)), {
        pending: "جارى التسجيل بياناتك",
        success: "تم التسجيل بنجاح",
        error: "لم يتم التسجيل",
      });
      
    }
  };


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
            <div className="content w-75 mx-auto py-3 px-4 rounded">
              <h2 className="text-center mb-4"> انشاء حساب </h2>
              <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, setFieldValue }) => {
                  console.log("errors",errors)
                  return (
                    <Form method="post" className="needs-validation" noValidate encType="multipart/form-data">
                      
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
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control ${touched.email && errors.email && "is-invalid"
                            } rounded-0 rounded-start`}
                          placeholder="ادخل بريدك الالكترونى"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback d-block fs-6 fw-bold"
                        />
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
                          className={`form-control ${touched.password && errors.password && "is-invalid"
                            } rounded-0 rounded-start`}
                          placeholder="ادخل كلمة المرور"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback d-block fs-6 fw-bold"
                        />
                      </div>
                      <div className="form-check mb-3">
                        <Field
                          onClick={() => setRole("user")}
                          className={`form-check-input ${touched.role && errors.role && "is-invalid"
                            } ms-2 float-none`}
                          type="radio"
                          name="role"
                          value="user"
                          id="user-role"
                        />
                        <label className="form-check-label" htmlFor="user-role">
                          انشاء حساب (متبرع)
                        </label>
                      </div>
                      <div className="form-check mb-4">
                        <Field
                          onClick={() => setRole("organization")}
                          className={`form-check-input ${touched.role && errors.role && "is-invalid"
                            } ms-2 float-none`}
                          type="radio"
                          name="role"
                          value="organization"
                          id="org-role"
                        />
                        <label className="form-check-label" htmlFor="org-role">
                          انشاء حساب كجمعية خيرية
                        </label>
                      </div>
                      <ErrorMessage
                        name="role"
                        component="div"
                        className="invalid-feedback d-block fs-6 mb-4 fw-bold"
                      />
                      {role === "organization" && (
                        <RegisterCharity touched={touched} errors={errors} setFieldValue={setFieldValue}  />
                      )}
                      {role === "user" && (
                        <RegisterUser touched={touched} errors={errors} />
                      )}
                      {role && (
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
                              type="text"
                              id="phone"
                              name="phone"
                              className={`form-control ${touched.phone && errors.phone && "is-invalid"
                                } rounded-0 rounded-start`}
                              placeholder="ادخل رقم الهاتف"
                              aria-label="Phone"
                              aria-describedby="basic-addon1"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="invalid-feedback d-block fs-6 fw-bold"
                            />
                          </div>
                          <label htmlFor="governorate" className="form-label">
                            المحافظة
                          </label>
                          <Field
                            as="select"
                            id="governorate"
                            name="location"
                            className={`form-select ${touched.location?.governorate &&
                              errors.location?.governorate &&
                              "is-invalid"
                              }`}
                            aria-label="Governorate"
                          >
                            <option value="">اختر المحافظة</option>
                            <option value="Helwan"> حلوان </option>
                            <option value="cairo"> القاهرة </option>
                          </Field>
                          <ErrorMessage
                            name="location"
                            component="div"
                            className="invalid-feedback d-block fs-6 fw-bold"
                          />
                        </div>
                      )}
                      <button
                        className="submit-btn btn d-block w-50 py-2 mb-4 mx-auto fs-4"
                        type="submit"
                      >
                        انشاء حساب
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div>
                <Link
                  to="/account/login"
                  className="text-dark fs-5 fw-bold d-block text-center mb-3"
                >
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
