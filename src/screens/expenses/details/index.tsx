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
import AttachmentsSection from "components/organisms/attachmentsSection";

const ExpenseDetailsScreen = () => {
  const { expense, handleEditExpense, handleDeleteExpense } = useExpenseDetails();

  useDetailsNavigation({
    onEdit: handleEditExpense,
    onDelete: handleDeleteExpense,
  });

  if (!expense) return null;

  const fallbackTitle = getEnumValueByKey(ExpenseType, expense.type);
  const displayTitle = expense.description ? expense.description : fallbackTitle;

  return (
    <DetailsScreenWrapper>
      <HeaderSection title={displayTitle} subtitle={formatDateArray(expense.performedDate)} />

      <SectionCard title="General Info">
        <DetailRow label="Type" value={getEnumValueByKey(ExpenseType, expense.type)} isFirst />
        <DetailRow label="Mileage" value={formatMileage(expense.mileage)} />
        <DetailRow label="Cost" value={formatPrice(expense.cost)} />
      </SectionCard>

      <AttachmentsSection sourceId={expense.id} vehicleId={expense.vehicleId} />
    </DetailsScreenWrapper>
  );
};

export default ExpenseDetailsScreen;
