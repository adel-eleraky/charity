/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CasesSidebar from '../components/CasesSidebar';
import "./css/Cases.css"
import CampaignCard from '../components/CampaignCard';
import CaseCard from './../components/CaseCard';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCases } from '../rtk/features/CasesSlice';

function Cases() {


    const { type } = useParams()
console.log(type)
    const [mainType , setMainType] = useState(type ? type : '')
    const [subType , setSubType] = useState()
    console.log(mainType , subType)


    

    const [page, setPage] = useState('')
    const dispatch = useDispatch()

    const { cases, campaigns } = useSelector(state => state.cases)

    const handlePageChange = (event, page) => {
        // Update the URL with query string parameter
        const url = new URL(window.location.href);
        url.searchParams.set('page', page);
        window.history.pushState({}, '', url);
        setPage(page);
    };

    const handleActiveItems = (e) => {

        setMainType(e.target.dataset.category)
        const items = document.querySelectorAll(".category")
        items.forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
    }

    
    const casesCards = cases && cases.map(el => {
        return (
            <div className="col-md-12 col-lg-6 col-xxl-4" key={el.id}>
                <CaseCard
                    img={el.coverImage}
                    title={el.title}
                    description={el.description}
                    targetDonationAmount={el.targetDonationAmount}
                    currentDonationAmount={el.currentDonationAmount}
                />
            </div>
        )
    })

    console.log(mainType)
    let endpoint = `/charities/allCases`
    if(mainType){
        endpoint += `?mainType=${mainType}`
    }
    if(page) {
        endpoint += `&page=${page}`
    }

    console.log(endpoint)
    useEffect(() => {
        dispatch(getCases(endpoint))
    }, [page , mainType, subType])

    console.log(cases)
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
                                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                                            <nav className="nav nav-pills flex-column">
                                                <Link to='/cases'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === '' && 'active'}`} data-category=''> كل الحالات </p>
                                                </Link>
                                                <Link to='/cases/Sadaqa'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'Sadaqa' && 'active'}`} data-category='Sadaqa'> صدقات </p>
                                                </Link>
                                                <Link to='/cases/Zakah'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'Zakah' && 'active'}`} data-category='Zakah'> زكاة </p>
                                                </Link>
                                                <Link to='/cases/Kafarat'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'Kafarat' && 'active'}`} data-category='Kafarat'> كفارة </p>
                                                </Link>
                                                <Link to='/cases/Adahi'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'Adahi' && 'active'}`} data-category='Adahi'> اضاحى </p>
                                                </Link>
                                                <Link to='/cases/BloodDonation'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'BloodDonation' && 'active'}`} data-category='BloodDonation'> تبرع بالدم </p>
                                                </Link>
                                                <Link to='/cases/Campaigns'>
                                                    <p onClick={handleActiveItems} className={`nav-link category main-type ${mainType === 'Campaigns' && 'active'}`} data-category='Campaigns'> حملات  </p>
                                                </Link>
                                            </nav>
                                        </nav>
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
                                <div className="products-list">
                                    <div className="row">
                                        {casesCards}
                                    </div>
                                </div>
                                <div dir='ltr' className="d-flex justify-content-center">
                                    <Pagination count={5} onChange={handlePageChange} ></Pagination>
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
