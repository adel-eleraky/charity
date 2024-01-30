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
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    أقسام التبرع
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className='d-flex flex-column'>
                                        <a data-bs-toggle="collapse" href="#div1" role="button" aria-expanded="false" aria-controls="div1">
                                            <span>صدقات</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                        </a>
                                        <div className="collapse" id="div1">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <a data-bs-toggle="collapse" href="#div2" role="button" aria-expanded="false" aria-controls="div2">
                                            <span>زكات</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                        </a>
                                        <div className="collapse" id="div2">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <a data-bs-toggle="collapse" href="#div3" role="button" aria-expanded="false" aria-controls="div3">
                                            <span>كفارات</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                        </a>
                                        <div className="collapse" id="div3">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                        <a data-bs-toggle="collapse" href="#div4" role="button" aria-expanded="false" aria-controls="div4">
                                            <span>اضاحى</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                        </a>
                                        <div className="collapse" id="div4">
                                            <div className="card card-body">
                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="links py-5">
                        <Link to="" >الرئيسية </Link>
                        <Link to="cases" >كل الحالات</Link>
                        <Link to="" > من نحن </Link>
                        <Link to="" > تواصل معنا  </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavOffcanvas
