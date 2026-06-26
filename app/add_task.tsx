import AddTaskScreen from "@/screens/AddTaskScreen";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { TaskContext } from "./_layout";

export default function AddTask() {
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
    <AddTaskScreen
      inputText={inputText}
      setInputText={setInputText}
      handleAddTask={handleAddTask}
    />
  );
}
