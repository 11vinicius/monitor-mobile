import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>

    {/* rotas auth */}
    <Stack.Screen name="auth.login" options={{ headerShown: false }} />


    <Stack.Screen name="Home" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ headerShown: false }} />

    <Stack.Screen name="user.create" options={{ headerShown: false }} />

  </Stack>
  );
}
