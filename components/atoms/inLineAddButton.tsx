import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";
type ILAButtonProps = {
  handleInlineSubmit: () => void;
};
export default function InLineAddButton({
  handleInlineSubmit,
}: ILAButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.inlineAddButton}
      onPress={handleInlineSubmit}
    >
      <Text style={globalStyles.inlineAddButtonText}>Add</Text>
    </TouchableOpacity>
  );
}
