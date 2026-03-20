import PageableList from "components/organisms/pageableList";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";
import { MaintenanceListedResponse } from "models/response/MaintenanceListedResponse";
import { useMaintenanceList } from "screens/maintenance/list/useMaintenanceList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const MaintenanceListScreen = () => {
  const { query, handleCardPress, handleAddPress } = useMaintenanceList();

  const renderItem = ({ item }: { item: MaintenanceListedResponse }) => (
    <MaintenanceCard maintenance={item} onPress={handleCardPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.MAINTENANCE}
          title="No maintenances found"
          description="You haven't added any maintenances yet. Add one now"
          actionTitle="Add maintenance"
          onAction={handleAddPress}
        />
      }
    />
  );
};

export default MaintenanceListScreen;
