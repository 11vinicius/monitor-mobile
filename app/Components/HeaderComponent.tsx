import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface HeaderComponentsProps {
    onPress: () => void
    titleButtom: string
}

export function HeaderComponents({ titleButtom, onPress }:HeaderComponentsProps) {


    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#3629b7',
            width: '100%',
            height: 200,
            justifyContent: 'center',
           
        },
        headerButton:{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 20,
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 2,
            padding: 10,
            width: '40%',
            borderRadius: 50
        },
        headerButtonText:{
            color: '#3629b7',
            fontSize: 20,
            fontWeight: 'semibold',
            marginLeft: 3
        },
    })

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={()=>onPress()}>
                <AntDesign name="adduser" size={24} color="#3629b7" />
                <Text style={styles.headerButtonText}>
                    {titleButtom}
                </Text>
            </TouchableOpacity>
        </View>
    )
}