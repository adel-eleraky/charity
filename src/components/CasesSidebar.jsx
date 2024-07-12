/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./css/CasesSidebar.css"
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCases } from '../rtk/features/CasesSlice'


function CasesSidebar() {

    const [mainType , setMainType] = useState()
    const [subType , setSubType] = useState()


    console.log(mainType , subType)

    const dispatch = useDispatch()

    const handleActiveItems = (e) => {

        setMainType(e.target.dataset.category)
        const items = document.querySelectorAll(".category")
        items.forEach(item => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
    }

    let endpoint = `/charities/allCases`
    if(mainType){
        endpoint += `?mainType=${mainType}`
    }

    useEffect(() => {
        console.log(endpoint)
        dispatch(getCases(endpoint))

    }, [mainType , subType])

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-filter rounded p-3 mb-3">
                    <h4 className='mb-4 fw-bold'> فلترة حسب : </h4>
                    <div className="categories py-3 ms-2 mb-3 border-top border-black border-3">
                        <h5 className='mb-3 fw-bold'> نوع الحالة </h5>
                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                            <nav className="nav nav-pills flex-column">
                                <Link to='/cases'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type active" data-category=''> كل الحالات </p>
                                </Link>
                                <Link to='/cases/Sadaqa'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type " data-category='Sadaqa'> صدقات </p>
                                </Link>
                                <Link to='/cases/Zakah'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type" data-category='Zakah'> زكاة </p>
                                </Link>
                                <Link to='/cases/Kafarat'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type" data-category='Kafarat'> كفارة </p>
                                </Link>
                                <Link to='/cases/Adahi'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type" data-category='Adahi'> اضاحى </p>
                                </Link>
                                <Link to='/cases/BloodDonation'>
                                    <p onClick={handleActiveItems}  className="nav-link category main-type" data-category='BloodDonation'> تبرع بالدم </p>
                                </Link>
                                <Link to='/cases/Campaigns'>
                                    <p onClick={handleActiveItems} className="nav-link category main-type" data-category='Campaigns'> حملات  </p>
                                </Link>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CasesSidebar
