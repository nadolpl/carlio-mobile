import { useConfirmationModal } from "hooks/useConfirmationModal";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeleteExpense, useExpense } from "api/hooks/expense";

export const useExpenseDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "ExpenseDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "ExpenseDetails">>();

  const { data: expense } = useExpense(params.expenseId);
  const { mutate: deleteExpense } = useDeleteExpense();
  const { showConfirmation, props } = useConfirmationModal();

  const handleDeleteExpense = () => {
    showConfirmation({
      title: "Delete Expense",
      message: "Are you sure you want to delete this Expense?",
      variant: "error",
      onConfirm: () => {
        navigation.goBack();
        deleteExpense(params.expenseId);
      },
    });
  };

  const handleEditExpense = () => expense && navigation.navigate("EditExpense", { expense });

  return {
    expense,
    handleDeleteExpense,
    handleEditExpense,
    confirmationModalProps: props,
  };
};
