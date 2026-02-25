import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormItemWrapper from "components/molecules/formItemWrapper";
import { useFilePicker } from "hooks/useFilePicker";
import FilePicker from "components/molecules/filePicker";

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
  const { pickFiles } = useFilePicker();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handlePick = async () => {
          const files = await pickFiles(false);
          if (files.length > 0) onChange(files[0]);
        };

        return (
          <FormItemWrapper label={label} flex={flex} required={required} error={error?.message}>
            <FilePicker value={value} onPick={handlePick} onClear={() => onChange(null)} />
          </FormItemWrapper>
        );
      }}
    />
  );
};

export default FormFile;
