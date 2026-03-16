import { StyleProp, StyleSheet, TextStyle, View } from "react-native";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface DetailRowProps {
  label: string;
  value: string | number | null | undefined;
  isFirst?: boolean;
  isLast?: boolean;
  valueStyle?: StyleProp<TextStyle>;
}

const DetailRow = ({ label, value, isFirst, isLast, valueStyle }: DetailRowProps) => {
  if (value == null || value === "") return null;

  return (
    <View style={[styles.row, isFirst && { borderTopWidth: 0 }, isLast && { marginBottom: 0 }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1,
    textAlign: "right",
    marginLeft: 16,
  },
});

export default DetailRow;
