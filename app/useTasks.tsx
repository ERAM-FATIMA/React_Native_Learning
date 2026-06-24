import { useCallback, useContext, useMemo, useState } from "react";
import { TaskContext, TaskStatus } from "./_layout";

const next_status: Record<TaskStatus, TaskStatus> = {
  "to-do": "done",
  later: "to-do",
  done: "to-do",
};

export default function useTasks() {
  const { tasks, setTasks } = useContext(TaskContext)!;
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<TaskStatus>("to-do");

  const deleteTask = useCallback(
    (indexToDelete: string) => {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== indexToDelete),
      );
    },
    [setTasks],
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) &&
        task.task_status == activeTab,
    );
  }, [tasks, search, activeTab]);

  const todoCount = useMemo(() => {
    return tasks.filter((t) => t.task_status == "to-do").length;
  }, [tasks]);
  const laterCount = useMemo(() => {
    return tasks.filter((t) => t.task_status == "later").length;
  }, [tasks]);
  const doneCount = useMemo(() => {
    return tasks.filter((t) => t.task_status == "done").length;
  }, [tasks]);

  const toggleTask = useCallback((idToToggle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle
          ? {
              ...task,
              task_status: task.task_status === "done" ? "to-do" : "done",
            }
          : task,
      ),
    );
  }, []);

  const inlineAddTask = useCallback(
    (inputText: string) => {
      if (inputText.trim() !== "") {
        setTasks((prevTasks) => [
          ...prevTasks,
          {
            id: Date.now().toString(),
            title: inputText.trim(),
            task_status: activeTab,
          },
        ]);
      }
    },
    [setTasks, activeTab],
  );

  const editTask = useCallback((idToEdit: string, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id == idToEdit ? { ...task, title: newTitle } : task,
      ),
    );
  }, []);

  return {
    tasks,
    search,
    setSearch,
    filteredTasks,
    toggleTask,
    deleteTask,
    editTask,
    inlineAddTask,
    todoCount,
    laterCount,
    doneCount,
    activeTab,
    setActiveTab,
  };
}
