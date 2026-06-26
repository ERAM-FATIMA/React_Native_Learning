import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

type AddTaskButtonProps = {
  handleAddTask: () => void;
};

export default function AddTaskButton({ handleAddTask }: AddTaskButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.primaryButton}
      onPress={handleAddTask}
    >
      <Text style={globalStyles.primaryButtonText}>Save Task</Text>
    </TouchableOpacity>
  );
}
