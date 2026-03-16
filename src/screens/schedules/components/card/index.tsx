import ScheduleHeader from "screens/schedules/components/card/ScheduleHeader";
import ScheduleProgressBar from "screens/schedules/components/card/ScheduleProgressBar";
import ScheduleCardDetailsRow from "screens/schedules/components/card/ScheduleCardDetailsRow";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import { StyleSheet, View } from "react-native";
import { colors } from "constants/colors";

interface ScheduleCardProps {
  schedule: ScheduleResponse;
}

const ScheduleCard = ({ schedule }: ScheduleCardProps) => {
  return (
    <View style={[styles.container, !schedule.active && styles.inactiveContainer]}>
      <ScheduleHeader
        name={schedule.name}
        active={schedule.active}
        isOverdue={schedule.isOverdue}
      />

      <ScheduleProgressBar
        progressPercentage={schedule.progressPercentage}
        isOverdue={schedule.isOverdue}
      />

      <ScheduleCardDetailsRow
        kilometersLeft={schedule.kilometersLeft}
        daysLeft={schedule.daysLeft}
        isOverdue={schedule.isOverdue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background800,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.background700,
  },
  inactiveContainer: {
    opacity: 0.6,
  },
});

export default ScheduleCard;
