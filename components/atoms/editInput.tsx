import { globalStyles } from "@/styles";
import { TextInput } from "react-native";

type EditInputProps = {
  editText: string;
  setEditText: (text: string) => void;
};
export default function EditInput({ editText, setEditText }: EditInputProps) {
  return (
    <TextInput
      value={editText}
      onChangeText={setEditText}
      style={globalStyles.taskText}
      autoFocus
    />
  );
}
