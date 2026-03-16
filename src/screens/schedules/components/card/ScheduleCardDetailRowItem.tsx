import { StyleSheet, View } from "react-native";
import Icon, { IoniconsName } from "components/atoms/icon";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface ScheduleCardDetailRowItemProps {
  icon: IoniconsName;
  isOverdue: boolean;
  value: number;
  suffix?: string;
}

const ScheduleCardDetailRowItem = ({
  icon,
  isOverdue,
  value,
  suffix,
}: ScheduleCardDetailRowItemProps) => {
  return (
    <View style={styles.detailItem}>
      <Icon name={icon} size={16} color={colors.textSecondary} />
      <Text style={styles.detailText}>
        {value < 0 ? "Exceeded by " : "Remaining "}
        <Text
          style={[{ color: isOverdue ? colors.error : colors.textPrimary }, styles.detailValue]}
        >
          {Math.abs(value)} {suffix}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  detailValue: {
    fontWeight: "bold",
  },
});

export default ScheduleCardDetailRowItem;
