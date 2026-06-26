import DeleteButton from "../atoms/deleteButton";
import TaskActionButton from "../atoms/taskActionButton";

type TaskActionProps = {
  isEditing: boolean;
  handleSave: () => void;
  setIsEditing: (choice: boolean) => void;
  onPress: () => void;
};
export default function TaskActions({
  isEditing,
  handleSave,
  setIsEditing,
  onPress,
}: TaskActionProps) {
  return (
    <>
      <TaskActionButton
        isEditing={isEditing}
        handleSave={handleSave}
        setIsEditing={setIsEditing}
      />

      <DeleteButton onPress={onPress} />
    </>
  );
}
