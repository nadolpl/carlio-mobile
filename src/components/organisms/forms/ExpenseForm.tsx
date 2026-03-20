import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { Control, UseFormSetValue } from "react-hook-form";
import { ExpenseFormInput } from "validation/expenseSchema";
import FormScreen from "components/organisms/formScreen";
import { commonStyles } from "utils/styles";
import { ExpenseType } from "models/enums/ExpenseType";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormDate from "components/atoms/formDate";
import { useAutoFillVehicleMileage } from "hooks/useAutoFillVehicleMileage";
import ScheduleResetSelect from "components/molecules/scheduleResetSelect";

interface ExpenseFormProps {
  control: Control<ExpenseFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
  setValue: UseFormSetValue<ExpenseFormInput>;
  showScheduleResetSelect?: boolean;
  disableAutoFillMileage?: boolean;
}

const ExpenseForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
  loading,
  setValue,
  showScheduleResetSelect,
  disableAutoFillMileage,
}: ExpenseFormProps) => {
  useAutoFillVehicleMileage(control, setValue, disableAutoFillMileage);

  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
      loading={loading}
    >
      <FormSelectVehicle name="vehicleId" control={control} required />

      <View style={commonStyles.inputRow}>
        <FormInput
          name="mileage"
          label="Mileage"
          control={control}
          flex
          required
          keyboardType="number-pad"
        />

        <FormSelect
          name="type"
          label="Type"
          control={control}
          options={mapEnumToOptions(ExpenseType)}
          required
          flex
          placeholder="Select type..."
        />
      </View>

      <View style={commonStyles.inputRow}>
        <FormInput
          name="cost"
          label="Cost"
          control={control}
          flex
          required
          keyboardType="number-pad"
        />
        <FormDate name="performedDate" label="Date" control={control} flex required />
      </View>

      <FormInput name="description" label="Description" control={control} />

      {showScheduleResetSelect && <ScheduleResetSelect control={control} />}
    </FormScreen>
  );
};

export default ExpenseForm;
