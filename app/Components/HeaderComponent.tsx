import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface HeaderComponentsProps {
    onPress: () => void
    titleButtom: string
    icon:  React.ReactNode
}

export function HeaderComponents({ titleButtom, icon, onPress }:HeaderComponentsProps) {


    const styles = StyleSheet.create({
        header: {
            backgroundColor: '#3629b7',
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginBottom: -20
        },
        headerButton:{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 20,
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 2,
            padding: 10,
            borderRadius: 50
        },
        headerButtonText:{
            color: '#3629b7',
            fontSize: 20,
            fontWeight: 'semibold',
            marginLeft: 4
        },
    })

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton} onPress={()=>onPress()}>
                {icon} 
                <Text style={styles.headerButtonText}>
                    {titleButtom}
                </Text>
            </TouchableOpacity>
        </View>
    )
}