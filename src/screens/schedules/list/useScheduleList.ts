import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchSchedules } from "api/hooks/schedule";
import { useListNavigation } from "hooks/useListNavigation";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import { useSyncScheduleNotifications } from "hooks/useSyncScheduleNotifications";
import { useMemo } from "react";

export const useScheduleList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchSchedules();

  const schedules = useMemo(() => {
    return query?.data?.pages.flatMap((page) => page.content) || [];
  }, [query?.data?.pages]);

  const handleAddPress = () => navigation.navigate("AddSchedule");

  useListNavigation({ onPressAdd: handleAddPress });
  useSyncScheduleNotifications(schedules);

  const handleCardPress = (schedule: ScheduleResponse) => {
    navigation.navigate("ScheduleDetails", { scheduleId: schedule.id });
  };

  return {
    query,
    handleCardPress,
    handleAddPress
  };
};
