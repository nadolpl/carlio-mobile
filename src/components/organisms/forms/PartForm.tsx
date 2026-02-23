import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { Control } from "react-hook-form";
import { PartFormInput } from "validation/partSchema";
import { PartCategory } from "models/enums/PartCategory";
import FormScreen from "components/organisms/forms/FormScreen";
import { commonStyles } from "utils/styles";

interface PartFormProps {
  control: Control<PartFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

const PartForm = ({ control, handleSubmit, submitLabel, submitDisabled }: PartFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
    >
      <FormInput
        name="name"
        label="Part name"
        control={control}
        placeholder="Brake pads"
        required
      />

      <View style={commonStyles.inputRow}>
        <FormInput
          name="manufacturer"
          label="Manufacturer"
          control={control}
          placeholder="Bosch"
          flex
        />

        <FormSelect
          name="category"
          label="Category"
          control={control}
          options={mapEnumToOptions(PartCategory)}
          required
          flex
        />
      </View>

      <FormInput
        name="description"
        label="Description"
        control={control}
        placeholder="Description"
      />
    </FormScreen>
  );
};

export default PartForm;
