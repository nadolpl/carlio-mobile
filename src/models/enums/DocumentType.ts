export const DocumentType = {
  RECEIPT: "Receipt",
  INVOICE: "Invoice",
  INSURANCE_POLICY: "Insurance policy",
  INSPECTION: "Inspection",
  OTHER: "Other",
} as const;

export type DocumentTypeKey = keyof typeof DocumentType;
