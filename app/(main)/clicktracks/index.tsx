import { ClicktrackListItem } from "@/components/ClicktrackListItem";
import { FlatList, View } from "react-native";

export default function Clicktracks() {
  const id = "example";

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[
          { key: "Clicktrack 1" },
          { key: "Clicktrack 2" },
          { key: "Clicktrack 3" },
        ]}
        renderItem={({ item }) => <ClicktrackListItem name={item.key} />}
      />
    </View>
  );
}
