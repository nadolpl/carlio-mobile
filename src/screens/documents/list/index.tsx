import PageableList from "components/molecules/pageableList";
import DocumentCard from "screens/documents/list/components/DocumentCard";
import { DocumentResponse } from "models/response/DocumentResponse";
import { useDocumentList } from "screens/documents/list/useDocumentList";

const DocumentListScreen = () => {
  const { query, handleCardPress } = useDocumentList();

  const renderItem = ({ item }: { item: DocumentResponse }) => (
    <DocumentCard document={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default DocumentListScreen;
