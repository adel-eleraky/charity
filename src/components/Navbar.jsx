/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/Navbar.css"
import { Link } from 'react-router-dom'
import NavOffcanvas from './NavOffcanvas'

function Navbar() {
    return (
        <>
            <div className="first-nav py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className='d-flex'>
                                <button className="btn btn-primary navbar-toggler d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navOffcanvas" aria-controls="navOffcanvas"><i className="fa-solid fa-bars fs-2 ms-3 text-white"></i></button>
                                <img src="/images/Logo.png" alt="" className="img-fluid logo" />
                            </div>
                        </div>
                        <div className="col-8">
                            <ul className='nav-links d-flex justify-content-center m-0 p-0'>
                                <li className="mx-3">
                                    <a className="nav-link" aria-current="page" href="#">الحالات</a>
                                </li>
                                <li className="mx-3">
                                    <a className="nav-link" aria-current="page" href="#">تواصل معنا</a>
                                </li>
                                <li className="mx-3">
                                    <a className="nav-link" aria-current="page" href="#">من نحن</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <div className="d-flex">
                                <Link to="account" className="nav-link acc_link ps-2" href="#"> <img src="/images/acc-icon.png" alt="" className="acc_logo" /></Link>
                                <div className='position-relative'>
                                    <i className="bi bi-cart3 cart_logo"></i>
                                    <span className="position-absolute badge rounded-pill">
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-nav py-3">
                <div className="container">
                    <ul className='d-flex justify-content-center m-0 p-0'>
                        <li className="mx-4">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                زكاة
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="mx-4">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                صدقات
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="mx-4">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                كفارات
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="mx-4">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                اضاحى
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="mx-4">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                تبرع بالدم
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <NavOffcanvas />
        </>
    )
}

export default Navbar
