import PageableList from "components/organisms/pageableList";
import { ScheduleResponse } from "models/response/ScheduleResponse";
import PressableScheduleCard from "screens/schedules/list/components/card";
import { useScheduleList } from "screens/schedules/list/useScheduleList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const ScheduleListScreen = () => {
  const { query, handleCardPress, handleAddPress } = useScheduleList();

  const renderItem = ({ item }: { item: ScheduleResponse }) => (
    <PressableScheduleCard schedule={item} onPress={handleCardPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.SCHEDULE}
          title="No schedules found"
          description="You haven't added any schedules yet. Keep track of your car's health by adding one."
          actionTitle="Add schedule"
          onAction={handleAddPress}
        />
      }
    />
  );
};

export default ScheduleListScreen;
