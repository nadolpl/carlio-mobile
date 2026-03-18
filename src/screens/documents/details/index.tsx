import { useDocumentDetails } from "screens/documents/details/useDocumentDetails";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import HeaderSection from "components/templates/DetailsScreenWrapper/components/HeaderSection";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";
import DetailRow from "components/molecules/detailRow";
import { getEnumValueByKey } from "utils/enum";
import { DocumentType } from "models/enums/DocumentType";
import { formatFileSize } from "utils/file";
import { formatDateArray } from "utils/date";
import Button from "components/atoms/button";
import { useDownloadDocument } from "api/hooks/document";
import { StyleSheet } from "react-native";

const DocumentDetailsScreen = () => {
  const { document} = useDocumentDetails();
  const { mutate: download, isPending } = useDownloadDocument();

  if (!document) return null;

  const handleDownload = () => {
    download({ path: document.filePath, fileName: document.fileName });
  };

  return (
    <DetailsScreenWrapper>
      <HeaderSection
        title={document.fileName}
        subtitle={getEnumValueByKey(DocumentType, document.type)}
      />

      <SectionCard title="Document Details">
        <DetailRow label="Format" value={document.contentType} isFirst />
        <DetailRow label="File Size" value={formatFileSize(document.fileSize)} />
        <DetailRow label="Created At" value={formatDateArray(document.createdDate)} isLast />
      </SectionCard>
      <Button
        title="Download"
        variant="outlined"
        onPress={handleDownload}
        loading={isPending}
        style={styles.downloadButton}
      />
    </DetailsScreenWrapper>
  );
};

const styles = StyleSheet.create({
  downloadButton: {
    marginTop: 16,
  },
});

export default DocumentDetailsScreen;
