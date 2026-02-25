import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import Button from "components/atoms/button";
import { PropsWithChildren } from "react";

interface FormScreenProps {
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
  isModal?: boolean;
}

const FormScreen = ({
  handleSubmit,
  submitLabel = "Submit",
  submitDisabled = false,
  isModal = false,
  children,
  loading = false,
}: FormScreenProps & PropsWithChildren) => (
  <KeyboardAvoidingView
    style={[styles.keyboardContainer, isModal && styles.modalKeyboardContainer]}
    behavior={isModal ? "padding" : "height"}
  >
    <ScrollView
      style={[styles.scrollView, isModal && styles.modalScrollView]}
      contentContainerStyle={[styles.scrollContent, isModal && styles.modalScrollContent]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
      <Button
        title={submitLabel}
        onPress={handleSubmit}
        disabled={submitDisabled}
        loading={loading}
      />
    </ScrollView>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  modalKeyboardContainer: {
    flex: undefined,
    width: "100%",
  },
  modalScrollView: {
    flex: undefined,
  },
  modalScrollContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default FormScreen;
