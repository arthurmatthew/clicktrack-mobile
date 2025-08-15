import { SessionProvider, useSession } from "@/components/SessionProvider";
import { SplashScreenController } from "@/components/SplashScreenController";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SessionProvider>
      <RootNavigator />
      <SplashScreenController />
    </SessionProvider>
  );
}

const RootNavigator = () => {
  const { user } = useSession();

  return (
    <Stack>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="forgot-password" />
      </Stack.Protected>
    </Stack>
  );
};
