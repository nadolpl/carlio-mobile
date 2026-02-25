import { useMemo } from "react";
import FormSelect, { FormSelectProps } from "components/atoms/formSelect";
import { FieldValues } from "react-hook-form";
import { useSearchParts } from "api/hooks/part";

interface FormSelectPartProps<T extends FieldValues> extends Omit<FormSelectProps<T>, "options"> {}

const FormSelectPart = <T extends FieldValues>({
  name,
  control,
  label = "Part",
  required,
  flex,
}: FormSelectPartProps<T>) => {
  const { data } = useSearchParts();

  const options = useMemo(() => {
    if (!data?.pages) return [];

    const allParts = data.pages.flatMap((page) => page.content || page);

    return allParts.map((part: any) => ({
      label: part.name,
      value: part.id,
    }));
  }, [data?.pages]);

  return (
    <FormSelect
      name={name}
      control={control}
      options={options}
      label={label}
      required={required}
      flex={flex}
      placeholder="Select part..."
    />
  );
};

export default FormSelectPart;
