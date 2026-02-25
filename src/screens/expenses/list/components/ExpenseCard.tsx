import { Pressable, StyleSheet, View } from "react-native";
import { commonStyles } from "utils/styles";
import { formatDateArray } from "utils/date";
import { colors } from "constants/colors";
import Text from "components/atoms/text";
import { getEnumValueByKey } from "utils/enum";
import { ExpenseType } from "models/enums/ExpenseType";
import { formatPrice } from "utils/number";
import { ExpenseResponse } from "models/response/ExpenseResponse";

interface ExpenseCardProps {
  expense: ExpenseResponse;
  onPress: (id: string) => void;
}

const ExpenseCard = ({ expense, onPress }: ExpenseCardProps) => {
  return (
    <Pressable
      onPress={() => onPress(expense.id)}
      style={({ pressed }) => [styles.container, pressed && commonStyles.pressed]}
    >
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {getEnumValueByKey(ExpenseType, expense.type)}
        </Text>
        <Text style={styles.date}>{formatDateArray(expense.performedDate)}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>{expense.description}</Text>
        <Text style={styles.costText}>{formatPrice(expense.cost)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background800,
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  costText: {
    fontSize: 14,
    fontWeight: "800",
  },
});

export default ExpenseCard;
