import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useDeleteExpense, useExpense } from "api/hooks/expense";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";
import { getEnumValueByKey } from "utils/enum";
import { ExpenseType } from "models/enums/ExpenseType";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";

export const useExpenseDetails = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "ExpenseDetails">>();
  const { params } = useRoute<RouteProp<RootStackParamList, "ExpenseDetails">>();

  const { data: expense } = useExpense(params.expenseId);
  const { mutate: deleteExpense } = useDeleteExpense();
  const { showConfirmation } = useConfirmationModal();

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

  useDetailsNavigation({
    onEdit: handleEditExpense,
    onDelete: handleDeleteExpense,
  });

  return {
    expense,
  };
};
