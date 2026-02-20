import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface DetailRowProps {
  label: string;
  value: string | null;
}

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    value != null && (
      <View style={styles.row}>
        <Text>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.background600,
  },
  value: {
    fontWeight: "bold",
  },
});

export default DetailRow;
