/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { FaAt, FaExclamation } from 'react-icons/fa'
import { BsKeyFill } from 'react-icons/bs'
import s from './Form.module.scss'
import { CREATE_NEW_ACCOUNT, LOGIN, RESET_PASSWORD } from '../../constants'

interface FormProps {
    title: string
    // eslint-disable-next-line no-unused-vars
    handleClick: (email: string, pass: string, memo: boolean) => void
}

function Form({ title, handleClick }: FormProps) {
    let emailMemo = ''
    let passMemo = ''

    // Проверяем, запомнен ли пользователь в браузере при логинизации
    if (title === LOGIN) {
        emailMemo = localStorage.getItem('email')
            ? (localStorage.getItem('email') as string)
            : ''
        passMemo = localStorage.getItem('password')
            ? (localStorage.getItem('password') as string)
            : ''
    }

    const [email, setEmail] = useState(emailMemo)
    const [pass, setPass] = useState(passMemo)
    const [passAgain, setPassAgain] = useState('')
    const [memo, setMemo] = useState(true)

    const handleOnSubmit = () => {
        if (title === RESET_PASSWORD) localStorage.removeItem('password')

        handleClick(email, pass, memo)
    }

    return (
        <div>
            <div
                className={`${s.wrapInput} ${s.alertValidate}`}
                data-validate="Valid email is required: ex@abc.xyz"
            >
                <input
                    className={s.inputForm}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <span className={s.focusInputForm} />
                <span className={s.symbolInput}>
                    <FaAt />
                </span>
                <span className={`${s.alert} ${s.hidden}`}>
                    <FaExclamation />
                </span>
            </div>

            {title !== RESET_PASSWORD && (
                <div
                    className={s.wrapInput}
                    data-validate="Password is required"
                >
                    <input
                        className={s.inputForm}
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="password"
                    />
                    <span className={s.focusInputForm} />
                    <span className={s.symbolInput}>
                        <BsKeyFill />
                    </span>
                    <span className={`${s.alert} ${s.hidden}`}>
                        <FaExclamation />
                    </span>
                </div>
            )}

            {title === CREATE_NEW_ACCOUNT && (
                <div
                    className={s.wrapInput}
                    data-validate="Password is required"
                >
                    <input
                        className={s.inputForm}
                        type="password"
                        value={passAgain}
                        onChange={(e) => setPassAgain(e.target.value)}
                        placeholder="repeat password"
                    />
                    <span className={s.focusInputForm} />
                    <span className={s.symbolInput}>
                        <BsKeyFill />
                    </span>
                    <span className={`${s.alert} ${s.hidden}`}>
                        <FaExclamation />
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
                    className={s.btnForm}
                    type="submit"
                    onClick={handleOnSubmit}
                >
                    {title}
                </button>
            </div>
        </div>
    )
}

export default Form
