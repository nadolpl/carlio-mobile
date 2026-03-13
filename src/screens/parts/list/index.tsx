import { useSearchParts } from "api/hooks/part";
import PartCard from "screens/parts/list/components/PartCard";
import PageableList from "components/molecules/pageableList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { PartResponse } from "models/response/PartResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";

const PartListScreen = () => {
  const query = useSearchParts();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleActionPress = () => {
    navigation.navigate("AddPart");
  };

  const handleCardPress = (part: PartResponse) => {
    navigation.navigate("PartDetails", { partId: part.id });
  };

  const renderItem = ({ item }: { item: PartResponse }) => (
    <PartCard part={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default PartListScreen;
