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

            <form className="login100-form validate-form">
                <span className="login100-form-title">Member Login</span>

                <Login />

                <div className="text-center p-t-12">
                    <span className="txt1">Forgot</span>
                    <NavLink to="/">
                        {/* TODO  href */}
                        <span className="txt2">Username / Password?</span>
                    </NavLink>
                </div>

                <div className="text-center p-t-136">
                    <NavLink to="/register">
                        <span className="txt2">Create your Account</span>
                    </NavLink>
                </div>
            </form>

            <p>
                or <NavLink to="/register">register</NavLink>
            </p>
        </div>
    )
}

export default LoginPage
