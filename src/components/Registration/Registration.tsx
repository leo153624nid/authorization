import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'

function Registration() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, pass) => {
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
            .catch(console.error)
    }

    return <Form title="register" handleClick={handleRegister} />
}

export default Registration
