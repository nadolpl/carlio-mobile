import { useEffect } from "react";
import { Control, FieldValues, Path, PathValue, UseFormSetValue, useWatch } from "react-hook-form";
import { useVehicle } from "api/hooks/vehicle";

export const useAutoFillVehicleMileage = <T extends FieldValues>(
  control: Control<T>,
  setValue: UseFormSetValue<T>,
  disabled?: boolean,
) => {
  const vehicleId = useWatch({
    control,
    name: "vehicleId" as Path<T>,
  });

  const { data: vehicle } = useVehicle(disabled ? "" : vehicleId || "");

  useEffect(() => {
    if (disabled) return;
    if (vehicle?.id === vehicleId && vehicle?.mileage !== undefined) {
      setValue("mileage" as Path<T>, vehicle.mileage as PathValue<T, Path<T>>, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [vehicle?.id, vehicle?.mileage, vehicleId, setValue, disabled]);
};
