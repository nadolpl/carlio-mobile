import { StyleSheet, View } from "react-native";
import { PropsWithChildren } from "react";
import { ICONS } from "constants/icons";
import IconButton from "components/atoms/iconButton";
import Icon from "components/atoms/icon";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface FileRowItemProps {
  fileName: string;
  onRemove: () => void;
}

const FileRowItem = ({ fileName, onRemove, children }: FileRowItemProps & PropsWithChildren) => {
  return (
    <View style={styles.fileRow}>
      <View style={styles.fileHeader}>
        <Icon name={ICONS.FILE} />
        <Text style={styles.fileName} numberOfLines={1}>
          {fileName}
        </Text>
        <IconButton onPress={onRemove} icon={ICONS.CLOSE_CIRCLE} />
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  fileRow: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    padding: 12,
  },
  fileHeader: { flexDirection: "row", alignItems: "center" },
  fileName: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500",
  },
});

export default FileRowItem;
