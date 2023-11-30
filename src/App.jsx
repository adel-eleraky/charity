/* eslint-disable no-unused-vars */

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UsersComponent from './pages/AdminDashboard/UsersComponent';
import CharitiesComponent from './pages/AdminDashboard/CharitiesComponent';
import AdminHomeComponent from './pages/AdminDashboard/AdminHomeComponent';
import CharityDashboard from './pages/CharityDashboard/CharityDashboard';
import CharityHomeComponent from './pages/CharityDashboard/CharityHomeComponent';
import CasesComponent from './pages/CharityDashboard/CasesComponent';

AOS.init();

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='account' element={<Account />} />
                        <Route path='account/login' element={<Login />} />
                        <Route path='account/register' element={<Register />} />
                    </Route>
                    <Route path='admin-dashboard' element={<AdminDashboard />}>
                        <Route path='home' element={<AdminHomeComponent />} />
                        <Route path='users' element={<UsersComponent />} />
                        <Route path='charities' element={<CharitiesComponent />} />
                    </Route>
                    <Route path="charity-dashboard" element={<CharityDashboard />}>
                        <Route path="home" element={<CharityHomeComponent />} />
                        <Route path='cases' element={<CasesComponent />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
