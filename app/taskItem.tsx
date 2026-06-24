import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles";
import { TaskStatus } from "./_layout";
interface taskItemsProps {
  title: string;
  id: string;
  task_status: TaskStatus;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
}

const TaskItem = React.memo(
  ({
    title,
    id,
    task_status,
    toggleTask,
    editTask,
    deleteTask,
  }: taskItemsProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);

    const handleSave = () => {
      editTask(id, editText);
      setIsEditing(false);
    };

    return (
      <View style={globalStyles.taskRow}>
        <TouchableOpacity
          style={globalStyles.checkButton}
          onPress={() => toggleTask(id)}
        >
          <Text style={{ fontSize: 16 }}>
            {task_status === "done" ? "✅" : "⬛"}
          </Text>
        </TouchableOpacity>

        {isEditing ? (
          <TextInput
            value={editText}
            onChangeText={setEditText}
            style={globalStyles.taskText}
            autoFocus
          />
        ) : (
          <Text style={globalStyles.taskText}>{title}</Text>
        )}

        <TouchableOpacity
          style={globalStyles.actionButton}
          onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          <Text style={globalStyles.actionButtonText}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.checkButton}
          onPress={() => deleteTask(id)}
        >
          <Text style={globalStyles.actionButtonText}>❌</Text>
        </TouchableOpacity>
      </View>
    );
  },
);
export default TaskItem;
