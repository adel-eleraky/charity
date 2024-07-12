/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-photo-view/dist/react-photo-view.css";

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
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserHomeComponent from "./pages/UserDashboard/UserHomeComponent";
import HashLoader from "react-spinners/HashLoader";
import Cases from "./pages/Cases.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
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

import UserHomeLayout from "./components/DashboardComponents/UserHomeLayout.jsx";
import UserTransactionsLayout from "./components/DashboardComponents/UserTransactionsLayout.jsx";
import EditProfileLayout from "./components/common/EditProfileLayout.jsx";
import EditUserData from "./components/DashboardComponents/EditUserData.jsx";
import CharityDocsLayout from "./components/DashboardComponents/CharityDocsLayout.jsx";
import AdminCharityDocs from "./components/DashboardComponents/AdminCharityDocs.jsx";
import Donations from "./pages/Donations.jsx";
import About_us from "./pages/About_us.jsx";
import ReportCase from "./pages/ReportCase.jsx";
import ApiTesting from "./pages/ApiTesting.jsx";
import EditProfilePassword from "./components/common/EditProfilePassword.jsx";
import EditCharityData from "./components/DashboardComponents/EditCharityData.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./rtk/features/user/userProfileSlice.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AuthAdmin from "./components/AuthAdmin.jsx";
import UnAuthRoute from "./components/UnAuthRoute.jsx";
import ChatComponent from "./components/common/ChatComponent.jsx";

AOS.init();
function App() {
  let [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // dispatch(getUserProfile())
  const { userProfile } = useSelector((store) => store.userProfile);

  console.log(userProfile);
  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/ddvetozyq/image/upload/v1715928273/";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    if (Object.keys(userProfile).length === 0) dispatch(getUserProfile());
  }, [userProfile]);

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
        <>
          <ChatComponent />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About_us />} />
                <Route path="cases/:mainType?/:subType?" element={<Cases />} />
                <Route path="used" element={<Used />} />
                <Route path="zakat" element={<Zakat />} />
                <Route path="donations" element={<Donations />} />
                <Route path="report-case" element={<ReportCase />} />
                <Route element={<UnAuthRoute />}>
                  <Route path="account/login" element={<Login />} />
                  <Route path="account/register" element={<Register />} />
                  <Route
                    path={"activateAccount/:token?"}
                    element={<AccountActivation />}
                  />
                  <Route
                    path="account/forget-password"
                    element={<ForgetPassword />}
                  />
                </Route>
                <Route path="checkout" element={<Checkout />} />
                <Route path="cart" element={<Cart />} />
                <Route path="api-testing" element={<ApiTesting />} />
              </Route>

              {/* //*admin dashboard*/}
              <Route path="admin-dashboard" element={<AdminDashboard />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<AdminHomeLayout />} />
                <Route path="users" element={<AdminUsersLayout />} />
                <Route path="charities" element={<AdminCharitiesLayout />} />
                <Route
                  path="transactions"
                  element={<AdminTransactionsLayout />}
                />
                {/* <Route path="docs" element={<AdminCharityDocs />} /> */}
                <Route path="profile" element={<EditProfileLayout />}>
                  <Route
                    index
                    element={<Navigate replace to="edit-profile" />}
                  />
                  <Route path="edit-profile" element={<EditUserData />} />
                  <Route
                    path="change-pwd"
                    element={<EditProfilePassword type={"user"} />}
                  />
                </Route>
              </Route>

              {/* //*charity dashboard*/}
              <Route path="charity-dashboard" element={<CharityDashboard />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<CharityHomeLayout />} />
                <Route path="cases" element={<CharityCasesLayout />} />
                <Route
                  path="transactions"
                  element={<CharityTransactionsLayout />}
                />
                <Route path="campaigns" element={<CharityCampaignsLayout />} />
                <Route path="upload-docs" element={<CharityDocsLayout />} />
                <Route path="profile" element={<EditProfileLayout />}>
                  <Route
                    index
                    element={<Navigate replace to="edit-profile" />}
                  />
                  <Route path="edit-profile" element={<EditCharityData />} />
                  <Route
                    path="change-pwd"
                    element={<EditProfilePassword type="charity" />}
                  />
                </Route>
              </Route>

              {/* //*user dashboard */}
              <Route path="user-dashboard" element={<UserDashboard />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<UserHomeLayout />} />
                <Route
                  path="transactions"
                  element={<UserTransactionsLayout />}
                />

                {/* //*really same as admin */}
                <Route path="profile" element={<EditProfileLayout />}>
                  <Route
                    index
                    element={<Navigate replace to="edit-profile" />}
                  />
                  <Route path="edit-profile" element={<EditUserData />} />
                  <Route
                    path="change-pwd"
                    element={<EditProfilePassword type={"user"} />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
