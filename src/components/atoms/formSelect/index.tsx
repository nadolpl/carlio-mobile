import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { colors } from "constants/colors";
import { EnumOptions } from "utils/enum";
import FormItemWrapper from "components/atoms/formItemWrapper";
import { useModal } from "hooks/useModal";
import Text from "components/atoms/text";
import Icon from "components/atoms/icon";
import { ICONS } from "constants/icons";
import Modal from "components/atoms/modal";
import { commonStyles } from "utils/styles";

export interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: EnumOptions[];
  label?: string;
  flex?: boolean;
  required?: boolean;
  placeholder?: string;
}

const FormSelect = <T extends FieldValues>({
  name,
  control,
  label,
  flex,
  required,
  options,
  placeholder = "Select...",
}: FormSelectProps<T>) => {
  const { isOpen, open, close } = useModal();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const selectedOption = options.find((opt) => opt.value === value);

        return (
          <FormItemWrapper label={label} required={required} flex={flex} error={error?.message}>
            <Pressable style={styles.pickerWrapper} onPress={open}>
              <Text style={(value === undefined || value === null) && styles.placeholder}>
                {selectedOption ? selectedOption.label : placeholder}
              </Text>
              <Icon name={isOpen ? ICONS.ARROW_UP : ICONS.ARROW_DOWN} size={18} />
            </Pressable>

            <Modal visible={isOpen} onClose={close}>
              <View style={styles.modalContentWrapper}>
                <Text style={styles.modalTitle}>
                  {label ? `Select ${label}` : placeholder || "Select..."}
                </Text>

                <FlatList
                  style={styles.list}
                  data={options}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => String(item.value)}
                  renderItem={({ item }) => (
                    <Pressable
                      style={({ pressed }) => [styles.optionItem, pressed && commonStyles.pressed]}
                      onPress={() => {
                        onChange(item.value);
                        close();
                      }}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          value === item.value && styles.selectedOptionText,
                        ]}
                      >
                        {item.label}
                      </Text>
                    </Pressable>
                  )}
                />
              </View>
            </Modal>
          </FormItemWrapper>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.divider,
    borderRadius: 12,
    backgroundColor: colors.background800,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  placeholder: {
    color: colors.textDisabled,
  },
  modalContentWrapper: {
    width: "100%",
    flexShrink: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    width: "100%",
  },
  optionItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    width: "100%",
  },
  optionText: {
    textAlign: "center",
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default FormSelect;
