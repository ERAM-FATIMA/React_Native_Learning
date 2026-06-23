import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
interface taskItemsProps {
  title: string;
  id: string;
  completed: boolean;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
}

const TaskItem = React.memo(
  ({
    title,
    id,
    completed,
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
      <View style={styles.taskRow}>
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => toggleTask(id)}
        >
          <Text>{completed ? "⬛" : "✅"}</Text>
        </TouchableOpacity>

        {isEditing ? (
          <TextInput
            value={editText}
            onChangeText={setEditText}
            style={styles.taskText}
            autoFocus
          />
        ) : (
          <Text style={styles.taskText}>{title}</Text>
        )}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          <Text style={styles.actionButtonText}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);
export default TaskItem;

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  taskText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
    marginLeft: 10,
  },
  checkButton: {
    padding: 8,
    backgroundColor: "#E8F2F9",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    padding: 8,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: "#598bc0",
    fontSize: 14,
    fontWeight: "600",
  },
});
