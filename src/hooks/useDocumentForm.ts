import { useUploadDocument } from "api/hooks/document";
import { useForm } from "react-hook-form";
import { DocumentFormInput, DocumentFormOutput, documentSchema } from "validation/documentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentRequest } from "models/requests/DocumentRequest";
import { DocumentTypeKey } from "models/enums/DocumentType";

interface DocumentFormProps {
  initialVehicleId?: string;
  sourceId?: string;
  onSuccess?: (res: string) => void;
}

export const useDocumentForm = ({
  initialVehicleId,
  sourceId,
  onSuccess,
}: DocumentFormProps = {}) => {
  const { mutate: upload, isPending } = useUploadDocument();
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<DocumentFormInput, any, DocumentFormOutput>({
    resolver: zodResolver(documentSchema),
    mode: "onChange",
    defaultValues: {
      vehicleId: initialVehicleId,
    },
  });

  const onSubmit = (req: DocumentFormOutput) => {
    const payload: DocumentRequest = {
      vehicleId: req.vehicleId,
      file: req.file,
      type: req.type as DocumentTypeKey,
      sourceId: sourceId || req.vehicleId,
    };

    upload(payload, {
      onSuccess: (res) => onSuccess && onSuccess(res),
    });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    submitDisabled: !isValid || !isDirty,
    isPending,
  };
};
