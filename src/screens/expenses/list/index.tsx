import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useSearchExpenses } from "api/hooks/expense";
import PageableList from "components/molecules/pageableList";
import ExpenseCard from "screens/expenses/list/components/ExpenseCard";
import { ExpenseResponse } from "models/response/ExpenseResponse";
import FloatingActionButton from "components/atoms/floatingActionButton";
import { ICONS } from "constants/icons";

const ExpenseListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const query = useSearchExpenses();

  const handleActionPress = () => {
    navigation.navigate("AddExpense");
  };

  const handleCardPress = (id: string) => {
    navigation.navigate("ExpenseDetails", { expenseId: id });
  };

  const renderItem = ({ item }: { item: ExpenseResponse }) => (
    <ExpenseCard expense={item} onPress={handleCardPress} />
  );

  return (
    <>
      <PageableList renderItem={renderItem} query={query} />
      <FloatingActionButton onPress={handleActionPress} icon={ICONS.ADD} />
    </>
  );
};

export default ExpenseListScreen;
