import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FilePicker } from "components/molecules/filePicker";
import FormItemWrapper from "components/molecules/formItemWrapper";

interface FormFileProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  flex?: boolean;
  required?: boolean;
}

const FormFile = <T extends FieldValues>({
  name,
  control,
  label,
  flex,
  required,
}: FormFileProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormItemWrapper label={label} flex={flex} required={required} error={error?.message}>
          <FilePicker onFileSelect={onChange} buttonText={value && "Change file"} />
        </FormItemWrapper>
      )}
    />
  );
};

export default FormFile;
