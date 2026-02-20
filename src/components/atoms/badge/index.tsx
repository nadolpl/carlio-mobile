import { StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import { colors } from "constants/colors";

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    textTransform: "uppercase",
    backgroundColor: colors.background700,
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default Badge;
