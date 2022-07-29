export const requiredField = (value: string) => {
    if (value) return undefined

    return 'Field is required'
}

export const emailValidate = (value: string) => {
    if (value) return undefined

    return 'Valid email is required: ex@abc.xyz'
}
