/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { FaAt, FaExclamation } from 'react-icons/fa'
import { EmailInputType } from '../../../store/hooks/hooks'

import s from './InputEmail.module.scss'

function InputEmail({ email }: EmailInputType) {
    return (
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
    )
}

export default InputEmail
