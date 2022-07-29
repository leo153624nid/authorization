/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { Validator } from '../../constants'
import { ValidateEmail } from '../../validators/validators'
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

export const useValidations = (value: string, validations: Validator) => {
    const [minLengthError, setMinLengthError] = useState('')
    const [isEmpty, setIsEmpty] = useState('Field is required')
    const [emailError, setEmailError] = useState('')

    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    if (value.length < validations[validation]) {
                        setMinLengthError('Minimum 3 symbols')
                    } else {
                        setMinLengthError('')
                    }
                    break
                case 'isEmpty':
                    if (value) {
                        setIsEmpty('')
                    } else {
                        setIsEmpty('Field is required')
                    }
                    break
                case 'emailError':
                    if (ValidateEmail(value)) {
                        setEmailError('')
                    } else {
                        setEmailError('Valid email is required: ex@abc.xy')
                    }
                    break
                default:
                    break
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return { minLengthError, isEmpty, emailError }
}

export const useInput = (initialValue: string, validations: Validator) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidations(value, validations)

    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    const onFocus = () => {
        setIsDirty(false)
    }

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        onFocus,
        ...valid,
    }
}
