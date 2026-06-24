import { globalStyles } from "@/styles";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={globalStyles.indexContainer}>
      <Text style={globalStyles.welcomeText}>Welcome to Workspace</Text>

      <View style={globalStyles.buttonContainer}>
        <Button
          title="Open Dashboard"
          onPress={() => router.push("./tracker")}
        />
      </View>
    </View>
  );
}
