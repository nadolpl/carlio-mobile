import { StyleSheet, View } from "react-native";
import { ICONS } from "constants/icons";
import ScheduleCardDetailRowItem from "screens/schedules/list/components/card/ScheduleCardDetailRowItem";

interface ScheduleCardDetailsRowProps {
  kilometersLeft: number | null;
  daysLeft: number | null;
  isOverdue: boolean;
}

const ScheduleCardDetailsRow = ({
  kilometersLeft,
  daysLeft,
  isOverdue,
}: ScheduleCardDetailsRowProps) => {
  return (
    <View style={styles.detailsRow}>
      {kilometersLeft !== null && (
        <ScheduleCardDetailRowItem
          icon={ICONS.MILEAGE}
          isOverdue={isOverdue}
          value={kilometersLeft}
          suffix="km"
        />
      )}

      {daysLeft !== null && (
        <ScheduleCardDetailRowItem
          icon={ICONS.DATE}
          isOverdue={isOverdue}
          value={daysLeft}
          suffix="days"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ScheduleCardDetailsRow;
