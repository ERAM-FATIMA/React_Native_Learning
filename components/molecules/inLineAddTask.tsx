import { globalStyles } from "@/styles";
import { View } from "react-native";
import InLineAddButton from "../atoms/inLineAddButton";
import AddInput from "../atoms/inLineInput";
import PlusButton from "../atoms/plusButton";

type InLineAddTaskProps = {
  newTitle: string;
  setNewTitle: (text: string) => void;
  handleInlineSubmit: () => void;
};

export default function InLineAddTask({
  newTitle,
  setNewTitle,
  handleInlineSubmit,
}: InLineAddTaskProps) {
  return (
    <View style={globalStyles.inlineAddRow}>
      <PlusButton />
      <AddInput
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        handleInlineSubmit={handleInlineSubmit}
      />
      {newTitle.trim() ? (
        <InLineAddButton handleInlineSubmit={handleInlineSubmit} />
      ) : null}
    </View>
  );
}
