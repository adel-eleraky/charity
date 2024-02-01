/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./css/Account.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Account() {
  const { user } = useSelector((store) => store.userAuth);
  // const [user, setUser] = React.useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      console.log("no user found");

      navigate("login", { replace: true });
    }
  }, [navigate, user]);

  return (
    <div className="account-page py-5">
      <div className="container">account page</div>
      <h3>{user.name?.firstName}</h3>
    </div>
  );
}

export default Account;
