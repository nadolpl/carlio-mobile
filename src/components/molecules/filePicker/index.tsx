import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomFile } from "models/CustomFile";
import Button from "components/atoms/button";
import { ICONS } from "constants/icons";
import { Ionicons } from "@expo/vector-icons";

interface FilePickerProps {
  value: CustomFile | null;
  onPick: () => void;
  onClear: () => void;
  buttonText?: string;
}

export const FilePicker = ({
  value,
  onPick,
  onClear,
  buttonText = "Select file",
}: FilePickerProps) => {
  return (
    <View>
      {!value ? (
        <Button onPress={onPick} title={buttonText} variant="outlined" icon={ICONS.DOCUMENT} />
      ) : (
        <View style={styles.fileRow}>
          <View style={styles.fileHeader}>
            <Ionicons name="document-text-outline" size={20} color="#4A4A4A" />
            <Text style={styles.fileName} numberOfLines={1}>
              {value.name}
            </Text>
            <TouchableOpacity onPress={onClear}>
              <Ionicons name="close-circle" size={24} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fileRow: {
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    padding: 12,
    marginTop: 8,
  },
  fileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  fileName: {
    flex: 1,
    fontSize: 14,
    color: "#1C1C1E",
    marginLeft: 8,
    marginRight: 8,
    fontWeight: "500",
  },
});
