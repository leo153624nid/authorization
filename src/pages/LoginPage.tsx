import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginPage() {
    return (
        <div>
            <h1>Login</h1>

            <p>
                or <NavLink to="/register">register</NavLink>
            </p>
        </div>
    )
}

export default LoginPage
