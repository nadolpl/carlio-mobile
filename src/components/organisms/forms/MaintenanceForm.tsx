import { View } from "react-native";
import { Control, UseFormSetValue } from "react-hook-form";
import FormInput from "components/atoms/formInput";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { MaintenanceFormInput } from "validation/maintenanceSchema";
import FormScreen from "components/organisms/formScreen";
import { commonStyles } from "utils/styles";
import { MaintenanceType } from "models/enums/MaintenanceType";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormDate from "components/atoms/formDate";
import MaintenancePartForm from "components/organisms/forms/MaintenancePartForm";
import { useAutoFillVehicleMileage } from "hooks/useAutoFillVehicleMileage";
import ScheduleResetSelect from "components/molecules/scheduleResetSelect";

interface MaintenanceFormProps {
  control: Control<MaintenanceFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  loading?: boolean;
  setValue: UseFormSetValue<MaintenanceFormInput>;
  showScheduleResetSelect?: boolean;
  disableAutoFillMileage?: boolean;
}

const MaintenanceForm = ({
  control,
  setValue,
  handleSubmit,
  submitLabel,
  submitDisabled,
  loading,
  showScheduleResetSelect,
  disableAutoFillMileage,
}: MaintenanceFormProps) => {
  useAutoFillVehicleMileage(control, setValue, disableAutoFillMileage);

  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
      loading={loading}
    >
      <FormSelectVehicle name="vehicleId" control={control} required />

      <FormInput name="title" label="Title" control={control} required />

      <View style={commonStyles.inputRow}>
        <FormInput
          name="mileage"
          label="Mileage"
          control={control}
          flex
          required
          keyboardType="number-pad"
        />

        <FormSelect
          name="type"
          label="Type"
          control={control}
          options={mapEnumToOptions(MaintenanceType)}
          required
          placeholder="Select type..."
          flex
        />
      </View>

      <View style={commonStyles.inputRow}>
        <FormInput
          name="laborCost"
          label="Labor cost"
          control={control}
          flex
          required
          keyboardType="number-pad"
        />
        <FormDate name="performedDate" label="Date" control={control} flex required />
      </View>

      <FormInput name="description" label="Description" control={control} />

      {showScheduleResetSelect && <ScheduleResetSelect control={control} />}

      <MaintenancePartForm control={control} />
    </FormScreen>
  );
};

export default MaintenanceForm;
