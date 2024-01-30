import React from 'react'
import "./css/CasesSidebar.css"


function CasesSidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-filter text-white rounded p-3 mb-3">
                    <h5 className='mb-4'>Filter By</h5>
                    <div className="price py-3 ms-2 mb-3 border-top border-3">
                        <h6 className='mb-3'>الاموال المطلوبة</h6>
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
