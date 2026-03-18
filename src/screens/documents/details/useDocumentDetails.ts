import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeleteDocument, useDocument } from "api/hooks/document";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";

export const useDocumentDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "DocumentDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "DocumentDetails">>();

  const { data: document } = useDocument(params.documentId);
  const { mutate: deleteDocument } = useDeleteDocument();
  const { showConfirmation } = useConfirmationModal();

  const handleDeleteDocument = () => {
    showConfirmation({
      title: "Delete Document",
      message: "Are you sure you want to delete this Document?",
      variant: "error",
      onConfirm: () => {
        deleteDocument(params.documentId);
        navigation.goBack();
      },
    });
  };

  useDetailsNavigation({
    onDelete: handleDeleteDocument,
  });

  return {
    document,
  };
};
