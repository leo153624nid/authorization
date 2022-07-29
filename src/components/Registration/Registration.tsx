/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'
import { CREATE_NEW_ACCOUNT } from '../../constants'

function Registration() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // Функция регистрации пользователя по email & password
    const handleRegister = async (
        email: string,
        pass: string,
        memo: boolean
    ) => {
        try {
            const auth = getAuth()
            const data = await createUserWithEmailAndPassword(auth, email, pass)

            console.dir(data)
            dispatch(
                setUser({
                    email: data.user.email,
                    id: data.user.uid,
                    token: data.user.refreshToken,
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
            console.log(error)
            alert('Error of registration!')
        }
    }

    return (
        <Form
            title={CREATE_NEW_ACCOUNT}
            emailMemo=""
            passMemo=""
            handleClick={handleRegister}
        />
    )
}

export default Registration
