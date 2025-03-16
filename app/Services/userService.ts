import { AxiosResponse } from "axios"
import { IUser } from "../../Interfaces/IUser"
import { baseService } from "./baseService"

export const userService = ()=>{

    function create(user: IUser)  {
       return baseService.post('/users',user)
    }

    return{
        create
    }
}