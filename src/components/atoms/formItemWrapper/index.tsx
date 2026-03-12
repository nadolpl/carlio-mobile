import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import { colors } from "constants/colors";
import { PropsWithChildren } from "react";

interface FormItemWrapperProps {
  label?: string;
  required?: boolean;
  flex?: boolean;
  error?: string;
}

const FormItemWrapper = ({
  label,
  required,
  flex,
  children,
  error,
}: FormItemWrapperProps & PropsWithChildren) => {
  return (
    <View style={[styles.container, flex && { flex: 1 }]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && "*"}
        </Text>
      )}
      {children}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  error: {
    color: colors.error,
  },
});

export default FormItemWrapper;
