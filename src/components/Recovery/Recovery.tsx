/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { RESET_PASSWORD } from '../../constants'
import Form from '../Form/Form'

function Recovery() {
    const handleRecovery = () => {
        console.log('do not work yet')
        alert('do not work yet') /* TODO */
    }

    return (
        <Form
            title={RESET_PASSWORD}
            emailMemo=""
            passMemo=""
            handleClick={handleRecovery}
        />
    )
}

export default Recovery
