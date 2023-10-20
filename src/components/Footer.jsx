/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Footer.css"

function Footer() {
    return (
        <>
            <footer className='first-footer border-bottom'>
                <div className="container">
                    <div className="row py-3 align-items-center">
                        <div className="col-12 col-md-6">
                            <div className='fs-2 fw-bold mb-3 mb-md-0'>اشترك فى النشرة الاخبارية</div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group ">
                                <input type="text" className="form-control " placeholder="بريدك الالكترونى" aria-label="بريدك الالكترونى" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text subscribe-span" id="basic-addon2"><button className='btn '>اشترك</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='second-footer'>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-12 col-sm-8 col-md-6 col-xl-4 mb-3">
                            <h2>عن المنصة</h2>
                            <div className="content">
                                منصة سبل من افضل المنصات التى تقوم بجمع التبرعات الرقمية. تبرع الان وساهم فى احداث فارق فى حياة الآخرين.
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-xl-2 mb-3">
                            <h2>حسابى</h2>
                            <ul className="list-unstyled">
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>حسابى</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>تبرعاتى </li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>سلة مشتريات</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-xl-2 mb-3">
                            <h2>روابط مهمة</h2>
                            <ul className="list-unstyled">
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>من نحن</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>سياسية الخصوصية</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>الشروط و الاحكام</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>الدعم الفنى</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-xl-2 mb-3">
                            <h2>تواصل معنا</h2>
                            <ul className="list-unstyled">
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>واتساب: 01554138144</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>موبايل: 01554138144</li>
                                <li> <i className="bi bi-chevron-double-left ms-2"></i>البريد:  3dola@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-xl-2 mb-3">
                            <h2>تابعنا على</h2>
                            <div className="social-icons d-flex mb-3">
                                <i className="bi bi-facebook fs-2 ms-3"></i>
                                <i className="bi bi-facebook fs-2 ms-3"></i>
                                <i className="bi bi-facebook fs-2 ms-3"></i>
                            </div>
                            <div className="mobile-apps ">
                                <h3 className='mb-4'>تطبيقات الجوال</h3>
                                <div className="google-app d-flex  mb-2 rounded p-2 border">
                                    <p>لتحميل التطبيق
                                    على اندرويد</p>
                                    <img src="images/google.png" alt="" className="img-fluid float-left" />
                                </div>
                                <div className="google-app d-flex  rounded p-2 border">
                                    <p>لتحميل التطبيق
                                    على اندرويد</p>
                                    <img src="images/google.png" alt="" className="img-fluid float-left" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="third-footer py-3 text-center">
                <p className='m-0'>جميع الحقوق محفوظة لمنصة سبل برئاسة البشمهندس عدوله &copy; 2023</p>
            </footer>
        </>
    )
}

export default Footer
