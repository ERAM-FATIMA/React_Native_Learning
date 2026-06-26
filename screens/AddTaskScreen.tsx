import AddTaskButton from "@/components/atoms/addTaskButton";
import AddTaskInput from "@/components/atoms/addTaskInput";
import { globalStyles } from "@/styles";
import { View } from "react-native";

type AddTaskScreenProps = {
  inputText: string;
  setInputText: (text: string) => void;
  handleAddTask: () => void;
};

export default function AddTaskScreen({
  inputText,
  setInputText,
  handleAddTask,
}: AddTaskScreenProps) {
  return (
    <View style={globalStyles.container}>
      <AddTaskInput inputText={inputText} setInputText={setInputText} />
      <AddTaskButton handleAddTask={handleAddTask} />
    </View>
  );
}
