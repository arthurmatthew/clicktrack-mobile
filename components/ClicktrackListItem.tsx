import { Text } from "react-native";

export const ClicktrackListItem = ({ name }: { name: string }) => {
  return (
    <Text
      style={{
        backgroundColor: "#e4e4e7",
        fontSize: 30,
        padding: 10,
        marginHorizontal: 8,
        marginTop: 8,
        borderWidth: 1,
        borderColor: "#a1a1aa",
        borderRadius: 10,
      }}
    >
      {name}
    </Text>
  );
};
