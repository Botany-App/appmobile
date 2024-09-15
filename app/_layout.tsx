import { Stack } from "expo-router";
import { Provider } from "react-redux";

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
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  );
}
