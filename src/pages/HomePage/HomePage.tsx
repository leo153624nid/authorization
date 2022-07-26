/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Navigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useAuth, useAppDispatch } from '../../store/hooks/hooks'
import { removeUser } from '../../store/slices/userSlice'

function HomePage() {
    const { isAuth, email } = useAuth()
    const dispatch = useAppDispatch()

    const onClick = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                dispatch(removeUser())
            })
            .catch((error) => {
                alert('Error of singOut!')
                console.log(error)
            })
        dispatch(removeUser())
    }
    return isAuth ? (
        <div>
            <h1>Welcome, {email}</h1>

            <button type="button" onClick={onClick}>
                Log out from {email}
            </button>
        </div>
    ) : (
        <Navigate replace to="/login" />
    )
}

export default HomePage
