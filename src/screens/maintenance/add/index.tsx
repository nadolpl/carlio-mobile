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
import { useUploadAttachments } from "hooks/useUploadAttachments";

const AddMaintenanceScreen = () => {
  const navigation = useNavigation();
  const { mutateAsync: create, isPending: isCreating } = useCreateMaintenance();
  const { uploadAttachments, isUploading } = useUploadAttachments();

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

  const onSubmit = async (req: MaintenanceFormOutput) => {
    try {
      const maintenanceId = await create(req as MaintenanceRequest);
      await uploadAttachments(req, maintenanceId);
      navigation.goBack();
    } catch {}
  };

  return (
    <MaintenanceForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty || isCreating || isUploading}
    />
  );
};

export default AddMaintenanceScreen;
