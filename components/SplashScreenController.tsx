import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useSession } from "./SessionProvider";

export const SplashScreenController = () => {
  const { initializing } = useSession();
  const [fontsLoaded] = useFonts({
    InterTight: require("../assets/fonts/InterTight-Regular.ttf"),
  });

  const ready = !initializing && fontsLoaded;

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  return null;
};
