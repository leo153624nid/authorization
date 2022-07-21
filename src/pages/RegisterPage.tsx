/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Registration from '../components/Registration/Registration'

function RegisterPage() {
    return (
        <div>
            <h1>Register</h1>
            <Registration />
            <p>
                Already have an account? <NavLink to="/login">Sing in</NavLink>
            </p>
        </div>
    )
}

export default RegisterPage
