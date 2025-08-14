import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Clicktrack() {
  const { clicktrackId } = useLocalSearchParams<{ clicktrackId: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ID is {clicktrackId}</Text>
      <Link href="/clicktracks">Back to clicktracks list</Link>
    </View>
  );
}
