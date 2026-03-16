import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import { commonStyles } from "utils/styles";
import Loader from "components/atoms/loader";

type ButtonVariant = "standard" | "outlined" | "transparent";
export type ButtonColor = "primary" | "error" | "success";

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
        styles[variant],
        variant === "standard" && { backgroundColor: colors[color] },
        variant === "outlined" && { borderColor: colors[color] },
        pressed && commonStyles.pressed,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? <Loader /> : icon && <Icon name={icon} size={20} />}

      <Text style={[styles.text]}>{loading && loadingText ? loadingText : title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    borderWidth: 2,
    borderColor: colors.transparent,
    minHeight: 48,
  },
  standard: {},
  transparent: {
    backgroundColor: colors.transparent,
  },
  outlined: {
    backgroundColor: colors.transparent,
  },
  text: {
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
