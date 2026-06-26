import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

export default function DeleteButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={globalStyles.checkButton} onPress={onPress}>
      <Text style={globalStyles.actionButtonText}>❌</Text>
    </TouchableOpacity>
  );
}
