import React from 'react'
import CasesSidebar from '../components/CasesSidebar';
import "./css/Cases.css"
import CampaignCard from '../components/CampaignCard';

function Cases() {

    return (
        <>
            <div className="cases-page" >
                <div className="container py-5" >
                    <div className="row" >
                        <div className="sm-screen-filter dropdown mb-4 ">
                            <button className="btn btn-secondary btn-lg w-25 dropdown-toggle text-dark border-0" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                Filters
                            </button>
                            <ul className="dropdown-menu w-50" dir='rtl'>
                                <li>
                                    <div className="categories bg-white rounded p-3 mb-3">
                                        <h3 className='mb-4 fw-bold'>اقسام التبرع</h3>
                                        <ul className="list-unstyled">
                                            <li className='mb-4 ms-2 fw-light fs-5'>
                                                <a data-bs-toggle="collapse" href="#div1" role="button" aria-expanded="false" aria-controls="div1">
                                                    <span className='ms-2'>صدقات</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                                </a>
                                                <div className="collapse" id="div1">
                                                    <div className="card card-body">
                                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='mb-4 ms-2 fw-light fs-5'>
                                                <a data-bs-toggle="collapse" href="#div2" role="button" aria-expanded="false" aria-controls="div2">
                                                    <span className='ms-2'>زكاة</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                                </a>
                                                <div className="collapse" id="div2">
                                                    <div className="card card-body">
                                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                    </div>
                                                </div>
                                            </li>
                                            <li className='mb-4 ms-2 fw-light fs-5'>
                                                <a data-bs-toggle="collapse" href="#div3" role="button" aria-expanded="false" aria-controls="div3">
                                                    <span className='ms-2'>تبرع بالدم</span> <i className="fa-solid fa-arrow-down-wide-short"></i>
                                                </a>
                                                <div className="collapse" id="div3">
                                                    <div className="card card-body">
                                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="main-filter  bg-white rounded p-3 mb-3">
                                        <h5 className='mb-4'>Filter By</h5>
                                        <div className="price py-3 ms-2 mb-3 border-top border-3">
                                            <h6 className='mb-3'>الاموال المطلوبة</h6>
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
                            <div className="main-content text-white rounded p-3">
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
                                            <CampaignCard />
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CampaignCard />
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xxl-4">
                                            <CampaignCard />
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
