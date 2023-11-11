/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation } from 'react-router-dom'
import "./css/NavBar.css"

function NavBar() {

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
        <>
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
        </>
    )
}

export default NavBar
