import { z } from "zod";
import { getEnumKeys } from "utils/enum";
import { ExpenseType } from "models/enums/ExpenseType";
import { numOrNull, strOrNull } from "utils/validation";
import { documentAttachmentSchema } from "validation/documentSchema";

export const expenseSchema = z.object({
  vehicleId: z.uuid({ error: "Vehicle is required" }),
  performedDate: z.string({ error: "Performed date is required" }),
  type: z.enum(getEnumKeys(ExpenseType), "Expense type is required"),
  mileage: numOrNull.pipe(
    z
      .number({ error: "Mileage must be a number" })
      .min(1, "Mileage must be a positive number")
      .max(9_999_999, "Mileage is too large"),
  ),
  description: strOrNull.pipe(
    z.string().max(1000, "Description cannot be longer than 1000 characters").nullable(),
  ),
  cost: numOrNull.pipe(
    z
      .number({ error: "Cost must be a number" })
      .nonnegative("Cost cannot be negative")
      .max(9_999_999, "Cost is too large"),
  ),
  attachments: z.array(documentAttachmentSchema).optional().default([]),
});

export type ExpenseFormInput = z.input<typeof expenseSchema>;
export type ExpenseFormOutput = z.output<typeof expenseSchema>;
