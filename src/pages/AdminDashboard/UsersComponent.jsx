/* eslint-disable no-unused-vars */
import React from 'react'
import "./css/UsersComponent.css"

function UsersComponent() {
    return (
        <div className="users-component p-5" dir='ltr'>
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
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Donations count</th>
                            <th scope="col">OverAll Donations </th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>3dola</td>
                            <td>3dola@gmail.com</td>
                            <td>011 بس</td>
                            <td>مبعدش</td>
                            <td>100 بلبل اخضر</td>
                            <td className='d-flex gap-15'>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3dola</td>
                            <td>3dola@gmail.com</td>
                            <td>011 بس</td>
                            <td>مبعدش</td>
                            <td>100 بلبل اخضر</td>
                            <td className='d-flex gap-15'>
                                <button className="btn btn-primary">View</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3dola</td>
                            <td>3dola@gmail.com</td>
                            <td>011 بس</td>
                            <td>مبعدش</td>
                            <td>100 بلبل اخضر</td>
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

export default UsersComponent
