/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function UnAuthRoute() {

    const navigate = useNavigate()

    const {userProfile} = useSelector((state) => state.userProfile)

    if(Object.keys(userProfile).length !== 0 && userProfile.emailVerification.isVerified) {
        if(userProfile.isAdmin) return navigate('/admin-dashboard/home')
        if(! userProfile.isAdmin) return navigate('/user-dashboard/home')
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default UnAuthRoute
