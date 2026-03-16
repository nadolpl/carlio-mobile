import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchDocuments } from "api/hooks/document";
import { useListNavigation } from "hooks/useListNavigation";

export const useDocumentList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchDocuments();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddDocument") });

  const handleCardPress = (id: string) => {
    navigation.navigate("DocumentDetails", { documentId: id });
  };

  return {
    query,
    handleCardPress,
  };
};
