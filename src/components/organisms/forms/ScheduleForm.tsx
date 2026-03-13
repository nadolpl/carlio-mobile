import FormScreen from "components/organisms/formScreen";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import { View } from "react-native";
import { commonStyles } from "utils/styles";
import FormInput from "components/atoms/formInput";
import FormDate from "components/atoms/formDate";
import { Control } from "react-hook-form";
import { ScheduleFormInput } from "validation/scheduleSchema";

interface ScheduleFormProps {
  control: Control<ScheduleFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
}

const ScheduleForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
  loading,
}: ScheduleFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
      loading={loading}
    >
      <FormSelectVehicle name="vehicleId" control={control} required />
      <FormInput name="name" label="Name" control={control} required />

      <View style={commonStyles.inputRow}>
        <FormInput
          name="intervalKilometers"
          label="Interval (km)"
          control={control}
          flex
          keyboardType="number-pad"
        />
        <FormInput
          name="intervalDays"
          label="Interval (days)"
          control={control}
          flex
          keyboardType="number-pad"
        />
      </View>

      <FormDate name="lastPerformedDate" label="Last performed date" control={control} />

      <FormInput
        name="lastPerformedMileage"
        label="Last performed mileage"
        control={control}
        keyboardType="number-pad"
      />
    </FormScreen>
  );
};

export default ScheduleForm;
