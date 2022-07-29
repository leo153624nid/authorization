/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { FaExclamation } from 'react-icons/fa'
import { BsKeyFill } from 'react-icons/bs'
import s from './InputPass.module.scss'
import { PassInputType } from '../../../store/hooks/hooks'

function InputPass({ pass }: PassInputType) {
    return (
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
    )
}

export default InputPass
