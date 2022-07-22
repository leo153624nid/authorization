/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth, useAppDispatch } from '../../store/hooks/hooks'
import { removeUser } from '../../store/slices/userSlice'

function HomePage() {
    const { isAuth, email } = useAuth()
    const dispatch = useAppDispatch()
    return isAuth ? (
        <div>
            <h1>Welcome, {email}</h1>

            <button type="button" onClick={() => dispatch(removeUser())}>
                Log out from {email}
            </button>
        </div>
    ) : (
        <Navigate replace to="/login" />
    )
}

export default HomePage
