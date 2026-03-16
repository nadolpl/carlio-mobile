import PageableList from "components/molecules/pageableList";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import PressableScheduleCard from "screens/schedules/list/components/card";
import { useScheduleList } from "screens/schedules/list/useScheduleList";

const ScheduleListScreen = () => {
  const { query, handleCardPress } = useScheduleList();

  const renderItem = ({ item }: { item: ScheduleResponse }) => (
    <PressableScheduleCard schedule={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default ScheduleListScreen;
