import { Text, View } from "react-native";
type statusBadgeProps = {
  task_status: "done" | "later" | "to-do";
};
export default function StatusBadge({ task_status }: statusBadgeProps) {
  return (
    <View
      style={{
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor:
          task_status === "done"
            ? "#C8E6C9"
            : task_status === "later"
              ? "#E1BEE7"
              : "#FFE0B2",
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontWeight: "700",
          color:
            task_status === "done"
              ? "#1B5E20"
              : task_status === "later"
                ? "#4A148C"
                : "#E65100",
        }}
      >
        {task_status.toUpperCase()}
      </Text>
    </View>
  );
}
