import { Button, Platform, Pressable, StyleSheet } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { colors } from "constants/colors";
import FormItemWrapper from "components/atoms/formItemWrapper";
import Text from "components/atoms/text";
import { formatDate } from "utils/date";
import { useModal } from "hooks/useModal";
import Modal from "components/atoms/modal";
import { ICONS } from "constants/icons";
import Icon from "components/atoms/icon";

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
  const { isOpen, open, close } = useModal();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const dateValue = value ? new Date(value) : new Date();

        const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
          if (Platform.OS === "android") close();
          if (event.type === "set" && selectedDate) onChange(selectedDate.toISOString());
          else if (event.type === "dismissed") close();
        };

        return (
          <>
            <FormItemWrapper label={label} required={required} flex={flex} error={error?.message}>
              <Pressable style={styles.inputWrapper} onPress={open}>
                <Text style={value != null ? styles.text : styles.placeholder}>
                  {value ? formatDate(value, "DD MMMM YYYY") : "Select date..."}
                </Text>
                <Icon name={ICONS.DATE} />
              </Pressable>
            </FormItemWrapper>

            {isOpen &&
              (Platform.OS === "ios" ? (
                <Modal visible={isOpen} onClose={close}>
                  <DateTimePicker value={dateValue} display="spinner" onChange={handleDateChange} />
                  <Button title="Confirm" onPress={close} />
                </Modal>
              ) : (
                <DateTimePicker value={dateValue} onChange={handleDateChange} />
              ))}
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.textPrimary,
  },
  placeholder: {
    color: colors.textDisabled,
  },
});

export default FormDatePicker;
