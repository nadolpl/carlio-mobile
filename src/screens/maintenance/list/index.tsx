import PageableList from "components/molecules/pageableList";
import { useSearchMaintenances } from "api/hooks/maintenance";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useListNavigation } from "hooks/useListNavigation";

const MaintenanceListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchMaintenances();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddMaintenance") });

  const handlePress = (id: string) => {
    navigation.navigate("MaintenanceDetails", { maintenanceId: id });
  };

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <MaintenanceCard maintenance={item} onPress={handlePress} />}
    />
  );
};

export default MaintenanceListScreen;
