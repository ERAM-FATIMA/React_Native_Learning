import TrackerScreen from "@/screens/trackerScreen";
import React, { useState } from "react";
import useTasks from "./useTasks";

export default function TrackerApp() {
  const {
    filteredTasks,
    search,
    setSearch,
    deleteTask,
    editTask,
    inlineAddTask,
    activeTab,
    setActiveTab,
    todoCount,
    laterCount,
    doneCount,
    updateTasks,
  } = useTasks();

  const [newTitle, setNewTitle] = useState("");

  const handleInlineSubmit = () => {
    if (newTitle.trim() !== "") {
      inlineAddTask(newTitle.trim());
      setNewTitle("");
    }
  };

  return (
    <TrackerScreen
      activeTab={activeTab}
      tabCount={{ todoCount, laterCount, doneCount }}
      setActiveTab={setActiveTab}
      search={search}
      setSearch={setSearch}
      newTitle={newTitle}
      setNewTitle={setNewTitle}
      handleInlineSubmit={handleInlineSubmit}
      filteredTasks={filteredTasks}
      deleteTask={deleteTask}
      editTask={editTask}
      updateTasks={updateTasks}
    />
  );
}
