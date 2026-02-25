import { StyleSheet, View } from "react-native";
import { Control, useFieldArray } from "react-hook-form";
import { MaintenanceFormInput } from "validation/maintenanceSchema";
import { colors } from "constants/colors";
import Button from "components/atoms/button";
import FormInput from "components/atoms/formInput";
import FormSelectPart from "components/molecules/formSelectPart";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import FormItemWrapper from "components/molecules/formItemWrapper";
import { commonStyles } from "utils/styles";
import Text from "components/atoms/text";

interface MaintenancePartFormProps {
  control: Control<MaintenanceFormInput>;
}

const MaintenancePartForm = ({ control }: MaintenancePartFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "parts",
  });

  return (
    <FormItemWrapper label="Parts">
      {fields.map((field, index) => (
        <View key={field.id} style={styles.partContainer}>
          <View style={styles.partHeader}>
            <Text style={styles.partTitle}>Part #{index + 1}</Text>
            <IconButton onPress={() => remove(index)} icon={ICONS.CLOSE_CIRCLE} />
          </View>

          <FormSelectPart name={`parts.${index}.partId`} control={control} required />

          <View style={commonStyles.inputRow}>
            <FormInput
              name={`parts.${index}.quantity`}
              label="Quantity"
              control={control}
              keyboardType="number-pad"
              flex
              required
            />
            <FormInput
              name={`parts.${index}.cost`}
              label="Cost per piece"
              control={control}
              keyboardType="number-pad"
              flex
              required
            />
          </View>
        </View>
      ))}

      <Button
        title="Add Part"
        variant="outlined"
        onPress={() => append({ partId: "", quantity: 1, cost: 0 })}
        icon={ICONS.ADD}
      />
    </FormItemWrapper>
  );
};

const styles = StyleSheet.create({
  partContainer: {
    backgroundColor: colors.background800,
    paddingHorizontal: 16,
    paddingTop: 10,
    borderRadius: 12,
    marginBottom: 15,
    position: "relative",
  },
  partHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  partTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
  },
});

export default MaintenancePartForm;
