import { PropsWithChildren } from "react";
import { Modal as RNModal, Pressable, StyleSheet, View } from "react-native";
import { colors } from "constants/colors";

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal = ({ visible, onClose, children }: ModalProps & PropsWithChildren) => {
  return (
    <RNModal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlayBackground} onPress={onClose} />
      <View style={styles.contentWrapper} pointerEvents="box-none">
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  contentWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: colors.background900,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    maxHeight: "70%",
  },
});

export default Modal;
