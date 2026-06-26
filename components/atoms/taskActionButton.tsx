import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

type taskActionButtonProps = {
  isEditing: boolean;
  handleSave: () => void;
  setIsEditing: (choice: boolean) => void;
};
export default function TaskActionButton({
  isEditing,
  handleSave,
  setIsEditing,
}: taskActionButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.actionButton}
      onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
    >
      <Text style={globalStyles.actionButtonText}>
        {isEditing ? "Save" : "Edit"}
      </Text>
    </TouchableOpacity>
  );
}
