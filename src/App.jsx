/* eslint-disable no-unused-vars */

import { BrowserRouter, Route , Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
