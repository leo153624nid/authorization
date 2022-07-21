import React, { useState } from 'react'

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
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />

            <button type="submit" onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export default Form
