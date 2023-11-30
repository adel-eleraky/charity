/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CasesComponent.css"

function CasesComponent() {
    return (
        <div className="cases-component p-5" dir='ltr'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <div className='d-flex align-items-center'>  <span className='me-3 fw-bold fs-5'>Search</span> <input type='text' className='form-control' placeholder='Enter Name' /></div>
                <h3 dir='rtl'>   عدد المتبرعين : 350 </h3>
            </div>
            <div className="table-container">
                <table className="table shadow">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Needed Money</th>
                            <th scope="col">Collected Money</th>
                            <th scope="col">Remaining Money</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>سعد محمد</td>
                            <td>محتاج فلوس كتير</td>
                            <td>محدش معبره</td>
                            <td> باقى مبلغ محترم يا ولاد الحلال</td>
                            <td className='d-flex gap-15'>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>سعد محمد</td>
                            <td>محتاج فلوس كتير</td>
                            <td>محدش معبره</td>
                            <td> باقى مبلغ محترم يا ولاد الحلال</td>
                            <td className='d-flex gap-15'>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>سعد محمد</td>
                            <td>محتاج فلوس كتير</td>
                            <td>محدش معبره</td>
                            <td> باقى مبلغ محترم يا ولاد الحلال</td>
                            <td className='d-flex gap-15'>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CasesComponent
