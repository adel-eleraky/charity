/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function RestrictCharity() {


    const navigate = useNavigate()

    const {charityProfile} = useSelector((state) => state.charityProfile)
    
    if(Object.keys(charityProfile).length === 0) return navigate('/')

    return (
        <>
            <Outlet />
        </>
    )
}

export default RestrictCharity
