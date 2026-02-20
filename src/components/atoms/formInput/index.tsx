import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { colors } from "constants/colors";
import FormItemWrapper from "components/atoms/formItemWrapper";

interface FormInputProps<TFormValues extends FieldValues> extends TextInputProps {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  label?: string;
  flex?: boolean;
  required?: boolean;
}

const FormInput = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  flex,
  required,
  ...props
}: FormInputProps<TFormValues>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <FormItemWrapper label={label} required={required} flex={flex} error={error?.message}>
        <TextInput
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value != null ? value.toString() : null}
          placeholderTextColor={colors.textDisabled}
          {...props}
        />
      </FormItemWrapper>
    )}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.background800,
    color: colors.textPrimary,
    fontSize: 16,
  },
});

export default FormInput;
