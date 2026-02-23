import RNToast, { BaseToast, ErrorToast, ToastConfig } from "react-native-toast-message";
import { colors } from "constants/colors";

const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.success,
        backgroundColor: colors.background800,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
        color: colors.textPrimary,
      }}
      text2Style={{
        fontSize: 14,
        color: colors.textSecondary,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: colors.error,
        backgroundColor: colors.background800,
      }}
      text1Style={{
        fontSize: 16,
        fontWeight: "600",
        color: colors.textPrimary,
      }}
      text2Style={{
        fontSize: 14,
        color: colors.textSecondary,
      }}
    />
  ),
};

const Toast = () => <RNToast config={toastConfig} topOffset={50} />;

export default Toast;
