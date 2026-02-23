import { useExpenseDetails } from "screens/expenses/details/useExpenseDetails";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import HeaderSection from "components/templates/DetailsScreenWrapper/components/HeaderSection";
import { formatDateArray } from "utils/date";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";
import DetailRow from "components/molecules/detailRow";
import { getEnumValueByKey } from "utils/enum";
import { ExpenseType } from "models/enums/ExpenseType";
import { formatMileage, formatPrice } from "utils/number";

const ExpenseDetailsScreen = () => {
  const { expense, handleEditExpense, handleDeleteExpense, confirmationModalProps } =
    useExpenseDetails();

  useDetailsNavigation({
    onEdit: handleEditExpense,
    onDelete: handleDeleteExpense,
  });

  if (!expense) return null;

  return (
    <DetailsScreenWrapper confirmationModalProps={confirmationModalProps}>
      <HeaderSection
        title={expense.description}
        subtitle={formatDateArray(expense.performedDate)}
      />

      <SectionCard title="General Info">
        <DetailRow label="Type" value={getEnumValueByKey(ExpenseType, expense.type)} isFirst />
        <DetailRow label="Mileage" value={formatMileage(expense.mileage)} />
        <DetailRow label="Cost" value={formatPrice(expense.cost)} isFirst />
      </SectionCard>
    </DetailsScreenWrapper>
  );
};

export default ExpenseDetailsScreen;
