import { View, Text, StyleSheet } from "react-native";
import  HeaderComponents  from "../components/HeaderComponent";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { z } from 'zod'
import { Controller,  useForm,  } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "../Interfaces/IUser";
import InputComponent  from "../components/InputComponent";
import { useState } from "react";
import  ButtonComponent  from "../components/ButtonComponent";
import { userService } from "../Services/userService";

export default function UserCreate() {

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
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true)
    const [toast, setToast] = useState<boolean>(false)

    const schema = z.object({
        name: z.string().min(8, 'Insira um nome válido'),
        email: z.string().email('Insira um e-mail válido'),
        password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    });

    const { formState: { errors }, handleSubmit, control } = useForm<IUser>({
        resolver: zodResolver(schema),  
    })

    const { create } = userService()

    async function onSubmit(body: IUser) {
       const res = await create(body)
       console.log(res.data)
    }

    function handleLogin() {
        router.replace("/Login")
    }

    return (
        <View style={styles.container}>
            <HeaderComponents 
                icon={
                    <AntDesign name="login" size={24} color="#3629b7" />
                } 
                onPress={()=>handleLogin()} 
                titleButtom="Login"
            />
            <View style={styles.body}>
                <Controller
                    control={control}
                    name="name"
                    defaultValue='vinicius'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent isLoading={loading} value={value} placeholder="Nome" error={errors.name?.message? String(errors.name?.message) :null} onchangeText={onChange} />
                    }
                />
                 <Controller
                    control={control}
                    name="email"
                    defaultValue='vini123@gmail.com'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent isLoading={loading} value={value} placeholder="E-mail" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />
                 <Controller
                    control={control}
                    name="password"
                    defaultValue='876543211'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent isLoading={loading} value={value} placeholder="Senha" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />
                <ButtonComponent isLoading={loading} title="Entrar"  onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    );
}