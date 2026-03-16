import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Button, { ButtonColor } from "components/atoms/button";
import Text from "components/atoms/text";
import Modal from "components/atoms/modal";

export type ConfirmationModalVariant = "error" | "success" | "standard";

interface ConfirmationModalProps {
  title: string;
  message: string;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  variant?: ConfirmationModalVariant;
}

const getButtonColor = (variant: ConfirmationModalVariant): ButtonColor => {
  switch (variant) {
    case "error":
      return "error";
    case "success":
      return "success";
    default:
      return "primary";
  }
};

const ConfirmationModal = ({
  title,
  message,
  visible,
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Confirm",
  variant = "standard",
}: ConfirmationModalProps) => {
  return (
    <Modal visible={visible} onClose={onCancel}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title={cancelText}
            onPress={onCancel}
            variant="transparent"
            style={styles.flexButton}
          />
          <Button
            color={getButtonColor(variant)}
            title={confirmText}
            onPress={onConfirm}
            style={styles.flexButton}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    paddingTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    color: colors.textPrimary,
    textAlign: "center",
  },
  message: {
    color: colors.textSecondary,
    marginBottom: 32,
    textAlign: "center",
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  flexButton: {
    flex: 1,
  },
});

export default ConfirmationModal;
