import { useEffect, useState } from 'react'
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

export const useValidations = (value: string, validations: object) => {
    const [minLengthError, setMinLengthError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation]
                        ? setMinLengthError(true)
                        : setMinLengthError(false)
                    break
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break

                default:
                    break
            }
        }
    }, [value])

    return { minLengthError, isEmpty }
}

export const useInput = (initialValue: string, validations: object) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidations(value, validations)

    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid,
    }
}
