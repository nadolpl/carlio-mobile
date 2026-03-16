import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, View } from "react-native";
import { colors } from "constants/colors";

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
}

export const BottomSheet = ({
  visible,
  onClose,
  children,
}: BottomSheetProps & PropsWithChildren) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.keyboardWrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable style={styles.overlayBackground} onPress={onClose} />

        <View style={styles.sheetContainer}>
          <View style={styles.handleIndicator} />
          <View style={styles.content}>{children}</View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  keyboardWrapper: {
    flex: 1,
  },
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sheetContainer: {
    paddingBottom: Platform.OS === "ios" ? 32 : 24,
    marginTop: "auto",
    maxHeight: "90%",
  },
  handleIndicator: {
    width: 40,
    height: 4,
    backgroundColor: colors.textPrimary,
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 24,
  },
});
