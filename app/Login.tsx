import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Controller, set, useForm,  } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "expo-router";
import { ILoginRequest, ILoginResponse } from "./Interfaces/ILogin";
import { InputComponent } from "./Components/InputComponent";
import { ButtonComponent } from "./Components/ButtonComponent";
import { authService } from "./Services/authService";
import { ToastrComponent, ToastType } from "./Components/ToastrComponet";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Create() {

    const [loading, setLoading] = useState<boolean>(true)
    const [toast, setToast] = useState<boolean>(false)
    const route = useRouter();

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        header: {
            backgroundColor: '#3629b7',
            width: '100%',
            height: 200
        },
        body:{
            borderRadius: 20,
            backgroundColor: 'white',
            padding: 20,
            flex: 1,
            marginTop: -50
        }
      });

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
        setLoading(false)
        setToast(false)
        try {
            const  {data, status } = await signIn(body)

            if(status === 201){
                const res: ILoginResponse = data
                await AsyncStorage.setItem('token', res.access_token)
                    router.replace("/Home")
                setLoading(true)
                return
            }

            setLoading(false)
            setToast(false)
        } catch (error ) {
            if(error instanceof Error){
                setLoading(true)
                setToast(true)
            }
        }
    }



    return (
        <View style={styles.container}>
            {toast? <ToastrComponent message="email ou senha incorreto." type={ToastType.error}/> : null}
            <View style={styles.header}>
            
            </View>
            <View style={styles.body}>
                <Controller
                    control={control}
                    name="email"
                    defaultValue='vinicius@gmail.com'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent disable={loading} value={value} placeholder="Digite email" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />
                <Controller
                    control={control}
                    name="password"
                    defaultValue='12345678'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent disable={loading} value={value} placeholder="Digite password" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />
                <ButtonComponent isLoading={loading} title="Entrar"  onPress={handleSubmit(onSubmit)}/>
            </View>
           
        </View> 
    );
}