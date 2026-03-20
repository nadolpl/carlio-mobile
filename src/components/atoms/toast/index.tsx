import RNToast, { BaseToast, ErrorToast, ToastConfig } from "react-native-toast-message";
import { colors } from "constants/colors";
import { StyleSheet } from "react-native";

const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={[styles.container, { borderLeftColor: colors.primary }]}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={0}
      text2NumberOfLines={0}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={[styles.container, { borderLeftColor: colors.error }]}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
      text1NumberOfLines={0}
      text2NumberOfLines={0}
    />
  ),
};

const Toast = () => <RNToast config={toastConfig} topOffset={50} />;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background800,
    height: "auto",
    minHeight: 60,
    paddingVertical: 10,
    borderColor: colors.background700,
    borderWidth: 1,
  },
  text1Style: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    flexWrap: "wrap",
  },
  text2Style: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default Toast;
