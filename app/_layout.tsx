import { Stack } from "expo-router";
import React, { createContext, useState } from "react";

export const TaskContext = createContext<any>(null);

export default function Layout() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "task", completed: false },
  ]);

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
