export interface ILoginForm{
    email: string,
    password: string
}

export interface IAuthStore{
    loading: boolean
    er: string | null
    fetchToken: (body: ILoginForm) => void
}
