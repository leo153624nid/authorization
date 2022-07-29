/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { FaAt, FaExclamation } from 'react-icons/fa'
import { BsKeyFill } from 'react-icons/bs'
import s from './Form.module.scss'
import {
    CREATE_NEW_ACCOUNT,
    emailValidator,
    LOGIN,
    passValidator,
    RESET_PASSWORD,
} from '../../constants'
import { useInput } from '../../store/hooks/hooks'

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

    const invalidLoginForm = !email.inputValid || !pass.inputValid
    const invalidRegistForm =
        !email.inputValid || !pass.inputValid || !passAgain.inputValid
    const invalidRecoveryForm = !email.inputValid

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
    const handleOnSubmit = () => {
        if (title === RESET_PASSWORD) localStorage.removeItem('password')

        handleClick(email.value, pass.value, memo)
    }

    return (
        <div>
            <div className={s.wrapInput}>
                <input
                    className={s.inputForm}
                    type="email"
                    value={email.value}
                    onChange={(e) => email.onChange(e)}
                    onBlur={() => email.onBlur()}
                    onFocus={() => email.onFocus()}
                    placeholder="email"
                />
                <span className={s.focusInputForm} />
                <span className={s.symbolInput}>
                    <FaAt />
                </span>
                <span
                    className={
                        (email.isEmpty && email.isDirty) ||
                        (email.emailError && email.isDirty)
                            ? s.alert
                            : s.hidden
                    }
                >
                    <FaExclamation />
                </span>
                <span
                    className={
                        (email.isEmpty && email.isDirty) ||
                        (email.emailError && email.isDirty)
                            ? s.alertValidate
                            : s.hidden
                    }
                >
                    {email.isEmpty || email.emailError}
                </span>
            </div>

            {title !== RESET_PASSWORD && (
                <div className={s.wrapInput}>
                    <input
                        className={s.inputForm}
                        type="password"
                        value={pass.value}
                        onChange={(e) => pass.onChange(e)}
                        onBlur={() => pass.onBlur()}
                        onFocus={() => pass.onFocus()}
                        placeholder="password"
                    />
                    <span className={s.focusInputForm} />
                    <span className={s.symbolInput}>
                        <BsKeyFill />
                    </span>
                    <span
                        className={
                            (pass.isEmpty && pass.isDirty) ||
                            (pass.passError && pass.isDirty)
                                ? s.alert
                                : s.hidden
                        }
                    >
                        <FaExclamation />
                    </span>
                    <span
                        className={
                            (pass.isEmpty && pass.isDirty) ||
                            (pass.passError && pass.isDirty)
                                ? s.alertValidate
                                : s.hidden
                        }
                    >
                        {pass.isEmpty || pass.passError}
                    </span>
                </div>
            )}

            {title === CREATE_NEW_ACCOUNT && (
                <div className={s.wrapInput}>
                    <input
                        className={s.inputForm}
                        type="password"
                        value={passAgain.value}
                        onChange={(e) => passAgain.onChange(e)}
                        onBlur={() => passAgain.onBlur()}
                        onFocus={() => passAgain.onFocus()}
                        placeholder="repeat password"
                    />
                    <span className={s.focusInputForm} />
                    <span className={s.symbolInput}>
                        <BsKeyFill />
                    </span>
                    <span
                        className={
                            (passAgain.isEmpty && passAgain.isDirty) ||
                            (passAgain.passError && passAgain.isDirty)
                                ? s.alert
                                : s.hidden
                        }
                    >
                        <FaExclamation />
                    </span>
                    <span
                        className={
                            (passAgain.isEmpty && passAgain.isDirty) ||
                            (passAgain.passError && passAgain.isDirty)
                                ? s.alertValidate
                                : s.hidden
                        }
                    >
                        {passAgain.isEmpty || passAgain.passError}
                    </span>
                </div>
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
                    onClick={handleOnSubmit}
                    disabled={invalidForm}
                >
                    {title}
                </button>
            </div>
        </div>
    )
}

export default Form
