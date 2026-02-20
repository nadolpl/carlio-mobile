import { DarkTheme, Theme } from "@react-navigation/native";
import { colors } from "constants/colors";

export const AppTheme: Theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.background900,
    container: colors.background800,
    text: colors.textPrimary,
    border: colors.divider,
    notification: colors.error,
  },
};
