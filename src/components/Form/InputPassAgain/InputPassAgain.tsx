/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { FaExclamation } from 'react-icons/fa'
import { BsKeyFill } from 'react-icons/bs'
import s from './InputPassAgain.module.scss'
import { PassAgainInputType } from '../../../store/hooks/hooks'

function InputPassAgain({ pass, passAgain }: PassAgainInputType) {
    return (
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
                    (passAgain.passError && passAgain.isDirty) ||
                    (pass.value !== passAgain.value && passAgain.isDirty)
                        ? s.alert
                        : s.hidden
                }
            >
                <FaExclamation />
            </span>
            <span
                className={
                    (passAgain.isEmpty && passAgain.isDirty) ||
                    (passAgain.passError && passAgain.isDirty) ||
                    (pass.value !== passAgain.value && passAgain.isDirty)
                        ? s.alertValidate
                        : s.hidden
                }
            >
                {passAgain.isEmpty ||
                    passAgain.passError ||
                    'Passwords do not match'}
            </span>
        </div>
    )
}

export default InputPassAgain
