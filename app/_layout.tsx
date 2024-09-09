import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
      <Stack.Screen name="signUp/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signUp/emailValidation"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="aplication/index" options={{ headerShown: false }} />
    </Stack>
  );
}
