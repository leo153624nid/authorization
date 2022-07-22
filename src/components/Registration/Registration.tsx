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

function Registration() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email: string, pass: string) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, pass)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    })
                )
                navigate('/', { replace: true })
            })
            .catch((err) => {
                alert('Error of creating user!')
                console.log(err)
            })
    }

    return <Form title="create new account" handleClick={handleRegister} />
}

export default Registration
