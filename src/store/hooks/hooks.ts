import { useState } from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../reduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = () => {
    const { email, token, id } = useAppSelector((state) => state.user)
    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    // eslint-disable-next-line no-console
    console.log(`is dirty: ${isDirty}`)

    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
    }
}
