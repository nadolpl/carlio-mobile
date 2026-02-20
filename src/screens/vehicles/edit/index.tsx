import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useUpdateVehicle } from "api/hooks/vehicle";
import { useForm } from "react-hook-form";
import { VehicleFormInput, VehicleFormOutput, vehicleSchema } from "validation/vehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import VehicleForm from "components/organisms/forms/VehicleForm";
import { VehicleRequest } from "models/requests/VehicleRequest";
import { getChangedData } from "utils/form";

const EditVehicleScreen = () => {
  const navigation = useNavigation();
  const {
    params: { vehicle },
  } = useRoute<RouteProp<RootStackParamList, "EditVehicle">>();
  const { mutate: update } = useUpdateVehicle(vehicle.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<VehicleFormInput, any, VehicleFormOutput>({
    resolver: zodResolver(vehicleSchema),
    mode: "onChange",
    defaultValues: {
      name: vehicle.name,
      brand: vehicle.brand,
      model: vehicle.model,
      fuelType: vehicle.fuelType,
      mileage: vehicle.mileage,
      registrationNumber: vehicle.registrationNumber,
      productionYear: vehicle.productionYear,
      capacity: vehicle.capacity,
      power: vehicle.power,
      vin: vehicle.vin,
    },
  });

  const onSubmit = (req: VehicleFormOutput) => {
    update(getChangedData(dirtyFields, req) as Partial<VehicleRequest>, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <VehicleForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
    />
  );
};

export default EditVehicleScreen;
