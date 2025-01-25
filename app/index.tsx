import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const router = useRouter();

  useEffect(() => {
    function redirect() {
      setTimeout(() => router.replace("/Login")
      , 100);
    }
    redirect()
  },[])


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity onPress={() => router.replace("/Login")}>
        <Text>Ir para Login</Text>
      </TouchableOpacity>

    </View>
  );
}
