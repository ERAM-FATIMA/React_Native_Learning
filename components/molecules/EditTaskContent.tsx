import { TaskStatus } from "@/app/_layout";
import EditInput from "../atoms/editInput";
import TaskDetails from "./taskDetails";
type EditTaskContentProps = {
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  title: string;
  task_status: TaskStatus;
};

export default function EditTaskContent({
  isEditing,
  editText,
  setEditText,
  title,
  task_status,
}: EditTaskContentProps) {
  return isEditing ? (
    <EditInput editText={editText} setEditText={setEditText} />
  ) : (
    <TaskDetails title={title} task_status={task_status} />
  );
}
