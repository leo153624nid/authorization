/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RecoveryPage from './pages/RecoveryPage/RecoveryPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/recovery" element={<RecoveryPage />} />
            </Routes>
        </div>
    )
}

export default App
