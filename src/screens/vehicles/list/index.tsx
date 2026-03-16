import PageableList from "components/molecules/pageableList";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";
import { VehicleListedResponse } from "models/response/VehicleListedResponse";
import { useVehicleList } from "screens/vehicles/list/useVehicleList";

const VehicleListScreen = () => {
  const { query, handleCardPress } = useVehicleList();

  const renderItem = ({ item }: { item: VehicleListedResponse }) => (
    <VehicleCard vehicle={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default VehicleListScreen;
