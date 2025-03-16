import { useAuthStore } from "@/stores/useAuthStore";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();
  const { token } = useAuthStore();

  useEffect(() => {
    async function redirect() {
      if(token){
        router.replace('/(tabs)')
        return
      }
      router.replace('/Login')
    }
    redirect()
  },[token])

  return (
  <Stack>
    <Stack.Screen name="Login" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="user.create" options={{ headerShown: false }} />
  </Stack>
  );
}
