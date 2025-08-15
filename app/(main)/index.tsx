import { ClicktrackListItem } from "@/components/ClicktrackListItem";
import { useClicktracks } from "@/hooks/useClicktracks";
import { ActivityIndicator, FlatList, View } from "react-native";

export default function Clicktracks() {
  const {
    clicktracks,
    importRef,
    handleAdd,
    handleImport,
    handleTemplate,
    handleRemove,
    handleNameChange,
    handleCopy,
  } = useClicktracks();

  return (
    <View style={{ flex: 1 }}>
      {clicktracks ? (
        <FlatList
          data={clicktracks}
          renderItem={({ item }) => <ClicktrackListItem name={item.name} />}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}
