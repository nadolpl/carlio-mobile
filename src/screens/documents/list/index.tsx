import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useSearchDocuments } from "api/hooks/document";
import PageableList from "components/molecules/pageableList";
import DocumentCard from "screens/documents/list/components/DocumentCard";
import { DocumentResponse } from "models/response/DocumentResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";

const DocumentListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchDocuments();

  const handleActionPress = () => {
    navigation.navigate("AddDocument");
  };

  const handleCardPress = (id: string) => {
    navigation.navigate("DocumentDetails", { documentId: id });
  };

  const renderItem = ({ item }: { item: DocumentResponse }) => (
    <DocumentCard document={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default DocumentListScreen;
