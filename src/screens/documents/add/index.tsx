import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { DocumentFormInput, DocumentFormOutput, documentSchema } from "validation/documentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentRequest } from "models/requests/DocumentRequest";
import DocumentForm from "components/organisms/forms/DocumentForm";
import { useUploadDocument } from "api/hooks/document";
import { DocumentTypeKey } from "models/enums/DocumentType";

const AddDocumentScreen = () => {
  const navigation = useNavigation();
  const { mutate: upload } = useUploadDocument();
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<DocumentFormInput, any, DocumentFormOutput>({
    resolver: zodResolver(documentSchema),
    mode: "onChange",
  });

  const onSubmit = (req: DocumentFormOutput) => {
    const payload: DocumentRequest = {
      ...req,
      type: req.type as DocumentTypeKey,
      sourceId: req.vehicleId,
    };

    upload(payload, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <DocumentForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty}
    />
  );
};

export default AddDocumentScreen;
