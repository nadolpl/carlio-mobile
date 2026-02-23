import { useListNavigation } from "hooks/useListNavigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useSearchExpenses } from "api/hooks/expense";
import PageableList from "components/molecules/pageableList";
import ExpenseCard from "screens/expenses/list/components/ExpenseCard";

const ExpenseListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchExpenses();

  useListNavigation({ onPressAdd: () => navigation.navigate("AddExpense") });

  const handlePress = (id: string) => {
    navigation.navigate("ExpenseDetails", { expenseId: id });
  };

  return (
    <PageableList
      query={query}
      renderItem={({ item }) => <ExpenseCard expense={item} onPress={handlePress} />}
    />
  );
};

export default ExpenseListScreen;
