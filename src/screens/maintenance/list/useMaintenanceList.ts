import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchMaintenances } from "api/hooks/maintenance";
import { useListNavigation } from "hooks/useListNavigation";

export const useMaintenanceList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchMaintenances();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddMaintenance") });

  const handleCardPress = (id: string) => {
    navigation.navigate("MaintenanceDetails", { maintenanceId: id });
  };

  return {
    query,
    handleCardPress,
  };
};
