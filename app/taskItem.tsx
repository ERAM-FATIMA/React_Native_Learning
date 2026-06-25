import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles";
import { TaskStatus } from "./_layout";
interface taskItemsProps {
  title: string;
  id: string;
  task_status: TaskStatus;
  deleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
  updateTask: (id: string, newStatus: TaskStatus) => void;
}

const TaskItem = React.memo(
  ({
    title,
    id,
    task_status,
    editTask,
    deleteTask,
    updateTask,
  }: taskItemsProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleSave = () => {
      editTask(id, editText);
      setIsEditing(false);
    };

    const handleSelectStatus = (status: TaskStatus) => {
      updateTask(id, status);
      setMenuVisible(false);
    };

    return (
      <View style={globalStyles.taskRow}>
        <TouchableOpacity
          style={globalStyles.checkButton}
          onPress={() => setMenuVisible(true)}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>⋮</Text>
        </TouchableOpacity>

        {isEditing ? (
          <TextInput
            value={editText}
            onChangeText={setEditText}
            style={globalStyles.taskText}
            autoFocus
          />
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 4,
              paddingHorizontal: 4,
            }}
          >
            <Text style={globalStyles.taskText}>{title}</Text>

            {/* Dynamic Status Badge */}
            <View
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 4,
                backgroundColor:
                  task_status === "done"
                    ? "#C8E6C9"
                    : task_status === "later"
                      ? "#E1BEE7"
                      : "#FFE0B2",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  color:
                    task_status === "done"
                      ? "#1B5E20"
                      : task_status === "later"
                        ? "#4A148C"
                        : "#E65100",
                }}
              >
                {task_status.toUpperCase()}
              </Text>
            </View>
          </View>
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

        <Modal
          visible={menuVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <View style={globalStyles.backdrop}>
            <View style={globalStyles.menuCard}>
              <Text style={globalStyles.menuTitle}>Move Task Status</Text>

              <TouchableOpacity
                style={globalStyles.optionButton}
                onPress={() => handleSelectStatus("to-do")}
              >
                <Text style={globalStyles.optionText}>Move to To-Do</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.optionButton}
                onPress={() => handleSelectStatus("later")}
              >
                <Text style={globalStyles.optionText}>Move to Later</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.optionButton}
                onPress={() => handleSelectStatus("done")}
              >
                <Text style={globalStyles.optionText}>Move to Done</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.cancelButton}
                onPress={() => setMenuVisible(false)}
              >
                <Text style={globalStyles.cancelText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  },
);
export default TaskItem;
