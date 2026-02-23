import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import Button from "components/atoms/button";
import { PropsWithChildren } from "react";

interface FormScreenProps {
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

const FormScreen = ({
  handleSubmit,
  submitLabel = "Submit",
  submitDisabled = false,
  children,
}: FormScreenProps & PropsWithChildren) => (
  <KeyboardAvoidingView style={styles.keyboardContainer} behavior="height">
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
      <Button title={submitLabel} onPress={handleSubmit} disabled={submitDisabled} />
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
});

export default FormScreen;
