import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  inputRow: {
    flexDirection: "row",
    gap: 12,
  },
});
