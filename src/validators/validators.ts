// Valid email is required: ex@abc.xy
export const ValidateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return mailformat.test(String(email).toLocaleLowerCase())
}

// Для проверки пароля от 6 до 20 символов, которые содержат как минимум
// одну цифровую цифру , одну заглавную и одну строчную букву
export const ValidatePass = (pass: string) => {
    const passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    return passformat.test(pass)
}
