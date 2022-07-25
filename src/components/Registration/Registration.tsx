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

    const handleRegister = async (
        email: string,
        pass: string,
        memo: boolean
    ) => {
        const auth = getAuth()
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                pass
            )

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
            alert('Error of registration!')
            console.log(error)
        }
    }

    return <Form title={CREATE_NEW_ACCOUNT} handleClick={handleRegister} />
}

export default Registration
