/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../../components/Login/Login'
import s from './LoginPage.module.css'
import img from '../../img/img-01.png'

function LoginPage() {
    return (
        <div className={s.loginPage}>
            <div className={s.loginPic}>
                <img src={img} alt="IMG" />
            </div>

            <div className={s.loginForm}>
                <span className={s.loginFormTitle}>Member Login</span>

                <Login />

                <div className={s.redirectForgot}>
                    <span className={s.txt}>Forgot </span>
                    <NavLink to="/">
                        {/* TODO  href */}
                        <span className={s.txtRef}>Username / Password?</span>
                    </NavLink>
                </div>

                <div className={s.redirectCreate}>
                    <span className={s.txt}>or </span>
                    <NavLink to="/register">
                        <span className={s.txtRef}>Create your Account</span>
                    </NavLink>
                    <span> &rarr;</span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
