import { useSearchParts } from "api/hooks/part";
import PartCard from "screens/parts/list/components/PartCard";
import PageableList from "components/molecules/pageableList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { PartResponse } from "models/response/PartResponse";
import { useListNavigation } from "hooks/useListNavigation";

const PartListScreen = () => {
  const query = useSearchParts();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddPart") });

  const handlePress = (part: PartResponse) => {
    navigation.navigate("PartDetails", { partId: part.id });
  };

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <PartCard part={item} onPress={handlePress} />}
    />
  );
};

export default PartListScreen;
