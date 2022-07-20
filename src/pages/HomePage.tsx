import React from 'react'
import { Navigate } from 'react-router-dom'

function HomePage() {
    return <Navigate replace to="/login" />
}

export default HomePage
