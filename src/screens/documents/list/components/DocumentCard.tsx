import { Pressable, StyleSheet, View } from "react-native";
import { DocumentResponse } from "models/response/DocumentResponse";
import Text from "components/atoms/text";
import { formatFileSize } from "utils/file";
import { formatDateArray } from "utils/date";
import { commonStyles } from "utils/styles";
import { colors } from "constants/colors";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";

interface DocumentCardProps {
  document: DocumentResponse;
  onPress: (id: string) => void;
}

const getDocumentIcon = (contentType: string) => {
  if (contentType.includes("pdf")) return ICONS.DOCUMENT;
  if (contentType.includes("image")) return ICONS.IMAGE;
  return ICONS.FILE;
};

const DocumentCard = ({ document, onPress }: DocumentCardProps) => {
  return (
    <Pressable
      onPress={() => onPress(document.id)}
      style={({ pressed }) => [styles.container, pressed && commonStyles.pressed]}
    >
      <View style={styles.iconContainer}>
        <Icon name={getDocumentIcon(document.contentType)} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {document.fileName}
        </Text>
        <Text style={styles.subtitle}>
          {formatDateArray(document.createdDate)} - {formatFileSize(document.fileSize)}
        </Text>
      </View>

      <View style={styles.chevronContainer}>
        <Icon name={ICONS.ARROW_RIGHT} color={colors.textSecondary} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.background800,
    padding: 16,
    borderRadius: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background700,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  chevronContainer: {
    marginLeft: 8,
    justifyContent: "center",
  },
});

export default DocumentCard;
