import { z } from "zod";
import { getEnumKeys } from "utils/enum";
import { DocumentType } from "models/enums/DocumentType";
import { CustomFile } from "models/CustomFile";

export const fileSchema = z.object({
  uri: z.string(),
  name: z.string(),
  type: z.string(),
});

export const documentSchema = z.object({
  vehicleId: z.uuid({ error: "Vehicle is required" }),
  type: z.enum(getEnumKeys(DocumentType), "Document type is required"),
  file: fileSchema.refine(
    (file: CustomFile) => file.type === "application/pdf" || file.type.startsWith("image/"),
    { error: "Only images and PDFs are allowed" },
  ),
});

export type DocumentFormInput = z.input<typeof documentSchema>;
export type DocumentFormOutput = z.output<typeof documentSchema>;
