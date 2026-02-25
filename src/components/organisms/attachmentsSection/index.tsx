import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import DocumentCard from "screens/documents/list/components/DocumentCard";
import { colors } from "constants/colors";
import { useSearchDocuments } from "api/hooks/document";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

interface AttachmentsSectionProps {
  sourceId: string;
}

const AttachmentsSection = ({ sourceId }: AttachmentsSectionProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data } = useSearchDocuments({ sourceId });
  const attachments = data?.pages.flatMap((page) => page.content) || [];

  const handleDocumentPress = (id: string) => {
    navigation.navigate("DocumentDetails", { documentId: id });
  };

  return (
    <>
      {attachments.length > 0 && (
        <View style={styles.attachments}>
          <Text style={styles.sectionTitle}>Attachments</Text>
          {attachments.map((attachment) => (
            <DocumentCard key={attachment.id} document={attachment} onPress={handleDocumentPress} />
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  attachments: {
    gap: 10,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 4,
  },
});

export default AttachmentsSection;
