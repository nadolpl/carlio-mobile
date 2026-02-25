import { View } from "react-native";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { Control } from "react-hook-form";
import { PartFormInput } from "validation/partSchema";
import { PartCategory } from "models/enums/PartCategory";
import FormScreen from "components/organisms/formScreen";
import { commonStyles } from "utils/styles";

interface PartFormProps {
  control: Control<PartFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
}

const PartForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
  loading,
}: PartFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
      loading={loading}
    >
      <FormInput name="name" label="Part name" control={control} required />

      <View style={commonStyles.inputRow}>
        <FormInput name="manufacturer" label="Manufacturer" control={control} flex />

        <FormSelect
          name="category"
          label="Category"
          control={control}
          options={mapEnumToOptions(PartCategory)}
          required
          flex
        />
      </View>

      <FormInput name="description" label="Description" control={control} />
    </FormScreen>
  );
};

export default PartForm;
