import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useForm } from "react-hook-form";
import {
  MaintenanceFormInput,
  MaintenanceFormOutput,
  maintenanceSchema,
} from "validation/maintenanceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getChangedData } from "utils/form";
import { MaintenanceRequest } from "models/requests/MaintenanceRequest";
import MaintenanceForm from "components/organisms/forms/MaintenanceForm";
import { useUpdateMaintenance } from "api/hooks/maintenance";
import { formatDateArrayToISO } from "utils/date";

const EditMaintenanceScreen = () => {
  const navigation = useNavigation();
  const {
    params: { maintenance },
  } = useRoute<RouteProp<RootStackParamList, "EditMaintenance">>();
  const { mutate: update } = useUpdateMaintenance(maintenance.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<MaintenanceFormInput, any, MaintenanceFormOutput>({
    resolver: zodResolver(maintenanceSchema),
    mode: "onChange",
    defaultValues: {
      title: maintenance.title,
      mileage: maintenance.mileage,
      performedDate: formatDateArrayToISO(maintenance.performedDate),
      laborCost: maintenance.laborCost,
      description: maintenance.description,
      type: maintenance.type,
      vehicleId: maintenance.vehicleId,
      parts: [],
    },
  });

  const onSubmit = (req: MaintenanceFormOutput) => {
    update(getChangedData(dirtyFields, req) as Partial<MaintenanceRequest>, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <MaintenanceForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
    />
  );
};

export default EditMaintenanceScreen;
