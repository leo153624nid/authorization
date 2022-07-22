/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../../components/Login/Login'
import s from './LoginPage.module.css'

function LoginPage() {
    return (
        <div className={s.loginPage}>
            <div className="login100-pic js-tilt" data-tilt>
                <img src="images/img-01.png" alt="IMG" />
            </div>

            <h1>Login</h1>

            <Login />

            <p>
                or <NavLink to="/register">register</NavLink>
            </p>
        </div>
    )
}

export default LoginPage
