import DocumentForm from "components/organisms/forms/DocumentForm";
import { useDocumentForm } from "hooks/useDocumentForm";
import { useNavigation } from "@react-navigation/native";

const AddDocumentScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, submitDisabled } = useDocumentForm({
    onSuccess: () => navigation.goBack(),
  });

  return (
    <DocumentForm control={control} handleSubmit={handleSubmit} submitDisabled={submitDisabled} />
  );
};

export default AddDocumentScreen;
