import PageableList from "components/organisms/pageableList";
import DocumentCard from "screens/documents/list/components/DocumentCard";
import { DocumentResponse } from "models/response/DocumentResponse";
import { useDocumentList } from "screens/documents/list/useDocumentList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const DocumentListScreen = () => {
  const { query, handleCardPress, handleAddPress } = useDocumentList();

  const renderItem = ({ item }: { item: DocumentResponse }) => (
    <DocumentCard document={item} onPress={handleCardPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.DOCUMENT}
          title="No documents found"
          description="You haven't added any documents yet. Add one now"
          actionTitle="Add document"
          onAction={handleAddPress}
        />
      }
    />
  );
};

export default DocumentListScreen;
