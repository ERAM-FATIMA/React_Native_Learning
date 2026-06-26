import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

type MenuButtonProps = {
  setMenuVisible: (visible: boolean) => void;
};

export default function MenuButton({ setMenuVisible }: MenuButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.checkButton}
      onPress={() => setMenuVisible(true)}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>⋮</Text>
    </TouchableOpacity>
  );
}
