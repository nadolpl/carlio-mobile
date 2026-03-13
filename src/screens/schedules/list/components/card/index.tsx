import { Pressable, StyleSheet } from "react-native";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import ScheduleCardHeader from "screens/schedules/list/components/card/ScheduleCardHeader";
import ScheduleCardProgressBar from "screens/schedules/list/components/card/ScheduleCardProgressBar";
import ScheduleCardDetailsRow from "screens/schedules/list/components/card/ScheduleCardDetailsRow";
import { colors } from "constants/colors";
import { commonStyles } from "utils/styles";

interface ScheduleCardProps {
  schedule: ScheduleResponse;
  onPress: (schedule: ScheduleResponse) => void;
}

const ScheduleCard = ({ schedule, onPress }: ScheduleCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && commonStyles.pressed,
        !schedule.active && styles.inactiveContainer,
      ]}
      onPress={() => onPress(schedule)}
    >
      <ScheduleCardHeader
        name={schedule.name}
        active={schedule.active}
        isOverdue={schedule.isOverdue}
      />

      <ScheduleCardProgressBar
        progressPercentage={schedule.progressPercentage}
        isOverdue={schedule.isOverdue}
      />

      <ScheduleCardDetailsRow
        kilometersLeft={schedule.kilometersLeft}
        daysLeft={schedule.daysLeft}
        isOverdue={schedule.isOverdue}
      />
    </Pressable>
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
