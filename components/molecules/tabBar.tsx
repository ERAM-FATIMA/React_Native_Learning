import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import { View } from "react-native";
import TabButton from "../atoms/tabButton";
type tabBarProps = {
  activeTab: TaskStatus;
  tabCount: { laterCount: number; todoCount: number; doneCount: number };
  setActiveTab: (tab: TaskStatus) => void;
};
export default function TabBar({
  activeTab,
  tabCount,
  setActiveTab,
}: tabBarProps) {
  const { laterCount, todoCount, doneCount } = tabCount;
  return (
    <View style={globalStyles.tabRow}>
      <TabButton
        activeTab={activeTab}
        tabKey="later"
        tabCount={laterCount}
        onPress={setActiveTab}
      />
      <TabButton
        activeTab={activeTab}
        tabKey="to-do"
        tabCount={todoCount}
        onPress={setActiveTab}
      />
      <TabButton
        activeTab={activeTab}
        tabKey="done"
        tabCount={doneCount}
        onPress={setActiveTab}
      />
    </View>
  );
}
