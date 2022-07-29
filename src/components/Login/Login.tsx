/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'
import { LOGIN } from '../../constants'

function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // Проверяем, запомнен ли пользователь в браузере
    const emailMemo = localStorage.getItem('email')
        ? (localStorage.getItem('email') as string)
        : ''
    const passMemo = localStorage.getItem('password')
        ? (localStorage.getItem('password') as string)
        : ''

    // Функция входа пользователя по email & password
    const handleLogin = async (email: string, pass: string, memo: boolean) => {
        try {
            const auth = getAuth()

            const { user } = await signInWithEmailAndPassword(auth, email, pass)
            console.dir(user)
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                })
            )

            navigate('/', { replace: true })

            if (memo) {
                localStorage.setItem('email', email)
                localStorage.setItem('password', pass)
            } else {
                localStorage.clear()
            }
        } catch (error) {
            alert('Error of log in!')
            console.log(error)
        }
    }

    return (
        <Form
            title={LOGIN}
            emailMemo={emailMemo}
            passMemo={passMemo}
            handleClick={handleLogin}
        />
    )
}

export default Login
