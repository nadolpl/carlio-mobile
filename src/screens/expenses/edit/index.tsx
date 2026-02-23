import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";
import { useUpdateExpense } from "api/hooks/expense";
import { useForm } from "react-hook-form";
import { ExpenseFormInput, ExpenseFormOutput, expenseSchema } from "validation/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDateArrayToISO } from "utils/date";
import { getChangedData } from "utils/form";
import { ExpenseRequest } from "models/requests/ExpenseRequest";
import ExpenseForm from "components/organisms/forms/ExpenseForm";

const EditExpenseScreen = () => {
  const navigation = useNavigation();
  const {
    params: { expense },
  } = useRoute<RouteProp<RootStackParamList, "EditExpense">>();
  const { mutate: update } = useUpdateExpense(expense.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, dirtyFields },
  } = useForm<ExpenseFormInput, any, ExpenseFormOutput>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
    defaultValues: {
      mileage: expense.mileage,
      performedDate: formatDateArrayToISO(expense.performedDate),
      cost: expense.cost,
      description: expense.description,
      type: expense.type,
      vehicleId: expense.vehicleId,
    },
  });

  const onSubmit = (req: ExpenseFormOutput) => {
    update(getChangedData(dirtyFields, req) as Partial<ExpenseRequest>, {
      onSuccess: () => navigation.goBack(),
    });
  };

  return (
    <ExpenseForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitLabel="Save Changes"
      submitDisabled={!isValid || !isDirty}
    />
  );
};

export default EditExpenseScreen;
