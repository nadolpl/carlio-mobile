import { StyleSheet, View } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import { colors } from "constants/colors";
import { EnumOptions } from "utils/enum";
import FormItemWrapper from "components/molecules/formItemWrapper";

export interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: EnumOptions[];
  label?: string;
  flex?: boolean;
  required?: boolean;
}

const FormSelect = <T extends FieldValues>({
  name,
  control,
  label,
  flex,
  required,
  options,
}: FormSelectProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <FormItemWrapper label={label} required={required} flex={flex} error={error?.message}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={value ? styles.picker : styles.placeholder}
            dropdownIconColor={colors.textPrimary}
          >
            <Picker.Item label="Select..." value={null} enabled={false} />
            {options.map((opt) => (
              <Picker.Item key={opt.value} label={opt.label} value={opt.value} />
            ))}
          </Picker>
        </View>
      </FormItemWrapper>
    )}
  />
);

const styles = StyleSheet.create({
  pickerWrapper: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 12,
    backgroundColor: colors.background800,
    justifyContent: "center",
    paddingLeft: 8,
  },
  placeholder: {
    color: colors.textDisabled,
  },
  picker: {
    color: colors.textPrimary,
  },
});

export default FormSelect;
