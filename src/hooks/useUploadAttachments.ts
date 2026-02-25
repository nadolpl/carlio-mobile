import { DocumentTypeKey } from "models/enums/DocumentType";
import { useUploadDocument } from "api/hooks/document";
import { ExpenseFormOutput } from "validation/expenseSchema";
import { MaintenanceFormOutput } from "validation/maintenanceSchema";

type DocumentsSource = ExpenseFormOutput | MaintenanceFormOutput;

export const useUploadAttachments = () => {
  const { mutateAsync, isPending } = useUploadDocument();

  const uploadAttachments = async (req: DocumentsSource, sourceId: string) => {
    if (req.attachments && req.attachments.length > 0) {
      try {
        await Promise.all(
          req.attachments.map((att) =>
            mutateAsync({
              vehicleId: req.vehicleId,
              file: att.file,
              sourceId,
              type: att.type as DocumentTypeKey,
            }),
          ),
        );
      } catch {}
    }
  };

  return {
    uploadAttachments,
    isUploading: isPending,
  };
};
