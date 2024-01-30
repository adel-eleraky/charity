/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Register.css"
import { Link } from 'react-router-dom'

function Register() {

    const [role, setRole] = React.useState("user");


    return (
        <div className="register-page py-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-center img-column">
                        <img src={`/images/${role === "user" ? "individual" : "organization"}.png`} alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="content w-75 mx-auto">
                            <h2 className='text-center mb-4'> انشاء حساب </h2>
                            <form method='post'>
                                <label for="exampleFormControlInput1" className="form-label">اسم المستخدم </label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-regular fa-user"></i></span>
                                    <input type="text" className="form-control rounded-0 rounded-start" placeholder=" ادخل اسم المستخدم" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <label for="exampleFormControlInput1" className="form-label">بريدك الالكترونى</label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-regular fa-envelope"></i></span>
                                    <input type="text" className="form-control rounded-0 rounded-start" placeholder="ادخل بريدك الالكترونى" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <label for="exampleFormControlInput1" className="form-label">كلمة المرور </label>
                                <div className="input-group mb-4">
                                    <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                    <input type="text" className="form-control rounded-0 rounded-start" placeholder="ادخل كلمة المرور" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="form-check mb-3">
                                    <input onClick={() => setRole("user")} className="form-check-input ms-2 float-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        انشاء حساب (متبرع)
                                    </label>
                                </div>
                                <div className="form-check mb-4">
                                    <input onClick={() => setRole("organization")} className="form-check-input ms-2 float-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        انشاء حساب كجمعية خيرية
                                    </label>
                                </div>
                                {role === "organization" &&
                                    <div className='mb-4'>
                                        <label htmlFor="formFileLg" className="form-label">مستندات الجمعية</label>
                                        <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                    </div>
                                }
                                <button className='btn btn-dark d-block w-50 py-2 mb-4 mx-auto fs-4'>  انشاء حساب</button>
                            </form>
                            <h5 className='mb-4 text-center'> انشاء حساب باستخدام</h5>
                            <div className="social-icons d-flex gap-15 justify-content-center mb-4">
                                <div className="facebook-icon bg-white text-dark py-1 px-4 rounded"><img src="/images/facebook_icon.svg" alt="" className="img-fluid" /></div>
                                <div className="google-icon bg-white text-dark py-1 px-4 rounded"><img src="/images/google_icon.svg" alt="" className="img-fluid" /></div>
                                <div className="apple-icon bg-white text-dark py-1 px-4 rounded"><img src="/images/apple_icon.png" alt="" className="img-fluid" /></div>
                            </div>
                            <div>
                                <Link to="/account/login" className='text-white d-block text-center mb-3'> لديك حساب ؟</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
