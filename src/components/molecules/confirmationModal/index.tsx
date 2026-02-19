import { Modal, StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Button from "components/atoms/button";
import Text from "components/atoms/text";

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
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            <Button
              variant="transparent"
              title={cancelText}
              onPress={onCancel}
            />
            <Button color="error" title={confirmText} onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: colors.background800,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.textPrimary,
  },
  message: {
    color: colors.textSecondary,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
});

export default ConfirmationModal;
