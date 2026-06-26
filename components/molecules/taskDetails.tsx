import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import { Text, View } from "react-native";
import StatusBadge from "../atoms/status_badge";
type TaskDetailsProp = {
  title: string;
  task_status: TaskStatus;
};
export default function TaskDetails({ title, task_status }: TaskDetailsProp) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 4,
        paddingHorizontal: 4,
      }}
    >
      <Text style={globalStyles.taskText}>{title}</Text>

      <StatusBadge task_status={task_status} />
    </View>
  );
}
