import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import React, { createContext, useEffect, useState } from "react";

export type TaskStatus = "to-do" | "later" | "done";

interface Task {
  id: string;
  title: string;
  task_status: TaskStatus;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskContext = createContext<TaskContextType | null>(null);

export default function Layout() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadStoredTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("WORKSPACE_TASKS");

        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.log("Error loading tasks from the disk :", error);
      }
    };

    loadStoredTasks();
  }, []);

  useEffect(() => {
    const saveTasksToDisk = async () => {
      try {
        await AsyncStorage.setItem("WORKSPACE_TASKS", JSON.stringify(tasks));
      } catch (error) {
        console.log("Error saving tasks to the disk :", error);
      }
    };
    saveTasksToDisk();
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home Page" }} />
        <Stack.Screen name="add_task" options={{ title: "Add Task" }} />
        <Stack.Screen name="tracker" options={{ title: "Dashboard" }} />
      </Stack>
    </TaskContext.Provider>
  );
}
