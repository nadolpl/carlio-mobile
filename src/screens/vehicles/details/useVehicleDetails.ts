import { useDeleteVehicle, useVehicle } from "api/hooks/vehicle";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";

export const useVehicleDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "VehicleDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "VehicleDetails">>();

  const { data: vehicle } = useVehicle(params.vehicleId);
  const { mutate: deleteVehicle } = useDeleteVehicle();
  const { showConfirmation } = useConfirmationModal();

  const handleDeleteVehicle = () => {
    showConfirmation({
      title: "Delete Vehicle",
      message: "Are you sure you want to delete this vehicle?",
      variant: "error",
      onConfirm: () => {
        deleteVehicle(params.vehicleId);
        navigation.goBack();
      },
    });
  };

  const handleEditVehicle = () =>
    vehicle && navigation.navigate("EditVehicle", { vehicle: vehicle });

  return {
    vehicle,
    handleDeleteVehicle,
    handleEditVehicle,
  };
};
