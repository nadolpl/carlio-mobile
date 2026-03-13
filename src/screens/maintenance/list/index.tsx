import PageableList from "components/molecules/pageableList";
import { useSearchMaintenances } from "api/hooks/maintenance";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { MaintenanceListedResponse } from "models/response/MaintenanceListedResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";

const MaintenanceListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchMaintenances();

  const handleActionPress = () => {
    navigation.navigate("AddMaintenance");
  };

  const handleCardPress = (id: string) => {
    navigation.navigate("MaintenanceDetails", { maintenanceId: id });
  };

  const renderItem = ({ item }: { item: MaintenanceListedResponse }) => (
    <MaintenanceCard maintenance={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default MaintenanceListScreen;
