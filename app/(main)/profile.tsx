import { useSession } from "@/components/SessionProvider";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { Text, View } from "react-native";

export default function Profile() {
  const { user } = useSession();

  return (
    <View style={{ flex: 1 }}>
      <Text>Profile {JSON.stringify(user?.providerData)}</Text>
      <Text
        onPress={() => {
          signOut(getAuth()).then(() => console.log("signout event"));
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
