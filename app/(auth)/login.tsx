import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Please Log In</Text>
      <Link href="/clicktracks">Log In</Link>
    </View>
  );
}
