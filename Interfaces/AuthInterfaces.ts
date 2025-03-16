export interface ILoginForm{
    email: string,
    password: string
}

export interface IAuthStore{
    loading: boolean
    er: string | null
    token: string
    fetchToken: (body: ILoginForm) => void
}
