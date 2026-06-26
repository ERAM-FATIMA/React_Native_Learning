import { globalStyles } from "@/styles";
import { TextInput } from "react-native";

type AddTaskInputProps = {
  inputText: string;
  setInputText: (text: string) => void;
};
export default function AddTaskInput({
  inputText,
  setInputText,
}: AddTaskInputProps) {
  return (
    <TextInput
      placeholder="Add Task"
      value={inputText}
      onChangeText={setInputText}
      style={globalStyles.input}
      placeholderTextColor="#999"
    />
  );
}
