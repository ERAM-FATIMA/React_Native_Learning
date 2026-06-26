import { globalStyles } from "@/styles";
import { TextInput } from "react-native";

type AddInputProps = {
  newTitle: string;
  setNewTitle: (text: string) => void;
  handleInlineSubmit: () => void;
};
export default function AddInput({
  newTitle,
  setNewTitle,
  handleInlineSubmit,
}: AddInputProps) {
  return (
    <TextInput
      placeholder="Type to quick-add a task..."
      value={newTitle}
      onChangeText={setNewTitle}
      style={globalStyles.inlineInput}
      placeholderTextColor="#999"
      onSubmitEditing={handleInlineSubmit}
    />
  );
}
