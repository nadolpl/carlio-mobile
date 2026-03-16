import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchSchedules } from "api/hooks/schedule";
import { useListNavigation } from "hooks/useListNavigation";
import { ScheduleResponse } from "models/response/ScheduleResponse";

export const useScheduleList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchSchedules();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddSchedule") });

  const handleCardPress = (schedule: ScheduleResponse) => {
    navigation.navigate("ScheduleDetails", { scheduleId: schedule.id });
  };

  return {
    query,
    handleCardPress,
  };
};
