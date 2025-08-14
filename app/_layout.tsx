import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    InterTight: require("../assets/fonts/InterTight-Regular.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return <View style={{ flex: 1 }}>{loaded && <Slot />}</View>;
}
