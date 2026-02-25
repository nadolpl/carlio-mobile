import Button from "components/atoms/button";
import FileRowItem from "components/atoms/fileRowItem";

interface FilePickerProps {
  value?: File;
  onPick: () => void;
  onClear: () => void;
}

const FilePicker = ({ value, onPick, onClear }: FilePickerProps) => {
  return !value ? (
    <Button onPress={onPick} title="Select file" variant="outlined" />
  ) : (
    <FileRowItem fileName={value.name} onRemove={onClear} />
  );
};

export default FilePicker;
