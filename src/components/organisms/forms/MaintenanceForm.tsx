import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { Control } from "react-hook-form";
import { MaintenanceFormInput } from "validation/maintenanceSchema";
import FormScreen from "components/organisms/forms/FormScreen";
import { commonStyles } from "utils/styles";
import { MaintenanceType } from "models/enums/MaintenanceType";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormDate from "components/atoms/formDate";

interface MaintenanceFormProps {
  control: Control<MaintenanceFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

const MaintenanceForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
}: MaintenanceFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
    >
      <FormSelectVehicle name="vehicleId" control={control} required />

      <FormInput name="title" label="Title" control={control} required />

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
          options={mapEnumToOptions(MaintenanceType)}
          required
          flex
        />
      </View>

      <View style={commonStyles.inputRow}>
        <FormInput
          name="laborCost"
          label="Labor cost"
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

export default MaintenanceForm;
