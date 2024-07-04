/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import "./css/Used.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AddUsedItem } from '../rtk/features/UsedItemSlice'
function Used() {

    const { userProfile } = useSelector((store) => store.userProfile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUploadClick = (e) => {
        document.querySelector(".file-input").click()
    }

    const initialValues = {
        title: "",
        category: "",
        description: "",
        image: '',
        amount: "",
    }

    const validationSchema = yup.object().shape({
        title: yup.string().required("ادخل الاسم"),
        category: yup.string().required("ادخل الفئة").oneOf(["electronics", "clothes", "appliances", "furniture", "other"], "ادخل الفئة"),
        description: yup.string().required("ادخل وصف الحالة"),
        amount: yup.number().required("ادخل الكمية"),
        image: yup.mixed()
            .test("fileType", "يجب أن يكون الصورة من نوع png , jpg , jpeg", (value) => {
                return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
            })
            .test("fileSize", "يجب أن يكون الصورة اقل من 5MB", (value) => {
                return value && value.size <= 5 * 1024 * 1024
            })
            .required("ادخل صورة الحاجة المستعملة"),
    })

    const submitHandler = (values) => {

        // if (Object.keys(userProfile).length === 0) {
        //     toast.error(" يجب عليك تسجيل الدخول اولا ") 
        //     setTimeout(() => {
        //         return navigate("/account/login")
        //     }, 3000)
        // }
        console.log(values)
        dispatch(AddUsedItem(values))
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
                            <h3 className='text-center mb-4 position-relative fw-bold mx-auto' style={{ width: "350px" }}> التبرع بالحاجات المستعملة </h3>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={submitHandler}
                            >
                                {({ values, errors, touched, setFieldValue }) => {
                                    return (
                                        <Form method='post' className="needs-validation" noValidate>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="title" className="form-label">
                                                        اسم الحاجة المستعملة
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-regular fa-user"></i>
                                                        </span>
                                                        <Field
                                                            type="text"
                                                            id="title"
                                                            name="title"
                                                            className={`form-control ${touched.title && errors.title && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب اسم الحاجة المستملة "
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="title"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="amount" className="form-label">
                                                        الكمية
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            type="number"
                                                            id="amount"
                                                            name="amount"
                                                            className={`form-control ${touched.amount && errors.amount && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" ادخل الكمية "
                                                            aria-label="amount"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="amount"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly flex-wrap">
                                                <div className='input'>
                                                    <label htmlFor="category" className="form-label">
                                                        فئة الحاجة المستعملة
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-phone"></i>
                                                        </span>
                                                        <Field name="category" as="select" className={`form-select ${touched.category && errors.category && "is-invalid"} rounded-0 rounded-start`}>
                                                            <option value="">اختر فئة الحاجة المستعملة</option>
                                                            <option value="electronics">الكترونيات</option>
                                                            <option value="clothes">ملابس</option>
                                                            <option value="appliances">اجهزة</option>
                                                            <option value="furniture">اثاث</option>
                                                            <option value="other">اخرى</option>
                                                        </Field>
                                                        <ErrorMessage name="category" component="div" className="invalid-feedback d-block fs-6" />
                                                    </div>
                                                </div>
                                                <div className='input'>
                                                    <label htmlFor="description" className="form-label">
                                                        وصف الحاجة المستعملة
                                                    </label>
                                                    <div className="input-group has-validation mb-4">
                                                        <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1" >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <Field
                                                            as="textarea"
                                                            id="description"
                                                            name="description"
                                                            className={`form-control ${touched.description && errors.description && "is-invalid"} rounded-0 rounded-start`}
                                                            placeholder=" اكتب وصف الحاجة المستعملة "
                                                            aria-label="description"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                        <ErrorMessage
                                                            name="description"
                                                            component="div"
                                                            className="invalid-feedback d-block fs-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-2 text-center fw-600 border rounded w-50 mx-auto' onClick={handleUploadClick}> <img src="/images/upload-icon.png" alt="" className="img-fluid mx-2" />قم بارفاق صور الحاجة المستعملة
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    onChange={(e) => {
                                                        setFieldValue("image", e.currentTarget.files[0])
                                                    }}
                                                    className={`form-control ${touched.image && errors.image && "is-invalid"} file-input rounded-0 rounded-start d-none`}
                                                    aria-label="image"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="image"
                                                component="div"
                                                className="invalid-feedback d-block text-center fs-6 w-50 mx-auto"
                                            />
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
                <h2 className='text-center fw-bold  mb-4 position-relative mx-auto' style={{ width: "275px" }}> الحالات المتبرع بها  </h2>
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
