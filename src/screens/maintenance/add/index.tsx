import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {
  MaintenanceFormInput,
  MaintenanceFormOutput,
  maintenanceSchema,
} from "validation/maintenanceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MaintenanceRequest } from "models/requests/MaintenanceRequest";
import { useCreateMaintenance } from "api/hooks/maintenance";
import MaintenanceForm from "components/organisms/forms/MaintenanceForm";

const AddMaintenanceScreen = () => {
  const navigation = useNavigation();
  const { mutate: create, isPending: isCreating } = useCreateMaintenance();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<MaintenanceFormInput, any, MaintenanceFormOutput>({
    resolver: zodResolver(maintenanceSchema),
    mode: "onChange",
    defaultValues: {
      parts: [],
    },
  });

  const onSubmit = (req: MaintenanceFormOutput) => {
    create(req as MaintenanceRequest);
    navigation.goBack();
  };

  return (
    <MaintenanceForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty || isCreating}
    />
  );
};

export default AddMaintenanceScreen;
