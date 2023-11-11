/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/CharitiesComponent.css"

function CharitiesComponent() {
    return (
        <div className="charities-component p-5" dir='ltr'>
            <div className="second-table mb-5">
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex align-items-center'>  <span className='me-3 fw-bold fs-5'>Search</span> <input type='text' className='form-control' placeholder='Enter Name' /></div>
                    <h3 dir='rtl'>   عدد الجمعيات فى انتظار القبول: 350 </h3>
                </div>
                <div className="table-container">
                    <table className="table shadow">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Num of Cases</th>
                                <th scope="col">Collected Donations</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="first-table">
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='d-flex align-items-center'>  <span className='me-3 fw-bold fs-5'>Search</span> <input type='text' className='form-control' placeholder='Enter Name' /></div>
                    <h3 dir='rtl'>   عدد الجمعيات المسجلة : 350 </h3>
                </div>
                <div className="table-container">
                    <table className="table shadow">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Num of Cases</th>
                                <th scope="col">Collected Donations</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>3dola organization</td>
                                <td>3dola.organization@gmail.com</td>
                                <td>012 بس</td>
                                <td>مش محتاجين مساعده من حد</td>
                                <td>الفلوس شغلتها فى مشروع كتاكيت و الكتاكيت ماتت</td>
                                <td className='d-flex gap-15'>
                                    <button className="btn btn-primary">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CharitiesComponent
