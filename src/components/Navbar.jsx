/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Navbar.css"
import { Link } from 'react-router-dom'
import NavOffcanvas from './NavOffcanvas'
import { useSelector } from 'react-redux'

function Navbar() {

    const cartItemsLength = useSelector(state => state.casesCart).length

    return (
        <>
            <div className="first-nav ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-4 col-md-2">
                            <div className='d-flex'>
                                <button className="btn btn-primary navbar-toggler d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navOffcanvas" aria-controls="navOffcanvas"><i className="fa-solid fa-bars fs-2 ms-3" style={{ color: "#7b5309 "}}></i></button>
                                <Link to="/">
                                    <img src="/images/Logo.png" alt="" className="img-fluid logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-8 nav-links-col">
                            <ul className='nav-links d-flex justify-content-center m-0 p-0'>
                                <Link to="cases" className='nav-link'>
                                    <li className="mx-3">
                                        الحالات
                                    </li>
                                </Link>
                                <Link to="cases" className='nav-link'>
                                    <li className="mx-3">
                                        تواصل معنا
                                    </li>
                                </Link>
                                <Link to="about-us" className='nav-link'>
                                    <li className="mx-3">
                                        من نحن
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-4 col-md-2 ">
                            <div className="d-flex justify-content-end align-items-center">
                                <Link to="account" className="nav-link acc_link d-flex align-items-center justify-content-center" href="#"> <i className="fa-regular fa-user acc_logo fs-3" style={{ color: "#2b373d" }}></i></Link>
                                <Link to="cart">
                                    <div className='position-relative'>
                                        <img src="/images/cart.png" alt="" className="img-fluid cart_logo" />
                                        <span className="position-absolute badge rounded-pill">
                                            {cartItemsLength}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-nav py-3">
                <div className="container">
                    <div className='d-flex justify-content-center m-0 p-0'>
                        <Link to="zakat" className="category-link mx-4">
                            دفع الزكاة
                        </Link>
                        <Link to="donations" className='category-link mx-4'>
                            قنوات التبرع
                        </Link>
                        <Link to="used" className="category-link mx-4">
                            تبرع بالمستعمل
                        </Link>
                        <Link to="report-case" className="category-link mx-4">
                            ابلاغ عن حالة
                        </Link>
                    </div>
                </div>
            </div>
            <NavOffcanvas />
        </>
    )
}

export default Navbar
