/* eslint-disable no-unused-vars */

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
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
import AdminDashboard from './pages/AdminDashboard';

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
                    <Route path='/admin-dashboard' element={<AdminDashboard />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
