import PageableList from "components/molecules/pageableList";
import { useSearchMaintenances } from "api/hooks/maintenance";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";

interface MaintenanceListScreenProps {}

const MaintenanceListScreen = ({}: MaintenanceListScreenProps) => {
  const query = useSearchMaintenances();

  const handlePress = (id: string) => {
    console.log(`Maintenance with ID ${id} pressed`);
  };

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <MaintenanceCard maintenance={item} onPress={handlePress} />}
    />
  );
};

export default MaintenanceListScreen;
