import PageableList from "components/molecules/pageableList";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";
import { useSearchSchedules } from "api/hooks/schedule";
import PressableScheduleCard from "screens/schedules/list/components/card";

const ScheduleListScreen = () => {
  const query = useSearchSchedules();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleActionPress = () => {
    navigation.navigate("AddSchedule");
  };

  const handleCardPress = (schedule: ScheduleResponse) => {
    navigation.navigate("ScheduleDetails", { scheduleId: schedule.id });
  };

  const renderItem = ({ item }: { item: ScheduleResponse }) => (
    <PressableScheduleCard schedule={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default ScheduleListScreen;
