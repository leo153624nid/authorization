import React, { useState } from 'react'
import s from './Form.module.css'

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
            </div>

            <div className={s.wrapInput}>
                <input
                    className={s.inputForm}
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
            </div>

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
