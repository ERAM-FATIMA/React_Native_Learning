import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TaskContext } from "./_layout";

export default function TrackerApp() {
  const { tasks, setTasks } = useContext(TaskContext);

  const { textFromInput } = useLocalSearchParams();

  useEffect(() => {
    if (typeof textFromInput === "string" && textFromInput !== "") {
      setTasks((PrevTasks: string[]) => [...PrevTasks, textFromInput]);
    }
  }, [textFromInput]);

  const deleteTask = (indexToDelete: number) => {
    setTasks((prevTasks: string[]) =>
      prevTasks.filter((item, currentIndex) => currentIndex !== indexToDelete),
    );
  };

  return (
    <View style={styles.container}>
      {tasks.map((item: string, index: number) => (
        <View key={index} style={styles.taskRow}>
          <Button title="✅" onPress={() => deleteTask(index)} />
          <Text style={styles.taskText}>. {item}</Text>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={() => router.push("/add_task")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#333333",
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 20,
  },
});
