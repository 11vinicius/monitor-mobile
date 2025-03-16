import { View, StyleSheet,  } from "react-native"
import { useRouter } from "expo-router"
import { Controller,  useForm,  } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import AntDesign from '@expo/vector-icons/AntDesign'
import { ILoginForm } from "../Interfaces/AuthInterfaces"
import  InputComponent  from "../components/InputComponent"
import  ButtonComponent  from "../components/ButtonComponent"
import  HeaderComponents  from "../components/HeaderComponent"
import { useAuthStore } from "@/stores/useAuthStore"
import ToastrComponent from "../components/ToastrComponet";

export default function Create() {
    const schema = z.object({
        email: z.string().email('Insira um e-mail válido'),
        password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    });

    const { formState: { errors }, handleSubmit, control } = useForm<ILoginForm>({
        resolver: zodResolver(schema),  
    })

    const router = useRouter();
    const { loading, er, fetchToken } = useAuthStore()

    function handleUserCreate(){
        router.replace("/user.create")
    }

    return (
        <View style={styles.container}>
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
                    defaultValue='vini@gmail.com'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent isLoading={loading} value={value} placeholder="Digite email" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />
                <Controller
                    control={control}
                    name="password"
                    defaultValue='12345678'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent isLoading={loading} value={value} placeholder="Digite password" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />
                <ButtonComponent isLoading={loading} title="Entrar"  onPress={handleSubmit(fetchToken)}/>
                { er && <ToastrComponent message={er} color="#ff0000" textColor="#fff"/>}
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