import { useSearchParts } from "api/hooks/part";
import PartCard from "screens/parts/list/components/PartCard";
import PageableList from "components/molecules/pageableList";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { PartResponse } from "models/response/PartResponse";

const PartListScreen = () => {
  const query = useSearchParts();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = (part: PartResponse) => {
    navigation.navigate("PartDetails", { part });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate("AddPart")} icon={ICONS.ADD} />
      ),
    });
  }, []);

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <PartCard part={item} onPress={handlePress} />}
    />
  );
};

export default PartListScreen;
