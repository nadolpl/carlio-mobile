import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { Control } from "react-hook-form";
import { ExpenseFormInput } from "validation/expenseSchema";
import FormScreen from "components/organisms/formScreen";
import { commonStyles } from "utils/styles";
import { ExpenseType } from "models/enums/ExpenseType";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormDate from "components/atoms/formDate";

interface ExpenseFormProps {
  control: Control<ExpenseFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
}

const ExpenseForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
  loading,
}: ExpenseFormProps) => {
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
    </FormScreen>
  );
};

export default ExpenseForm;
