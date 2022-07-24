import React, { useState } from 'react'
import { FaAt } from 'react-icons/fa'
import { BsKeyFill } from 'react-icons/bs'
import s from './Form.module.css'
import { LOGIN, RESET_PASSWORD } from '../../constants'

interface FormProps {
    title: string
    // eslint-disable-next-line no-unused-vars
    handleClick: (email: string, pass: string) => void
}

function Form({ title, handleClick }: FormProps) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    return (
        <div>
            <div className={s.wrapInput}>
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
            </div>

            {title !== RESET_PASSWORD && (
                <div className={s.wrapInput}>
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
                </div>
            )}

            {title === LOGIN && (
                <div className={s.wrapInput}>
                    <input
                        className={s.inputForm}
                        type="checkbox"
                        value={pass}
                        onChange={(e) => e.target.value}
                    />
                    <span className={s.focusInputForm} />
                    <span className={s.symbolInput}>
                        <BsKeyFill />
                    </span>
                </div>
            )}

            <div className={s.wrapBtnForm}>
                <button
                    className={s.btnForm}
                    type="submit"
                    onClick={() => handleClick(email, pass)}
                >
                    {title}
                </button>
            </div>
        </div>
    )
}

export default Form
