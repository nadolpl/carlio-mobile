import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useUpdatePart } from "api/hooks/part";
import { useForm } from "react-hook-form";
import { PartFormInput, PartFormOutput, partSchema } from "validation/partSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getChangedData } from "utils/form";
import { PartRequest } from "models/requests/PartRequest";
import PartForm from "components/organisms/forms/PartForm";

interface EditPartScreenProps {}

const EditPartScreen = ({}: EditPartScreenProps) => {
  const navigation = useNavigation();
  const {
    params: { part },
  } = useRoute<RouteProp<RootStackParamList, "EditPart">>();
  const { mutate: update, isPending } = useUpdatePart(part.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<PartFormInput, any, PartFormOutput>({
    resolver: zodResolver(partSchema),
    mode: "onChange",
    defaultValues: {
      ...part,
    },
  });

  const onSubmit = (req: PartFormOutput) => {
    update(getChangedData(dirtyFields, req) as Partial<PartRequest>, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <PartForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
    />
  );
};

export default EditPartScreen;
