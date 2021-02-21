export type TypeUser = {
    isSignedIn: boolean,
    role: string,
    uid: string,
    username: string
}

export type TypeSignup = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type TypeSignin = {
    email: string,
    password: string
}