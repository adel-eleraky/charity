/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {


    return (
        <>
            <div className="sidebar-content position-relative text-white pe-5 pt-5">
                <i className="close-sidebar fa-solid fa-xmark fs-1 d-none position-absolute"></i>
                <div className="admin-details d-flex align-items-center gap-15 mb-5">
                    <img src="/images/admin-img.png" alt="" className="img-fluid" />
                    <div><span className="">Charity Admin</span><br />3dola</div>
                </div>
                <div className="links d-flex flex-column gap-20 text-white">
                    <NavLink to="home" className={({isActive}) => isActive ? "active" : ""}> <i className="bi bi-house-door fs-4 ms-2"></i> الصفحة الرئيسية</NavLink>
                    <NavLink to="cases" className={({isActive}) => isActive ? "active" : ""}> <i className="fa-solid fa-hand-holding-medical fs-4 ms-2"></i> الحالات </NavLink>
                </div>
            </div>
        </>
    )
}

export default SideBar
