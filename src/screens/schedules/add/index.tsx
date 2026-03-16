import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useCreateSchedule } from "api/hooks/schedule";
import { useForm } from "react-hook-form";
import { ScheduleFormInput, ScheduleFormOutput, scheduleSchema } from "validation/scheduleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScheduleRequest } from "models/requests/ScheduleRequest";
import ScheduleForm from "components/organisms/forms/ScheduleForm";

const ScheduleAddScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { mutate: create, isPending: isCreating } = useCreateSchedule();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ScheduleFormInput, any, ScheduleFormOutput>({
    resolver: zodResolver(scheduleSchema),
    mode: "onChange",
  });

  const onSubmit = (req: ScheduleFormOutput) => {
    create(req as ScheduleRequest, {
      onSuccess: (res) => navigation.replace("ScheduleDetails", { scheduleId: res }),
    });
  };

  return (
    <ScheduleForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty}
      loading={isCreating}
    />
  );
};

export default ScheduleAddScreen;
