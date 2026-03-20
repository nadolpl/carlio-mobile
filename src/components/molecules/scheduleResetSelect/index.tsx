import { Control, FieldValues, Path, useWatch } from "react-hook-form";
import FormSelect from "components/atoms/formSelect";
import { useSearchSchedules } from "api/hooks/schedule";

interface ScheduleResetSelectProps<T extends FieldValues> {
  control: Control<T>;
}

const ScheduleResetSelect = <T extends FieldValues>({ control }: ScheduleResetSelectProps<T>) => {
  const vehicleId = useWatch({
    control,
    name: "vehicleId" as Path<T>,
  });

  const { data, isLoading } = useSearchSchedules({ vehicleId, active: true });
  const schedules = data?.pages.flatMap((page) => page.content || []) || [];

  if (!vehicleId || schedules.length === 0) return null;

  const scheduleOptions = schedules.map((schedule) => ({
    label: schedule.name,
    value: schedule.id,
  }));

  return (
    <FormSelect
      name={"scheduleId" as Path<T>}
      label="Schedule to reset"
      control={control}
      options={scheduleOptions}
      placeholder={isLoading ? "Loading schedules..." : "Select schedule..."}
    />
  );
};

export default ScheduleResetSelect;
