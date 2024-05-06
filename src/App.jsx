/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CharityDashboard from "./pages/CharityDashboard/CharityDashboard";
import CasesComponent from "./pages/CharityDashboard/CasesComponent";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserHomeComponent from "./pages/UserDashboard/UserHomeComponent";
import HashLoader from "react-spinners/HashLoader";
import Cases from "./pages/Cases.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Checkout from "./pages/Checkout.jsx";
import Cart from "./pages/Cart.jsx";

import AdminHomeLayout from "./components/DashboardComponents/AdminHomeLayout.jsx";
import AdminCharitiesLayout from "./components/DashboardComponents/AdminCharitiesLayout.jsx";
import AdminUsersLayout from "./components/DashboardComponents/AdminUsersLayout.jsx";
import AdminTransactionsLayout from "./components/DashboardComponents/AdminTransactionsLayout.jsx";
import Used from "./pages/Used";
import AccountActivation from "./pages/AccountActivation.jsx";
import Zakat from "./pages/Zakat.jsx";
import CharityHomeLayout from "./components/DashboardComponents/CharityHomeLayout.jsx";
import CharityCasesLayout from "./components/DashboardComponents/CharityCasesLayout.jsx";
import CharityTransactionsLayout from "./components/DashboardComponents/CharityTransactionsLayout.jsx";
import CharityCampaignsLayout from "./components/DashboardComponents/CharityCampaignsLayout.jsx";
import Donations from "./pages/Donations.jsx";

AOS.init();

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <HashLoader
            color={"#a1cefa"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cases" element={<Cases />} />
              <Route path="used" element={<Used />} />
              <Route path="zakat" element={<Zakat />} />
              <Route path="donations" element={<Donations />} />
              <Route path="account" element={<Account />} />
              <Route path="account/login" element={<Login />} />
              <Route path="account/register" element={<Register />} />
              <Route path="account/activate" element={<AccountActivation />} />

              <Route
                path="account/forget-password"
                element={<ForgetPassword />}
              />
              <Route
                path="account/reset-password"
                element={<ResetPassword />}
              />
              <Route path="checkout" element={<Checkout />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            <Route path="admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<AdminHomeLayout />} />
              <Route path="users" element={<AdminUsersLayout />} />
              <Route path="charities" element={<AdminCharitiesLayout />} />
              <Route
                path="transactions"
                element={<AdminTransactionsLayout />}
              />
            </Route>
            <Route path="charity-dashboard" element={<CharityDashboard />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<CharityHomeLayout />} />
              <Route path="cases" element={<CharityCasesLayout />} />
              <Route
                path="transactions"
                element={<CharityTransactionsLayout />}
              />
              <Route path="campaigns" element={<CharityCampaignsLayout />} />
            </Route>
            <Route path="user-dashboard" element={<UserDashboard />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<UserHomeComponent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
