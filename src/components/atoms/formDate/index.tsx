import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import DatePicker from "react-native-date-picker";
import { colors } from "constants/colors";
import FormItemWrapper from "components/atoms/formItemWrapper";
import Text from "components/atoms/text";
import { formatDate } from "utils/date";

export interface FormDatePickerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  flex?: boolean;
  required?: boolean;
}

const FormDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  flex,
  required,
}: FormDatePickerProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const dateValue = value ? new Date(value) : new Date();

        return (
          <>
            <FormItemWrapper label={label} required={required} flex={flex} error={error?.message}>
              <Pressable style={styles.inputWrapper} onPress={() => setOpen(true)}>
                <Text style={value != null ? styles.text : styles.placeholder}>
                  {value ? formatDate(value, "DD MMMM YYYY") : "Select date..."}
                </Text>
              </Pressable>
            </FormItemWrapper>

            <DatePicker
              modal
              open={open}
              date={dateValue}
              mode="date"
              confirmText="Confirm"
              cancelText="Cancel"
              onConfirm={(selectedDate) => {
                setOpen(false);
                onChange(selectedDate.toISOString());
              }}
              onCancel={() => setOpen(false)}
            />
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 12,
    backgroundColor: colors.background800,
    justifyContent: "center",
    paddingLeft: 16,
  },
  text: {
    color: colors.textPrimary,
  },
  placeholder: {
    color: colors.textDisabled,
  },
});

export default FormDatePicker;
