import { AxiosResponse } from "axios";
import { ILoginRequest, ILoginResponse } from "../Interfaces/auth/ILogin"
import { baseService } from "./baseService"

export const authService = ()=>{

    async function signIn(login: ILoginRequest):Promise<AxiosResponse<ILoginResponse>> {
        return await baseService.post('/auth', login);
    }

    return{
        signIn
    }
}