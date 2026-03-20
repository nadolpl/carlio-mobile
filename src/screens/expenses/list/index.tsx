import PageableList from "components/organisms/pageableList";
import ExpenseCard from "screens/expenses/list/components/ExpenseCard";
import { ExpenseResponse } from "models/response/ExpenseResponse";
import { useExpenseList } from "screens/expenses/list/useExpenseList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const ExpenseListScreen = () => {
  const { query, handleCardPress, handleAddPress } = useExpenseList();

  const renderItem = ({ item }: { item: ExpenseResponse }) => (
    <ExpenseCard expense={item} onPress={handleCardPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.EXPENSE}
          title="No expenses found"
          description="You haven't added any expenses yet. Start tracking your expenses now."
          actionTitle="Add expense"
          onAction={handleAddPress}
        />
      }
    />
  );
};

export default ExpenseListScreen;
