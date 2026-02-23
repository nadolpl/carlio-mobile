import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { FuelType } from "models/enums/FuelType";
import { Control } from "react-hook-form";
import { VehicleFormInput } from "validation/vehicleSchema";
import FormScreen from "components/organisms/forms/FormScreen";
import { commonStyles } from "utils/styles";

interface VehicleFormProps {
  control: Control<VehicleFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

const VehicleForm = ({ control, handleSubmit, submitLabel, submitDisabled }: VehicleFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
    >
      <FormInput
        name="name"
        label="Vehicle name"
        control={control}
        placeholder="My Daily Car"
        required
      />

      <View style={commonStyles.inputRow}>
        <FormInput name="brand" label="Brand" control={control} placeholder="Brand" required flex />
        <FormInput name="model" label="Model" control={control} placeholder="Model" required flex />
      </View>

      <View style={commonStyles.inputRow}>
        <FormSelect
          name="fuelType"
          label="Fuel type"
          control={control}
          options={mapEnumToOptions(FuelType)}
          required
          flex
        />
        <FormInput
          name="mileage"
          label="Mileage"
          control={control}
          placeholder="10000"
          keyboardType="number-pad"
          required
          flex
        />
      </View>

      <View style={commonStyles.inputRow}>
        <FormInput
          name="registrationNumber"
          label="Registration Number"
          control={control}
          placeholder="WPL01010"
          flex
        />
        <FormInput
          name="productionYear"
          label="Production Year"
          control={control}
          placeholder="2015"
          keyboardType="number-pad"
          flex
        />
      </View>

      <View style={commonStyles.inputRow}>
        <FormInput
          name="capacity"
          label="Capacity"
          control={control}
          placeholder="1400"
          keyboardType="number-pad"
          flex
        />
        <FormInput
          name="power"
          label="Power"
          control={control}
          placeholder="100"
          keyboardType="number-pad"
          flex
        />
      </View>

      <FormInput name="vin" label="VIN" control={control} placeholder="WVWZZZ1JZXW000001" />
    </FormScreen>
  );
};

export default VehicleForm;
