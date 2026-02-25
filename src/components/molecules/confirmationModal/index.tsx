import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Button from "components/atoms/button";
import Text from "components/atoms/text";
import Modal from "components/atoms/modal";

interface ConfirmationModalProps {
  title: string;
  message: string;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

const ConfirmationModal = ({
  title,
  message,
  visible,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
}: ConfirmationModalProps) => {
  return (
    <Modal visible={visible} onClose={onCancel}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <Button title={cancelText} onPress={onCancel} />
        <Button color="error" title={confirmText} onPress={onConfirm} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.textPrimary,
    textAlign: "center",
  },
  message: {
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
});

export default ConfirmationModal;
