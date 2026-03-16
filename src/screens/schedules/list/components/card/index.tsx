import { Pressable } from "react-native";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import { commonStyles } from "utils/styles";
import ScheduleCard from "screens/schedules/components/card";

interface PressableScheduleCardProps {
  schedule: ScheduleResponse;
  onPress: (schedule: ScheduleResponse) => void;
}

const PressableScheduleCard = ({ schedule, onPress }: PressableScheduleCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && commonStyles.pressed}
      onPress={() => onPress(schedule)}
    >
      <ScheduleCard schedule={schedule} />
    </Pressable>
  );
};

export default PressableScheduleCard;
