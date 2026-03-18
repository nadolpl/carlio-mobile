import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeleteMaintenance, useMaintenance } from "api/hooks/maintenance";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";

export const useMaintenanceDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "MaintenanceDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "MaintenanceDetails">>();

  const { data: maintenance } = useMaintenance(params.maintenanceId);
  const { mutate: deleteMaintenance } = useDeleteMaintenance();
  const { showConfirmation} = useConfirmationModal();

  const handleDeleteMaintenance = () => {
    showConfirmation({
      title: "Delete Maintenance",
      message: "Are you sure you want to delete this maintenance?",
      variant: "error",
      onConfirm: () => {
        navigation.goBack();
        deleteMaintenance(params.maintenanceId);
      },
    });
  };

  const handleEditMaintenance = () =>
    maintenance && navigation.navigate("EditMaintenance", { maintenance });

  return {
    maintenance,
    handleDeleteMaintenance,
    handleEditMaintenance,
  };
};
