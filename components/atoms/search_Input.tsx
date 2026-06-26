import { globalStyles } from "@/styles";
import { TextInput } from "react-native";
type searchInputProps = {
  search: string;
  setSearch: (text: string) => void;
};
export default function SearchInput({ search, setSearch }: searchInputProps) {
  return (
    <TextInput
      placeholder="Search Tasks"
      value={search}
      onChangeText={setSearch}
      style={globalStyles.searchInput}
      placeholderTextColor="#999"
    />
  );
}
