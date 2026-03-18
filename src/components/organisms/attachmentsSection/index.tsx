import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import DocumentCard from "screens/documents/list/components/DocumentCard";
import { useSearchDocuments } from "api/hooks/document";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import DocumentFormModal from "components/molecules/DocumentFormModal";
import Button from "components/atoms/button";
import { colors } from "constants/colors";
import { useModal } from "hooks/useModal";
import { useMemo } from "react";

interface AttachmentsSectionProps {
  sourceId: string;
  vehicleId: string;
}

const AttachmentsSection = ({ sourceId, vehicleId }: AttachmentsSectionProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useSearchDocuments({ sourceId });
  const { isOpen, close, open } = useModal();
  const attachments =
    useMemo(() => data?.pages.flatMap((page) => page.content), [data?.pages]) || [];

  const handleDocumentPress = (id: string) => {
    navigation.navigate("DocumentDetails", { documentId: id });
  };

  return (
    <View style={styles.container}>
      {attachments.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Attachments</Text>
          <View style={styles.attachments}>
            {attachments.map((attachment) => (
              <DocumentCard
                key={attachment.id}
                document={attachment}
                onPress={handleDocumentPress}
              />
            ))}
          </View>
        </>
      )}
      <DocumentFormModal
        visible={isOpen}
        onClose={close}
        vehicleId={vehicleId}
        sourceId={sourceId}
      />
      <Button onPress={open} title="Add attachment" variant="outlined" style={{ marginTop: 12 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  attachments: {
    gap: 10,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 4,
    marginBottom: 8,
  },
});

export default AttachmentsSection;
