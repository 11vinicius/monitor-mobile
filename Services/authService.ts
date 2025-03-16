import { baseService } from "./baseService"
import { ILoginForm } from "@/Interfaces/AuthInterfaces";

export const authService = ()=>{
    async function signIn(login: ILoginForm) {
        return await baseService.post('/signIn', login);
    }
    
    return{
        signIn
    }
}