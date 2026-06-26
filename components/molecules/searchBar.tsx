import { globalStyles } from "@/styles";
import { View } from "react-native";
import ClearButton from "../atoms/clearButton";
import SearchInput from "../atoms/search_Input";

type searchBarProps = {
  search: string;
  setSearch: (text: string) => void;
};
export default function SearchContainer({ search, setSearch }: searchBarProps) {
  return (
    <View style={globalStyles.searchContainer}>
      <SearchInput search={search} setSearch={setSearch} />
      <ClearButton setSearch={setSearch} />
    </View>
  );
}
