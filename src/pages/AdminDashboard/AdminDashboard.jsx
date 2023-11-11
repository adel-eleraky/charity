/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/AdminDashboard.css"
import './js/AdminDashboard.js'
import { Link, Outlet, useLocation } from 'react-router-dom'

function AdminDashboard() {

    const [route, setRoute] = React.useState("")
    const location = useLocation()

    const routes = {
        "/admin-dashboard": "الصفحة الرئيسية",
        "/admin-dashboard/users": "المتبرعين",
        "/admin-dashboard/charities": "الجمعيات الخيرية"
    }

    React.useEffect(() => {

        setRoute(routes[location.pathname])

    }, [location.pathname])

    return (
        <div className="admin-dashboard">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="sidebar-column col-lg-3 col-xl-2 p-0">
                        <div className="sidebar-content position-relative text-white pe-5 pt-5">
                            <i className="close-sidebar fa-solid fa-xmark fs-1 d-none position-absolute"></i>
                            <div className="admin-details d-flex align-items-center gap-15 mb-5">
                                <img src="/images/admin-img.png" alt="" className="img-fluid" />
                                <div><span className="">Admin</span><br />3dola</div>
                            </div>
                            <div className="tabs d-flex flex-column gap-20 text-white">
                                <Link to=""> <i className="bi bi-house-door fs-4 ms-2"></i> الصفحة الرئيسية</Link>
                                <Link to="users"> <i className="bi bi-person fs-4 ms-2"></i> المتبرعين </Link>
                                <Link to="charities"> <i className="fa-solid fa-people-group fs-4 ms-2 "></i>الجمعيات الخيرية</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 col-xl-10 p-0">
                        <div className="main-content">
                            <div className="dashboard-nav d-flex  align-items-center p-3 pe-4 shadow">
                                <i className="sidebar-toggler fa-solid fa-bars fs-4 ms-4 d-none"></i>
                                <div className="ms-auto fs-6 fw-bold"> لوحة التحكم / <span className='fw-light'>{route}</span>  </div>
                                <span className='ms-4'><img src="/images/Calendar.png" alt="" className="img-fluid" /> Wed, 17 May </span>
                                <button type="button" className="btn btn-primary position-relative p-0">
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
