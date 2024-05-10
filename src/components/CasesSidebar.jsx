/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CasesSidebar.css"


function CasesSidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-filter rounded p-3 mb-3">
                    <h4 className='mb-4 fw-bold'> فلترة حسب : </h4>
                    <div className="categories py-3 ms-2 mb-3 border-top border-black border-3">
                        <h5 className='mb-3 fw-bold'> نوع الحالة </h5>
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent border-0 active"> كل الحالات </li>
                            <li className="list-group-item bg-transparent border-0"> كفالة ايتام </li>
                            <li className="list-group-item bg-transparent border-0"> غارمات </li>
                            <li className="list-group-item bg-transparent border-0"> مرضى </li>
                        </ul>
                    </div>
                    <div className="price py-3 ms-2 mb-3 border-top border-black border-3">
                        <h5 className='mb-3 fw-bold'>الاموال المطلوبة</h5>
                        <div className="inputs d-flex justify-content-between gap-15">
                            <input type="number" className="form-control" placeholder="From" />
                            <input type="number" className="form-control" placeholder="To" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CasesSidebar
