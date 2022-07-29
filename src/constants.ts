export const LOGIN = 'login'
export const CREATE_NEW_ACCOUNT = 'create new account'
export const RESET_PASSWORD = 'reset password'

export const emailValidator = {
    isEmpty: true,
    minLength: 3,
}

export const passValidator = {
    isEmpty: true,
    minLength: 3,
}

export interface Validator {
    isEmpty: boolean
    minLength: number
}
