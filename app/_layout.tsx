import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function RootLayout() {
  const [loaded] = useFonts({
    InterTight: require("../assets/fonts/InterTight-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Slot />
    </View>
  );
}
