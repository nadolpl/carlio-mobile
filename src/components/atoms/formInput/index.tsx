import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { colors } from "constants/colors";
import Text from "components/atoms/text";

interface FormInputProps<
  TFormValues extends FieldValues,
> extends TextInputProps {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  label?: string;
}

export const FormInput = <TFormValues extends FieldValues>({
  name,
  control,
  label,
  ...props
}: FormInputProps<TFormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}

          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    marginBottom: 5,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: colors.background800,
    color: colors.textPrimary,
  },
});
