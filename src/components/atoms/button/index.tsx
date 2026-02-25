import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import { commonStyles } from "utils/styles";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type ButtonVariant = "standard" | "outlined" | "transparent";
type ButtonColor = "primary" | "error";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: IoniconsName;
  type?: "submit" | "button";
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  title,
  onPress,
  variant = "standard",
  color = "primary",
  disabled,
  loading,
  loadingText,
  icon,
  style,
}: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[color],
        styles[variant],
        variant === "outlined" && { borderColor: colors[color] },
        pressed && commonStyles.pressed,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? <ActivityIndicator /> : icon && <Icon name={icon} size={20} />}
      <Text style={[styles.text]}>{loading ? loadingText : title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderWidth: 3,
    borderColor: colors.transparent,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  error: {
    backgroundColor: colors.error,
  },
  standard: {},
  transparent: {
    backgroundColor: colors.transparent,
  },
  outlined: {
    backgroundColor: colors.background800,
    borderWidth: 3,
  },
  text: {
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: colors.background700,
    borderColor: colors.transparent,
    opacity: 0.5,
  },
});

export default Button;
