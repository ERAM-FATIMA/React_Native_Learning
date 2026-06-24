import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles";
import { TaskContext } from "./_layout";

export default function addTask() {
  console.log("Add task re rendered");
  const { tasks, setTasks } = useContext(TaskContext)!;
  const [inputText, setInputText] = useState("");

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      setTasks((prevTasks: any[]) => [
        ...prevTasks,
        {
          id: Date.now().toString(),
          title: inputText.trim(),
          task_status: "to-do",
        },
      ]);
    }
    router.back();
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Add Task"
        value={inputText}
        onChangeText={setInputText}
        style={globalStyles.input}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        style={globalStyles.primaryButton}
        onPress={handleAddTask}
      >
        <Text style={globalStyles.primaryButtonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}
