import PageableList from "components/organisms/pageableList";
import ExpenseCard from "screens/expenses/list/components/ExpenseCard";
import { ExpenseResponse } from "models/response/ExpenseResponse";
import { useExpenseList } from "screens/expenses/list/useExpenseList";

const ExpenseListScreen = () => {
  const { query, handleCardPress } = useExpenseList();

  const renderItem = ({ item }: { item: ExpenseResponse }) => (
    <ExpenseCard expense={item} onPress={handleCardPress} />
  );

  return <PageableList renderItem={renderItem} query={query} />;
};

export default ExpenseListScreen;
