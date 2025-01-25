import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Home() {
    const [token, settoken] = useState('')

    useEffect(() => {
        async function getData() {
            const value = await AsyncStorage.getItem("token");
            if(value){
                settoken(value)
            }
            
        }
        getData()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text>{token}</Text>
        </View>
    );
}