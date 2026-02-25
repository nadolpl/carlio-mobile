import { useNavigation } from "@react-navigation/native";
import { useCreateVehicle } from "api/hooks/vehicle";
import { useForm } from "react-hook-form";
import { VehicleFormInput, VehicleFormOutput, vehicleSchema } from "validation/vehicleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { VehicleRequest } from "models/requests/VehicleRequest";
import VehicleForm from "components/organisms/forms/VehicleForm";

const AddVehicleScreen = () => {
  const navigation = useNavigation();
  const { mutate: create, isPending } = useCreateVehicle();
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<VehicleFormInput, any, VehicleFormOutput>({
    resolver: zodResolver(vehicleSchema),
    mode: "onChange",
  });

  const onSubmit = (req: VehicleFormOutput) => {
    create(req as VehicleRequest, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <VehicleForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
    />
  );
};

export default AddVehicleScreen;
