import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Text from "components/atoms/text";
import { colors } from "constants/colors";

interface BadgeProps {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Badge = ({ label, labelStyle, containerStyle }: BadgeProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.background700,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Badge;
