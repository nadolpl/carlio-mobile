import { Control } from "react-hook-form";
import { DocumentFormInput } from "validation/documentSchema";
import FormScreen from "components/organisms/forms/FormScreen";
import FormSelectVehicle from "components/molecules/formSelectVehicle";
import FormSelect from "components/atoms/formSelect";
import { mapEnumToOptions } from "utils/enum";
import { DocumentType } from "models/enums/DocumentType";
import FormFile from "components/atoms/formFile";

interface DocumentFormProps {
  control: Control<DocumentFormInput>;
  handleSubmit: () => void;
  submitLabel?: string;
  submitDisabled?: boolean;
}

const DocumentForm = ({
  control,
  handleSubmit,
  submitLabel,
  submitDisabled,
}: DocumentFormProps) => {
  return (
    <FormScreen
      handleSubmit={handleSubmit}
      submitLabel={submitLabel}
      submitDisabled={submitDisabled}
    >
      <FormSelectVehicle name="vehicleId" control={control} required />

      <FormSelect
        name="type"
        label="Type"
        control={control}
        options={mapEnumToOptions(DocumentType)}
        required
      />

      <FormFile control={control} name="file" />
    </FormScreen>
  );
};

export default DocumentForm;
