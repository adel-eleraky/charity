/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AdminDashboard.css"
import { Link } from 'react-router-dom'

function AdminDashboard() {

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    return (<>
        {popoverList}
        <div className="admin-dashboard">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-2 p-0">
                        <div className="sidebar text-white pe-5 pt-5">
                            <div className="admin-details d-flex align-items-center gap-15 mb-5">
                                <img src="/images/admin-img.png" alt="" className="img-fluid" />
                                <div><span className="">Subul</span><br />Admin</div>
                            </div>
                            <div className="tabs d-flex flex-column gap-20 text-white">
                                <Link to=""> <i className="bi bi-house-door fs-4 ms-2"></i> الصفحة الرئيسية</Link>
                                <Link to=""> <i className="bi bi-person fs-4 ms-2"></i>المستخدمين </Link>
                                <Link to=""> <i className="fa-solid fa-people-group fs-4 ms-2 "></i>الجمعيات الخيرية</Link>
                                <Link to=""> <i className="bi bi-person-gear fs-4 ms-2"></i>  تعديل الحساب</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 p-0">
                        <div className="main-content">
                            <div className="dashboard-nav d-flex  align-items-center p-3 shadow">
                                <div className="ms-auto fs-3 fw-bold">لوحة التحكم</div>
                                <span className='mx-2'><img src="/images/Calendar.png" alt="" className="img-fluid" /> Wednesday, 17 May 2023</span>
                                <i className="bi bi-bell fs-4 mx-2"></i>
                                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                                    <i className="bi bi-gear fs-4 mx-2"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminDashboard
