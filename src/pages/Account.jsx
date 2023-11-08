/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import "./css/Account.css"
import { Outlet, useNavigate } from 'react-router-dom';

function Account() {

    const [user, setUser] = React.useState({});

    const navigate = useNavigate();

    useEffect(() => {

        if (Object.keys(user).length === 0) {
            console.log("no user found")
            
            navigate("login" , {replace: true})
        }
        
        
    }, [])

    return (
        <div className="account-page py-5">
            <div className="container">
                account page
            </div>
        </div>
    )
}

export default Account
