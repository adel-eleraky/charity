import React, { useState } from 'react'
import "./css/ResetPassword.css"
import { Link } from 'react-router-dom'

function ResetPassword() {

    const [formStatus, setFormStatus] = useState("notSubmitted")

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormStatus("submitted")
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
                                    <form action="" method='post' onSubmit={handleSubmit}>
                                        <label for="exampleFormControlInput1" className="form-label">كلمة المرور </label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                            <input type="password" className="form-control rounded-0 rounded-start" placeholder="كلمة المرور " aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <label for="exampleFormControlInput1" className="form-label"> تأكيد كلمة المرور  </label>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text  rounded-0 rounded-end" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                                            <input type="password" className="form-control rounded-0 rounded-start" placeholder=" تأكيد كلمة المرور  " aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <button className="btn d-block m-auto submit-btn fw-bold">  حفظ كلمة المرور </button>
                                    </form>
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
