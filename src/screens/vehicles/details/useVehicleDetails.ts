import { useDeleteVehicle, useVehicle } from "api/hooks/vehicle";
import { useConfirmationModal } from "hooks/useConfirmationModal";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

export const useVehicleDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "VehicleDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "VehicleDetails">>();

  const { data: vehicle } = useVehicle(params.vehicleId);
  const { mutate: deleteVehicle } = useDeleteVehicle();
  const { showConfirmation, props } = useConfirmationModal();

  const handleDeleteVehicle = () => {
    showConfirmation({
      title: "Delete Vehicle",
      message: "Are you sure you want to delete this vehicle?",
      onConfirm: () =>
        deleteVehicle(params.vehicleId, {
          onSuccess: () => navigation.goBack(),
        }),
    });
  };

  const handleEditVehicle = () =>
    vehicle && navigation.navigate("EditVehicle", { vehicle: vehicle });

  return {
    navigation,
    vehicle,
    handleDeleteVehicle,
    handleEditVehicle,
    confirmationModalProps: props,
  };
};
