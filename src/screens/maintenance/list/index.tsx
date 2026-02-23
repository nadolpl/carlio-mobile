import PageableList from "components/molecules/pageableList";
import { useSearchMaintenances } from "api/hooks/maintenance";
import MaintenanceCard from "screens/maintenance/list/components/MaintenanceCard";
import { useLayoutEffect } from "react";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

const MaintenanceListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchMaintenances();

  const handlePress = (id: string) => {
    navigation.navigate("MaintenanceDetails", { maintenanceId: id });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate("AddMaintenance")} icon={ICONS.ADD} />
      ),
    });
  }, []);

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <MaintenanceCard maintenance={item} onPress={handlePress} />}
    />
  );
};

export default MaintenanceListScreen;
