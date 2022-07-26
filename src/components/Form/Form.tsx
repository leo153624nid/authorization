/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import s from './Form.module.scss'
import {
    CREATE_NEW_ACCOUNT,
    emailValidator,
    LOGIN,
    passValidator,
    RESET_PASSWORD,
} from '../../constants'
import { useInput } from '../../store/hooks/hooks'
import InputEmail from './InputEmail/InputEmail'
import InputPass from './InputPass/InputPass'
import InputPassAgain from './InputPassAgain/InputPassAgain'

interface FormProps {
    title: string
    emailMemo: string
    passMemo: string
    // eslint-disable-next-line no-unused-vars
    handleClick: (email: string, pass: string, memo: boolean) => void
}

function Form({ title, emailMemo, passMemo, handleClick }: FormProps) {
    const email = useInput(emailMemo, emailValidator)
    const pass = useInput(passMemo, passValidator)
    const passAgain = useInput('', passValidator)
    const [memo, setMemo] = useState(true)

    // Назначаем значение валидности для каждого вида формы
    const invalidLoginForm = !email.inputValid || !pass.inputValid
    const invalidRegistForm =
        !email.inputValid ||
        !pass.inputValid ||
        !passAgain.inputValid ||
        pass.value !== passAgain.value
    const invalidRecoveryForm = !email.inputValid
    // Итоговое значение валидности
    let invalidForm = true
    switch (title) {
        case LOGIN:
            invalidForm = invalidLoginForm
            break
        case CREATE_NEW_ACCOUNT:
            invalidForm = invalidRegistForm
            break
        case RESET_PASSWORD:
            invalidForm = invalidRecoveryForm
            break
        default:
            break
    }

    // Функция отправки формы
    const handleOnSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        if (title === RESET_PASSWORD) localStorage.removeItem('password')

        handleClick(email.value, pass.value, memo)
    }

    return (
        <form>
            <InputEmail email={email} />

            {title !== RESET_PASSWORD && <InputPass pass={pass} />}

            {title === CREATE_NEW_ACCOUNT && (
                <InputPassAgain pass={pass} passAgain={passAgain} />
            )}

            {title !== RESET_PASSWORD && (
                <div className={s.checkbox}>
                    <input
                        className={s.checkBoxInput}
                        type="checkbox"
                        id="remember"
                        checked={memo}
                        onChange={() => setMemo(!memo)}
                    />
                    <label htmlFor="remember" className={s.checkBoxLabel}>
                        <span>Remember Me</span>
                    </label>
                </div>
            )}

            <div className={s.wrapBtnForm}>
                <button
                    className={invalidForm ? s.btnDisabled : s.btnForm}
                    type="submit"
                    onClick={(e) => handleOnSubmit(e)}
                    disabled={invalidForm}
                >
                    {title}
                </button>
            </div>
        </form>
    )
}

export default Form
