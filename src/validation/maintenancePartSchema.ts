import { z } from "zod";
import { numOrNull } from "utils/validation";

export const maintenancePartSchema = z.object({
  partId: z.uuid({ error: "Part is required" }),
  quantity: numOrNull.pipe(
    z
      .number({ error: "Quantity must be a number" })
      .min(1, "Quantity must be a positive number")
      .max(9_999_999, "Quantity is too large"),
  ),
  cost: numOrNull.pipe(
    z.number({ error: "Cost must be a number" }).nonnegative("Cost must be positive"),
  ),
});
