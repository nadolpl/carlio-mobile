import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useSearchExpenses } from "api/hooks/expense";
import { useListNavigation } from "hooks/useListNavigation";

export const useExpenseList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchExpenses();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddExpense") });

  const handleCardPress = (id: string) => {
    navigation.navigate("ExpenseDetails", { expenseId: id });
  };

  return {
    query,
    handleCardPress,
  };
};
