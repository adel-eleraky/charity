/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function ProtectedRoute() {

    const navigate = useNavigate()

    const {userProfile} = useSelector((state) => state.userProfile)
    console.log(userProfile)
    
    if(Object.keys(userProfile).length === 0) return navigate('/account/login')

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute