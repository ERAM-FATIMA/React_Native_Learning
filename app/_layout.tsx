import { Stack } from "expo-router";
import React, { createContext, useState } from "react";

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
