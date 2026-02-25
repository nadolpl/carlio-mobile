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
  const { mutate: update, isPending } = useUpdateMaintenance(maintenance.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<MaintenanceFormInput, any, MaintenanceFormOutput>({
    resolver: zodResolver(maintenanceSchema),
    mode: "onChange",
    defaultValues: {
      ...maintenance,
      performedDate: formatDateArrayToISO(maintenance.performedDate),
      parts: maintenance.parts || [],
    },
  });

  const onSubmit = (req: MaintenanceFormOutput) => {
    const payload = getChangedData(dirtyFields, req) as Partial<MaintenanceRequest>;
    update(payload, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <MaintenanceForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
    />
  );
};

export default EditMaintenanceScreen;
