/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import {
    // confirmPasswordReset,
    getAuth,
    sendPasswordResetEmail,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { RESET_PASSWORD } from '../../constants'
import Form from '../Form/Form'

function Recovery() {
    const navigate = useNavigate()

    const handleRecovery = async (email: string) => {
        const auth = getAuth()
        // const actionCodeSettings = {
        //     url: 'https://www.example.com/?email=user@example.com',
        //     iOS: {
        //         bundleId: 'com.example.ios',
        //     },
        //     android: {
        //         packageName: 'com.example.android',
        //         installApp: true,
        //         minimumVersion: '12',
        //     },
        //     handleCodeInApp: true,
        // }
        await sendPasswordResetEmail(
            auth,
            email
            // actionCodeSettings
        )
        // Obtain code from user.
        // await confirmPasswordReset(auth, code)
        navigate('/login', { replace: true })
    }

    return (
        <Form
            title={RESET_PASSWORD}
            emailMemo=""
            passMemo=""
            handleClick={handleRecovery}
        />
    )
}

export default Recovery
