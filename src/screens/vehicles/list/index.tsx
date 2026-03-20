import PageableList from "components/organisms/pageableList";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";
import { VehicleListedResponse } from "models/response/VehicleListedResponse";
import { useVehicleList } from "screens/vehicles/list/useVehicleList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const VehicleListScreen = () => {
  const { query, handleCardPress, handleAddPress } = useVehicleList();

  const renderItem = ({ item }: { item: VehicleListedResponse }) => (
    <VehicleCard vehicle={item} onPress={handleCardPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.VEHICLE}
          title="No vehicles found"
          description="You haven't added any vehicle yet. Add one now"
          actionTitle="Add vehicle"
          onAction={handleAddPress}
        />
      }
    />
  );
};

export default VehicleListScreen;
