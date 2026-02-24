import { useListNavigation } from "hooks/useListNavigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useSearchDocuments } from "api/hooks/document";
import PageableList from "components/molecules/pageableList";
import DocumentCard from "screens/documents/list/components/DocumentCard";

const DocumentListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchDocuments();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddDocument") });

  const handlePress = (id: string) => {
    navigation.navigate("DocumentDetails", { documentId: id });
  };

  return (
    <PageableList
      renderItem={({ item }) => <DocumentCard document={item} onPress={handlePress} />}
      query={query}
    />
  );
};

export default DocumentListScreen;
