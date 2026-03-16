import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchParts } from "api/hooks/part";
import { useListNavigation } from "hooks/useListNavigation";
import { PartResponse } from "models/response/PartResponse";

export const usePartList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchParts();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddPart") });

  const handleCardPress = (part: PartResponse) => {
    navigation.navigate("PartDetails", { partId: part.id });
  };

  return {
    query,
    handleCardPress,
  };
};
