/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/Login/Login'

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                or <NavLink to="/register">register</NavLink>
            </p>
        </div>
    )
}

export default LoginPage
