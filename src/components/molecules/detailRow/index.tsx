import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface DetailRowProps {
  label: string;
  value: string | number | null | undefined;
  isFirst?: boolean;
  isLast?: boolean;
}

const DetailRow = ({ label, value, isFirst, isLast }: DetailRowProps) => {
  if (value == null || value === "") return null;

  return (
    <View
      style={[
        styles.row,
        isFirst && { borderTopWidth: 0 }, // Usuwamy linię nad pierwszym elementem
        isLast && { marginBottom: 0 }, // Ostatni element nie potrzebuje marginesu
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      {/* Używamy String(value), aby bezpiecznie wyświetlić liczby jako tekst */}
      <Text style={styles.value}>{String(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Utrzymuje tekst w jednej linii w pionie
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.divider, // Subtelna linia oddzielająca z Twojej palety
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  value: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1, // Zabezpiecza przed "wypychaniem" tekstu poza ekran
    textAlign: "right",
    marginLeft: 16, // Daje trochę odstępu między etykietą a długą wartością
  },
});

export default DetailRow;
