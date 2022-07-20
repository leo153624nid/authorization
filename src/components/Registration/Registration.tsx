import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '../../store/hooks/hooks'
import { setUser } from '../../store/slices/userSlice'
import Form from '../Form/Form'

function Registration() {
    const dispatch = useAppDispatch()

    const handleRegister = (email, pass) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
            .then(console.log)
            .catch(console.error)
    }

    return <Form title="register" handleClick={handleRegister} />
}

export default Registration
