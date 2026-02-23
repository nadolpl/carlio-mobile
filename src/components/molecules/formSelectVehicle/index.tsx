import { useMemo } from "react";
import FormSelect, { FormSelectProps } from "components/atoms/formSelect";
import { FieldValues } from "react-hook-form";
import { useSearchVehicles } from "api/hooks/vehicle";

interface FormSelectVehicleProps<T extends FieldValues> extends Omit<
  FormSelectProps<T>,
  "options"
> {}

const FormSelectVehicle = <T extends FieldValues>({
  name,
  control,
  label = "Vehicle",
  required,
  flex,
}: FormSelectVehicleProps<T>) => {
  const { data } = useSearchVehicles();

  const options = useMemo(() => {
    if (!data?.pages) return [];

    const allVehicles = data.pages.flatMap((page) => page.content || page);

    return allVehicles.map((vehicle) => ({
      label: vehicle.name,
      value: vehicle.id,
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
    />
  );
};

export default FormSelectVehicle;
