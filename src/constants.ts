export const LOGIN = 'login'
export const CREATE_NEW_ACCOUNT = 'create new account'
export const RESET_PASSWORD = 'reset password'

export const emailValidator = {
    isEmpty: true,
    emailError: true,
}

export const passValidator = {
    isEmpty: true,
    passError: true,
}

export type ValidatorEmail = typeof emailValidator
export type ValidatorPass = typeof passValidator
export type Validator = ValidatorEmail | ValidatorPass
