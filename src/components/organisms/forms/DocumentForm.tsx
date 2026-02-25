import { Control } from "react-hook-form";
import { DocumentFormInput } from "validation/documentSchema";
import FormScreen from "components/organisms/forms/FormScreen";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { DocumentType } from "models/enums/DocumentType";
import FormFile from "components/molecules/formFile";

interface DocumentFormProps {
  control: Control<DocumentFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  hideVehicleSelect?: boolean;
  isModal?: boolean;
}

const DocumentForm = ({
  control,
  handleSubmit,
  submitLabel = "Upload",
  submitDisabled,
  hideVehicleSelect = false,
  isModal = false,
}: DocumentFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
      isModal={isModal}
    >
      {!hideVehicleSelect && <FormSelectVehicle name="vehicleId" control={control} required />}

      <FormSelect
        name="type"
        label="Type"
        control={control}
        options={mapEnumToOptions(DocumentType)}
        required
      />

      <FormFile control={control} name="file" label="Attachment" required />
    </FormScreen>
  );
};

export default DocumentForm;
