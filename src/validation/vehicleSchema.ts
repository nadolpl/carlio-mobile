import { z } from "zod";
import { FuelType } from "models/enums/FuelType";
import { getEnumKeys } from "utils/enum";
import { numOrNull, strOrNull } from "utils/validation";

const CURRENT_YEAR = new Date().getFullYear();
const VIN_ALLOWED_CHARS = /^[A-HJ-NPR-Z0-9]+$/i;

export const vehicleSchema = z.object({
  name: z.string({ error: "Name is required" }).min(1, "Name is required"),
  brand: z.string({ error: "Brand is required" }).min(1, "Brand is required"),
  model: z.string({ error: "Model is required" }).min(1, "Model is required"),
  fuelType: z.enum(getEnumKeys(FuelType), "Fuel type is required"),
  mileage: numOrNull.pipe(
    z
      .number({ error: "Mileage must be a number" })
      .min(0, "Mileage must be a positive number")
      .max(9_999_999, "Mileage is too large"),
  ),
  registrationNumber: strOrNull.pipe(
    z
      .string()
      .max(10, "Registration number is too long")
      .transform((val) => (val ? val.toUpperCase() : null))
      .nullable(),
  ),
  productionYear: numOrNull.pipe(
    z
      .number({ error: "Production year must be a number" })
      .min(1900, "Production year must be after 1900")
      .max(CURRENT_YEAR + 1, `Production year must be before ${CURRENT_YEAR + 1}`)
      .nullable(),
  ),
  capacity: numOrNull.pipe(
    z
      .number({ error: "Capacity must be a number" })
      .min(1, "Capacity cannot be less than 1")
      .nullable(),
  ),
  power: numOrNull.pipe(
    z
      .number({ error: "Power must be a number" })
      .min(1, "Power cannot be less than 1")
      .max(20_000, "Power is too large")
      .nullable(),
  ),
  vin: strOrNull
    .transform((val) => (val ? val.toUpperCase() : null))
    .pipe(
      z
        .string()
        .length(17, "VIN must be 17 characters long")
        .regex(VIN_ALLOWED_CHARS, "VIN contains invalid characters")
        .nullable(),
    ),
});

export type VehicleFormInput = z.input<typeof vehicleSchema>;
export type VehicleFormOutput = z.output<typeof vehicleSchema>;
