import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchVehicles } from "api/hooks/vehicle";
import { useListNavigation } from "hooks/useListNavigation";

export const useVehicleList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchVehicles();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddVehicle") });

  const handleCardPress = (id: string) => {
    navigation.navigate("VehicleDetails", { vehicleId: id });
  };

  return {
    query,
    handleCardPress,
  };
};
