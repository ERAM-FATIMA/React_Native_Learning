import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles";
import TaskItem from "./taskItem";
import useTasks from "./useTasks";

export default function TrackerApp() {
  const {
    filteredTasks,
    search,
    setSearch,
    toggleTask,
    deleteTask,
    editTask,
    inlineAddTask,
    activeTab,
    setActiveTab,
    todoCount,
    laterCount,
    doneCount,
  } = useTasks();

  const [newTitle, setNewTitle] = useState("");

  const handleInlineSubmit = () => {
    if (newTitle.trim() !== "") {
      inlineAddTask(newTitle.trim());
      setNewTitle("");
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.tabRow}>
        <Pressable
          onPress={() => setActiveTab("later")}
          style={({ pressed }) => [
            globalStyles.tabButton,
            activeTab === "later" && globalStyles.activeTabButton,
            pressed && globalStyles.pressedFeedback,
          ]}
        >
          <Text
            style={
              activeTab == "later"
                ? globalStyles.activeTabText
                : globalStyles.tabText
            }
          >
            Later ({laterCount})
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("to-do")}
          style={({ pressed }) => [
            globalStyles.tabButton,
            activeTab === "to-do" && globalStyles.activeTabButton,
            pressed && globalStyles.pressedFeedback,
          ]}
        >
          <Text
            style={
              activeTab == "to-do"
                ? globalStyles.activeTabText
                : globalStyles.tabText
            }
          >
            To-Do ({todoCount})
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("done")}
          style={({ pressed }) => [
            globalStyles.tabButton,
            activeTab === "done" && globalStyles.activeTabButton,
            pressed && globalStyles.pressedFeedback,
          ]}
        >
          <Text
            style={
              activeTab == "done"
                ? globalStyles.activeTabText
                : globalStyles.tabText
            }
          >
            Done ({doneCount})
          </Text>
        </Pressable>
      </View>

      <View style={globalStyles.searchContainer}>
        <TextInput
          placeholder="Search Tasks"
          value={search}
          onChangeText={setSearch}
          style={globalStyles.searchInput}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={globalStyles.clearButton}
          onPress={() => setSearch("")}
        >
          <Text style={globalStyles.clearButtonText}>clear</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.inlineAddRow}>
        <TouchableOpacity
          style={globalStyles.smallPlusButton}
          onPress={() => router.push("/add_task")}
        >
          <Text style={globalStyles.plusButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Type to quick-add a task..."
          value={newTitle}
          onChangeText={setNewTitle}
          style={globalStyles.inlineInput}
          placeholderTextColor="#999"
          onSubmitEditing={handleInlineSubmit} // Adds task when pressing 'Enter' on keyboard
        />
        {newTitle.trim() ? (
          <TouchableOpacity
            style={globalStyles.inlineAddButton}
            onPress={handleInlineSubmit}
          >
            <Text style={globalStyles.inlineAddButtonText}>Add</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            id={item.id}
            task_status={item.task_status}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )}
      />
    </View>
  );
}
