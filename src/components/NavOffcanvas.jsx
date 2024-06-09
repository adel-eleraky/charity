/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "./css/NavOffcanvas.css"

function NavOffcanvas() {

    return (
        <>
            <div className="offcanvas offcanvas-end" data-bs-scroll="false" tabIndex="-1" id="navOffcanvas" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="links py-3">
                        <Link to="/" >الرئيسية </Link>
                        <Link to="cases" > الحالات</Link>
                        <Link to="donations" > قنوات التبرع </Link>
                        <Link to="zakat" >  دفع الزكاة </Link>
                        <Link to="used" > تبرع بالمستعمل   </Link>
                        <Link to="report-case" > ابلاغ عن حالة  </Link>
                        <Link to="" > تواصل معنا  </Link>
                        <Link to="about-us" > من نحن </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavOffcanvas
