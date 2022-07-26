/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { Validator } from '../../constants'
import { ValidateEmail, ValidatePass } from '../../validators/validators'
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
    const [passError, setPassError] = useState('')
    const [isEmpty, setIsEmpty] = useState('Field is required')
    const [emailError, setEmailError] = useState('')
    const [inputValid, setInputValid] = useState(false)

    // Проверка введенного значения инпута на ошибки
    useEffect(() => {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const validation in validations) {
            switch (validation) {
                case 'passError':
                    if (ValidatePass(value)) {
                        setPassError('')
                    } else {
                        setPassError(
                            'Min 6 characters, at least one numeric digit, one uppercase, one lowercase letter'
                        )
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

    // Проверка общей валидности инпута
    useEffect(() => {
        if (passError || emailError || isEmpty) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [passError, emailError, isEmpty])

    return { passError, isEmpty, emailError, inputValid }
}

// Хук для контролла и валидация инпута
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

export type InputType = ReturnType<typeof useInput>
export type EmailInputType = {
    email: InputType
}
export type PassInputType = {
    pass: InputType
}
export type PassAgainInputType = {
    pass: InputType
    passAgain: InputType
}
