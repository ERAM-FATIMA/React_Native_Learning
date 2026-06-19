import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function addTask() {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Task"
        value={inputText}
        onChangeText={setInputText}
        style={styles.input}
      />
      <Button
        title="Add Task"
        onPress={() =>
          router.push({
            pathname: "/tracker",
            params: { textFromInput: inputText },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
