import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator,  } from "react-native";

interface IButtonComponent{
    title: string
    isLoading: boolean
    onPress: () => void
}

export function ButtonComponent(props: IButtonComponent) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: props.isLoading? '#3629b7' : '#564eb2',
            borderRadius: 10,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 6
        },
        title: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
        }
    })
    return (
        <TouchableOpacity onPress={props.onPress} >
            <View style={styles.container}>
                {
                props.isLoading? 
                    <Text style={styles.title}>{props.title}</Text>:
                    <ActivityIndicator color={'#fff'}/>
                }

            </View>
        </TouchableOpacity>
    );
}