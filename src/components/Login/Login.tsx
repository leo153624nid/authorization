/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'

function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, pass) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
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
            .catch(console.error)
    }

    return <Form title="login" handleClick={handleLogin} />
}

export default Login
