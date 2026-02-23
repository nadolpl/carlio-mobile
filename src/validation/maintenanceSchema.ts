import { z } from "zod";
import { MaintenanceType } from "models/enums/MaintenanceType";
import { getEnumKeys } from "utils/enum";
import { numOrNull, strOrNull } from "utils/validation";
import { maintenancePartSchema } from "validation/maintenancePartSchema";

export const maintenanceSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot be longer than 100 characters"),
  vehicleId: z.uuid({ error: "Vehicle is required" }),
  performedDate: z.string({ error: "Performed date is required" }),
  type: z.enum(getEnumKeys(MaintenanceType), "Maintenance type is required"),
  mileage: numOrNull.pipe(
    z
      .number({ error: "Mileage must be a number" })
      .min(1, "Mileage must be a positive number")
      .max(9_999_999, "Mileage is too large"),
  ),
  laborCost: numOrNull.pipe(
    z
      .number({ error: "Labor cost must be a number" })
      .nonnegative("Labor cost cannot be negative")
      .max(9_999_999, "Labor cost is too large"),
  ),
  description: strOrNull.pipe(
    z.string().max(1000, "Description cannot be longer than 1000 characters").nullable(),
  ),
  parts: maintenancePartSchema.array(),
});

export type MaintenanceFormInput = z.input<typeof maintenanceSchema>;
export type MaintenanceFormOutput = z.output<typeof maintenanceSchema>;
