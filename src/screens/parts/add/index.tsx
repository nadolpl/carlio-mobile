import { useNavigation } from "@react-navigation/native";
import { useCreatePart } from "api/hooks/part";
import { useForm } from "react-hook-form";
import { PartFormInput, PartFormOutput, partSchema } from "validation/partSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartRequest } from "models/requests/PartRequest";
import PartForm from "components/organisms/forms/PartForm";

const AddPartScreen = () => {
  const navigation = useNavigation();
  const { mutate: create, isPending } = useCreatePart();
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<PartFormInput, any, PartFormOutput>({
    resolver: zodResolver(partSchema),
    mode: "onChange",
  });

  const onSubmit = (req: PartFormOutput) => {
    create(req as PartRequest, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <PartForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
    />
  );
};

export default AddPartScreen;
