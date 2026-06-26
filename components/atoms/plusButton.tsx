import { globalStyles } from "@/styles";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
export default function PlusButton() {
  return (
    <TouchableOpacity
      style={globalStyles.smallPlusButton}
      onPress={() => router.push("/add_task")}
    >
      <Text style={globalStyles.plusButtonText}>+</Text>
    </TouchableOpacity>
  );
}
