import { View, StyleSheet,  } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Controller,  useForm,  } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage"
import AntDesign from '@expo/vector-icons/AntDesign'
import { ILoginRequest, ILoginResponse } from "../Interfaces/auth/ILogin"
import  InputComponent  from "./Components/InputComponent"
import  ButtonComponent  from "./Components/ButtonComponent"
import { authService } from "../Services/authService"
import  HeaderComponents  from "./Components/HeaderComponent"

export default function Create() {

 


    const [loading, setLoading] = useState<boolean>(true)
    const [toast, setToast] = useState<boolean>(false)

    const schema = z.object({
        email: z.string().email('Insira um e-mail válido'),
        password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    });

    const { formState: { errors }, handleSubmit, control } = useForm<ILoginRequest>({
        resolver: zodResolver(schema),  
    })

    const router = useRouter();
    const { signIn } = authService()

    async function onSubmit(body: ILoginRequest) {
       
    }

    function handleUserCreate(){
        router.replace("/user.create")
    }

    return (
        <View style={styles.container}>
            {/* {toast? <ToastrComponent message="email ou senha incorreto." type={ToastType.error}/> : null} */}
            <HeaderComponents 
                icon={
                    <AntDesign name="adduser" size={24} color="#3629b7" />
                } 
                onPress={handleUserCreate} 
                titleButtom="Cadastre-se"
            />
            <View style={styles.body}>
                <Controller
                    control={control}
                    name="email"
                    defaultValue=''
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent disable={loading} value={value} placeholder="Digite email" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />
                <Controller
                    control={control}
                    name="password"
                    defaultValue=''
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent disable={loading} value={value} placeholder="Digite password" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />
                <ButtonComponent isLoading={loading} title="Entrar"  onPress={handleSubmit(onSubmit)}/>
            </View>
           
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
    }
});