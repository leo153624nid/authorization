import React from 'react'
import { NavLink } from 'react-router-dom'

function RegisterPage() {
    return (
        <div>
            <h1>Register</h1>

            <p>
                Already have an account? <NavLink to="/login">Sing in</NavLink>
            </p>
        </div>
    )
}

export default RegisterPage
