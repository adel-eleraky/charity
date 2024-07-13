/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function RestrictCharity() {


    const navigate = useNavigate()

    const {userProfile} = useSelector((state) => state.userProfile)

    if(userProfile.isAdmin) return navigate('/')

    return (
        <>
            <Outlet />
        </>
    )
}

export default RestrictCharity
