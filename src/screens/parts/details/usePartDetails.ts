import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeletePart, usePart } from "api/hooks/part";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";

export const usePartDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "PartDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "PartDetails">>();

  const { data: part } = usePart(params.partId);
  const { mutate: deletePart } = useDeletePart();
  const { showConfirmation } = useConfirmationModal();

  const handleDeletePart = () => {
    showConfirmation({
      title: "Delete Part",
      message: "Are you sure you want to delete this part?",
      variant: "error",
      onConfirm: () => {
        deletePart(params.partId);
        navigation.goBack();
      },
    });
  };

  const handleEditPart = () => part && navigation.navigate("EditPart", { part });

  return {
    part,
    handleDeletePart,
    handleEditPart,
  };
};
