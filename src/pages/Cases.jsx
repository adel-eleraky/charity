/* eslint-disable no-unused-vars */
import React from 'react'
import CasesSidebar from '../components/CasesSidebar';
import "./css/Cases.css"
import CampaignCard from '../components/CampaignCard';
import CaseCard from './../components/CaseCard';

function Cases() {

    return (
        <>
            <div className="cases-page" >
                <div className="container py-5" >
                    <div className="row" >
                        <div className="sm-screen-filter dropdown mb-4 ">
                            <button className="btn btn-secondary btn-lg w-25 dropdown-toggle text-dark border-0" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                فلترة
                            </button>
                            <ul className="dropdown-menu w-50 text-end" dir='rtl'>
                                <li>
                                    <div className="categories py-3 ms-2 mb-3">
                                        <h4 className='mb-3 fw-bold'> نوع الحالة </h4>
                                        <ul className="list-group">
                                            <li className="list-group-item bg-transparent border-0 active"> كل الحالات </li>
                                            <li className="list-group-item bg-transparent border-0"> كفالة ايتام </li>
                                            <li className="list-group-item bg-transparent border-0"> غارمات </li>
                                            <li className="list-group-item bg-transparent border-0"> مرضى </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="money-filter bg-white rounded p-3 mb-3">
                                        <div className="price py-3 ms-2 mb-3 border-top border-black border-3">
                                            <h4 className='mb-3 fw-bold'>الاموال المطلوبة</h4>
                                            <div className="inputs d-flex justify-content-between gap-15">
                                                <input type="number" className="form-control" placeholder="From" />
                                                <input type="number" className="form-control" placeholder="To" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="sidebar-column col-4 col-lg-3">
                            <CasesSidebar />
                        </div>
                        <div className="products-list-column col-8 col-lg-9">
                            <div className="main-content rounded p-3">
                                <div className="heading mb-4 d-flex align-items-center">
                                    <h6 className='mb-0 me-3'> رتب حسب: </h6>
                                    <select className="form-select w-25 me-3 ms-auto" aria-label="Default select example">
                                        <option >Open this select menu</option>
                                        <option value="1">Alphabetically, A-Z</option>
                                        <option value="1">Alphabetically, Z-A</option>
                                        <option value="2">Price, high to low</option>
                                        <option value="2">Price, low to high</option>
                                        <option value="3">Created, old to new</option>
                                        <option value="3">Created, new to old</option>
                                    </select>
                                    <h6 className='mb-0'>20 حالة</h6>
                                </div>
                                <div className="products-list">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CaseCard
                                                img={"case-img"}
                                                title={" تبرع بالملابس "}
                                                description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                            />
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CaseCard
                                                img={"case-img"}
                                                title={" تبرع بالملابس "}
                                                description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                            />
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CaseCard
                                                img={"case-img"}
                                                title={" تبرع بالملابس "}
                                                description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                            />
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CaseCard
                                                img={"case-img"}
                                                title={" تبرع بالملابس "}
                                                description={" هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان "}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cases
