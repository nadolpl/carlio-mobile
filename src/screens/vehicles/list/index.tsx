import { useSearchVehicles } from "api/hooks/vehicle";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import PageableList from "components/molecules/pageableList";
import VehicleCard from "screens/vehicles/list/components/VehicleCard";

const VehicleListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchVehicles();

  const handlePress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate("AddVehicle")} icon={ICONS.ADD} />
      ),
    });
  }, []);

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <VehicleCard vehicle={item} onPress={handlePress} />}
    />
  );
};

export default VehicleListScreen;
