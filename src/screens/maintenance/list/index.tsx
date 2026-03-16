import PageableList from "components/organisms/pageableList";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";
import { MaintenanceListedResponse } from "models/response/MaintenanceListedResponse";
import { useMaintenanceList } from "screens/maintenance/list/useMaintenanceList";

const MaintenanceListScreen = () => {
  const { query, handleCardPress } = useMaintenanceList();

  const renderItem = ({ item }: { item: MaintenanceListedResponse }) => (
    <MaintenanceCard maintenance={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default MaintenanceListScreen;
