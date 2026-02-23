import { useConfirmationModal } from "hooks/useConfirmationModal";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeletePart, usePart } from "api/hooks/part";

export const usePartDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "PartDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "PartDetails">>();

  const { data: part } = usePart(params.part.id);
  const { mutate: deletePart } = useDeletePart();
  const { showConfirmation, props } = useConfirmationModal();
  const handleDeletePart = () => {
    showConfirmation({
      title: "Delete Part",
      message: "Are you sure you want to delete this part?",
      onConfirm: () =>
        deletePart(params.part.id, {
          onSuccess: () => navigation.goBack(),
        }),
    });
  };

  const handleEditPart = () => part && navigation.navigate("EditPart", { part });

  return {
    part,
    handleDeletePart,
    handleEditPart,
    confirmationModalProps: props,
  };
};
