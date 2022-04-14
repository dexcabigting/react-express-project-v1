import React from 'react'
import Home from './pages/home'
import Employees from './pages/employees'
import PayrollSystem from './pages/payroll-system'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/payroll-system" element={<PayrollSystem />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
