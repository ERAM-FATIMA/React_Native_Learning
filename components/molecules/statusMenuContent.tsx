import { TaskStatus } from "@/app/_layout";
import { globalStyles } from "@/styles";
import { Text, View } from "react-native";
import MenuCloseButton from "../atoms/MenuCloseButton";
import StatusOptionButton from "../atoms/statusOptionButton";

type StatusMenuContentProps = {
  handleSelectStatus: (status: TaskStatus) => void;
  setMenuVisible: (choice: boolean) => void;
};
export default function StatusMenuContent({
  handleSelectStatus,
  setMenuVisible,
}: StatusMenuContentProps) {
  return (
    <View style={globalStyles.menuCard}>
      <Text style={globalStyles.menuTitle}>Move Task Status</Text>

      <StatusOptionButton
        status="done"
        handleSelectStatus={handleSelectStatus}
      />

      <StatusOptionButton
        status="later"
        handleSelectStatus={handleSelectStatus}
      />

      <StatusOptionButton
        status="to-do"
        handleSelectStatus={handleSelectStatus}
      />

      <MenuCloseButton setMenuVisible={setMenuVisible} />
    </View>
  );
}
