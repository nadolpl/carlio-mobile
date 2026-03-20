import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useForm } from "react-hook-form";
import { ScheduleFormInput, ScheduleFormOutput, scheduleSchema } from "validation/scheduleSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScheduleRequest } from "models/requests/ScheduleRequest";
import ScheduleForm from "components/organisms/forms/ScheduleForm";
import { useUpdateSchedule } from "api/hooks/schedule";
import { getChangedData } from "utils/form";
import { formatDateArrayToISO } from "utils/date";

const ScheduleEditScreen = () => {
  const navigation = useNavigation();
  const {
    params: { schedule },
  } = useRoute<RouteProp<RootStackParamList, "EditSchedule">>();
  const { mutate: update, isPending } = useUpdateSchedule(schedule.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<ScheduleFormInput, any, ScheduleFormOutput>({
    resolver: zodResolver(scheduleSchema),
    mode: "onChange",
    defaultValues: {
      ...schedule,
      lastPerformedDate: schedule.lastPerformedDate
        ? formatDateArrayToISO(schedule.lastPerformedDate)
        : null,
    },
  });

  const onSubmit = (req: ScheduleFormOutput) => {
    update(getChangedData(dirtyFields, req) as Partial<ScheduleRequest>, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <ScheduleForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
    />
  );
};

export default ScheduleEditScreen;
