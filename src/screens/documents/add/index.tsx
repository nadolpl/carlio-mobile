import DocumentForm from "components/organisms/forms/DocumentForm";
import { useDocumentForm } from "hooks/useDocumentForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

const AddDocumentScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { control, handleSubmit, submitDisabled, isPending } = useDocumentForm({
    onSuccess: (res) => navigation.replace("DocumentDetails", { documentId: res }),
  });

  return (
    <DocumentForm
      control={control}
      handleSubmit={handleSubmit}
      submitDisabled={submitDisabled}
      loading={isPending}
    />
  );
};

export default AddDocumentScreen;
