import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

export default function MenuCloseButton({
  setMenuVisible,
}: {
  setMenuVisible: (choice: boolean) => void;
}) {
  return (
    <TouchableOpacity
      style={globalStyles.cancelButton}
      onPress={() => setMenuVisible(false)}
    >
      <Text style={globalStyles.cancelText}>Close</Text>
    </TouchableOpacity>
  );
}
