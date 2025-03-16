import { useState } from "react"
import { TextInput, Text, StyleSheet, View, TouchableOpacity } from "react-native"
import Feather from '@expo/vector-icons/Feather';

interface IInputComponent{
    placeholder: string
    onchangeText: (text: string) => void
    value?: string
    disable: boolean
    error?: string | null
    secureTextEntry?: boolean
    isButtonInObscure?: boolean
}

function InputComponent(props: IInputComponent) {
    const [focus, setFocus] = useState<boolean>(false)
    const [obscure, setObscure] = useState<boolean>(props.secureTextEntry? true : false)

    const styles = StyleSheet.create({
        constainer:{
            margin: 8,
        },
        inputArea:{
            padding: 8,
            borderRadius: 10,
            fontSize: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            height: 40
        },
        input:{
            flex:1
        },
        focusInput:{
            borderColor: '#3629b7',
            borderWidth: 2
        },
        errorInput:{
            borderColor: 'red',
            borderWidth: 2
        },
        error:{
            color: 'red',
            fontWeight: 'bold',
            marginTop: 5
        }
    })

    return (
        <View style={styles.constainer}>
            <View style={[styles.inputArea, focus? styles.focusInput : null, props.error? styles.errorInput:null]}>
                <TextInput 
                    editable={props.disable}
                    style={styles.input}
                    onChangeText={props.onchangeText}
                    value={props.value} 
                    onFocus={() => setFocus(true)} 
                    onBlur={() => setFocus(false)}  
                    placeholder={props.placeholder} 
                    secureTextEntry={obscure}
                />
                {props.isButtonInObscure &&
                    <TouchableOpacity onPress={() => setObscure(!obscure)}>
                        {obscure?   
                            <Feather name="eye" size={24} color="black" />:
                            <Feather name="eye-off" size={24} color="black" />
                        }
                    </TouchableOpacity>
                }
            </View>
            {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
    )
}

export default InputComponent   