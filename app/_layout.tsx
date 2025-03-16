import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="auth.login" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="user.create" options={{ headerShown: false }} />
  </Stack>
  );
}
