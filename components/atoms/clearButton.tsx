import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";
type clearButtonProps = {
  setSearch: (text: string) => void;
};
export default function ClearButton({ setSearch }: clearButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.clearButton}
      onPress={() => setSearch("")}
    >
      <Text style={globalStyles.clearButtonText}>clear</Text>
    </TouchableOpacity>
  );
}
