/* eslint-disable import/prefer-default-export */
// export const requiredField = (value: string) => {
//     if (value) return undefined

//     return 'Field is required'
// }

export const ValidateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return mailformat.test(String(email).toLocaleLowerCase())
}
