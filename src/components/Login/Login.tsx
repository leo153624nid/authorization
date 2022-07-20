import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'

function Login() {
    const dispatch = useAppDispatch()

    const handleLogin = (email, pass) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
            .then(console.log)
            .catch(console.error)
    }

    return <Form title="login" handleClick={handleLogin} />
}

export default Login
