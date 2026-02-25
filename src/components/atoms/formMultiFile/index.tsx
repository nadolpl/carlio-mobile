import { useCallback, useMemo } from "react";
import {
  ArrayPath,
  Control,
  FieldValues,
  Path,
  useFieldArray,
  useFormState,
} from "react-hook-form";
import { DocumentType } from "models/enums/DocumentType";
import { mapEnumToOptions } from "utils/enum";
import FormSelect from "components/atoms/formSelect";
import MultiFilePicker from "components/molecules/multiFilePicker";
import FormItemWrapper from "components/molecules/formItemWrapper";
import { CustomFile } from "models/CustomFile";

const DOCUMENT_TYPE_OPTIONS = mapEnumToOptions(DocumentType);

interface FormMultiFileProps<T extends FieldValues> {
  name: ArrayPath<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
  flex?: boolean;
}

const FormMultiFile = <T extends FieldValues>({
  name,
  control,
  label,
  required,
  flex,
}: FormMultiFileProps<T>) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const { errors } = useFormState({ control, name: name as Path<T> });
  const errorMessage = errors[name]?.message as string;

  const handleAddFiles = useCallback(
    (newFiles: CustomFile[]) => {
      const formattedFiles = newFiles.map((file) => ({
        file,
        type: undefined,
      }));
      append(formattedFiles as any);
    },
    [append],
  );

  const displayItems = useMemo(() => {
    return fields.map((field: any) => ({
      id: field.id,
      file: field.file as CustomFile,
    }));
  }, [fields]);

  const renderItem = useCallback(
    (index: number) => (
      <FormSelect
        name={`${name}.${index}.type` as Path<T>}
        control={control}
        options={DOCUMENT_TYPE_OPTIONS}
        placeholder="Select type..."
      />
    ),
    [name, control],
  );

  return (
    <FormItemWrapper label={label} error={errorMessage} required={required} flex={flex}>
      <MultiFilePicker
        items={displayItems}
        onAddFiles={handleAddFiles}
        onRemoveFile={remove}
        renderItem={renderItem}
      />
    </FormItemWrapper>
  );
};

export default FormMultiFile;
