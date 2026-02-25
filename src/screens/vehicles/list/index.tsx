import { useSearchVehicles } from "api/hooks/vehicle";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PageableList from "components/molecules/pageableList";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";
import { useListNavigation } from "hooks/useListNavigation";
import { VehicleListedResponse } from "models/response/VehicleListedResponse";

const VehicleListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchVehicles();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddVehicle") });

  const handlePress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  const renderItem = ({ item }: { item: VehicleListedResponse }) => (
    <VehicleCard vehicle={item} onPress={handlePress} />
  );

  return <PageableList query={query} renderItem={renderItem} />;
};

export default VehicleListScreen;
