import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useFilePicker } from "hooks/useFilePicker";
import FileRowItem from "components/atoms/fileRowItem";
import Button from "components/atoms/button";
import { CustomFile } from "models/CustomFile";

export interface FilePickerItem {
  id: string;
  file: CustomFile;
}

interface MultiFilePickerProps {
  items: FilePickerItem[];
  onAddFiles: (newFiles: CustomFile[]) => void;
  onRemoveFile: (index: number) => void;
  renderItem?: (index: number) => ReactNode;
}

const MultiFilePicker = ({ items, onAddFiles, onRemoveFile, renderItem }: MultiFilePickerProps) => {
  const { pickFiles } = useFilePicker();

  const handlePickDocuments = async () => {
    const pickedFiles = await pickFiles(true);
    if (pickedFiles && pickedFiles.length > 0) {
      onAddFiles(pickedFiles);
    }
  };

  return (
    <>
      <Button onPress={handlePickDocuments} title="Select files" variant="outlined" />

      {items.length > 0 && (
        <View style={styles.listContainer}>
          {items.map((item, index) => (
            <FileRowItem
              key={item.id}
              fileName={item.file.name}
              onRemove={() => onRemoveFile(index)}
            >
              {renderItem && <View style={styles.selectWrapper}>{renderItem(index)}</View>}
            </FileRowItem>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 15,
    gap: 15,
  },
  selectWrapper: {
    marginTop: 15,
    marginBottom: -15,
  },
});

export default MultiFilePicker;
