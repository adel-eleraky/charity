/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AdminDashboard.css"
import { Link, Outlet, useLocation } from 'react-router-dom'

function AdminDashboard() {

    const [route, setRoute] = React.useState("")
    const location = useLocation()

    const routes = {
        "/admin-dashboard": "الصفحة الرئيسية",
        "/admin-dashboard/users": "المستخدمين",
        "/admin-dashboard/charities": "الجمعيات الخيرية"
    }

    React.useEffect(() => {

        setRoute(routes[location.pathname])

    }, [location.pathname])

    return (
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
                                <Link to="users"> <i className="bi bi-person fs-4 ms-2"></i>المستخدمين </Link>
                                <Link to="charities"> <i className="fa-solid fa-people-group fs-4 ms-2 "></i>الجمعيات الخيرية</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-10 p-0">
                        <div className="main-content">
                            <div className="dashboard-nav d-flex  align-items-center p-3 shadow">
                                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
                                <div className="ms-auto fs-3 fw-bold"> لوحة التحكم / {route}  </div>
                                <span className='mx-5'><img src="/images/Calendar.png" alt="" className="img-fluid" /> Wednesday, 17 May 2023</span>
                                <button type="button" className="btn btn-primary position-relative">
                                    <i className="bi bi-bell fs-4 mx-2"></i>
                                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                        99+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i className="bi bi-gear fs-4 mx-2"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-person-gear fs-4 ms-2"></i> تعديل الحساب</a></li>
                                        <li><hr /></li>
                                        <li><a className="dropdown-item" href="#"> <i className="bi bi-box-arrow-left fs-4 mx-2"></i> تسجيل الخروج </a></li>
                                    </ul>
                                </div>
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
