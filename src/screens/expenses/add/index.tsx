import { useNavigation } from "@react-navigation/native";
import { useCreateExpense } from "api/hooks/expense";
import { useForm } from "react-hook-form";
import { ExpenseFormInput, ExpenseFormOutput, expenseSchema } from "validation/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseRequest } from "models/requests/ExpenseRequest";
import ExpenseForm from "components/organisms/forms/ExpenseForm";

const AddExpenseScreen = () => {
  const navigation = useNavigation();
  const { mutate: create, isPending: isCreating } = useCreateExpense();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ExpenseFormInput, any, ExpenseFormOutput>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
  });

  const onSubmit = (req: ExpenseFormOutput) => {
    create(req as ExpenseRequest);
    navigation.goBack();
  };

  return (
    <ExpenseForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty || isCreating}
    />
  );
};

export default AddExpenseScreen;
