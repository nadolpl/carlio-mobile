import { z } from "zod";
import { getEnumKeys } from "utils/enum";
import { DocumentType } from "models/enums/DocumentType";

export const fileSchema = z.object({
  uri: z.string({ error: "File URI is required" }),
  name: z.string({ error: "File name is required" }),
  type: z.string({ error: "File type is required" }),
});

export const documentSchema = z.object({
  vehicleId: z.uuid({ message: "Vehicle is required" }),
  file: fileSchema.refine((f) => f.type === "application/pdf" || f.type.startsWith("image/"), {
    error: "Only images and PDFs are allowed",
  }),
  type: z.enum(getEnumKeys(DocumentType), {
    error: "Document type is required",
  }),
});

export type DocumentFormInput = z.input<typeof documentSchema>;
export type DocumentFormOutput = z.output<typeof documentSchema>;
