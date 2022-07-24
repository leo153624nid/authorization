/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from '../LoginPage/LoginPage.module.css'
import img from '../../img/img-01.png'
import Recovery from '../../components/Recovery/Recovery'

function RecoveryPage() {
    return (
        <div className={s.loginPage}>
            <div className={s.loginPic}>
                <img src={img} alt="IMG" />
            </div>

            <div className={s.loginForm}>
                <span className={s.loginFormTitle}>Recovery</span>

                <Recovery />

                <div className={s.redirectForgot}>
                    <span className={s.txt}>or </span>
                    <NavLink to="/login">
                        <span className={s.txtRef}>Log in</span>
                    </NavLink>
                    <span> &rarr;</span>
                </div>
            </div>
        </div>
    )
}

export default RecoveryPage
