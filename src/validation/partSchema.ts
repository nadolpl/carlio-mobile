import { PartCategory } from "models/enums/PartCategory";
import { z } from "zod";
import { getEnumKeys } from "utils/enum";
import { strOrNull } from "utils/validation";

export const partSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name cannot be longer than 100 characters"),
  category: z.enum(getEnumKeys(PartCategory), "Part category is required"),
  manufacturer: strOrNull.pipe(
    z.string().max(100, "Manufacturer cannot be longer than 100 characters").nullable(),
  ),
  description: strOrNull.pipe(
    z.string().max(1000, "Description cannot be longer than 1000 characters").nullable(),
  ),
});

export type PartFormInput = z.input<typeof partSchema>;
export type PartFormOutput = z.output<typeof partSchema>;
