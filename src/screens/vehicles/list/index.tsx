import { useSearchVehicles } from "api/hooks/vehicle";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import PageableList from "components/molecules/pageableList";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";
import { VehicleListedResponse } from "models/response/VehicleListedResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";

const VehicleListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchVehicles();

  const handleActionPress = () => {
    navigation.navigate("AddVehicle");
  };

  const handleCardPress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  const renderItem = ({ item }: { item: VehicleListedResponse }) => (
    <VehicleCard vehicle={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default VehicleListScreen;
