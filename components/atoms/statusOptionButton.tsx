import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import { Text, TouchableOpacity } from "react-native";

type statusOptionButtonProps = {
  status: TaskStatus;
  handleSelectStatus: (status: TaskStatus) => void;
};

export default function StatusOptionButton({
  handleSelectStatus,
  status,
}: statusOptionButtonProps) {
  return (
    <TouchableOpacity
      style={globalStyles.optionButton}
      onPress={() => handleSelectStatus(status)}
    >
      <Text style={globalStyles.optionText}>Move to {status}</Text>
    </TouchableOpacity>
  );
}
