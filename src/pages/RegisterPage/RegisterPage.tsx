/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Registration from '../../components/Registration/Registration'
import s from '../LoginPage/LoginPage.module.css'
import img from '../../img/img-01.png'

function RegisterPage() {
    return (
        <div className={s.loginPage}>
            <div className={s.loginPic}>
                <img src={img} alt="IMG" />
            </div>

            <form className={s.loginForm}>
                <span className={s.loginFormTitle}>Registration</span>

                <Registration />

                <div className={s.redirectForgot}>
                    <span className={s.txt}>or </span>
                    <NavLink to="/login">
                        <span className={s.txtRef}>Log in</span>
                    </NavLink>
                    <span> &rarr;</span>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
