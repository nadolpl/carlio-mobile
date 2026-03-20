import { useNavigation } from "@react-navigation/native";
import { useCreateExpense } from "api/hooks/expense";
import { useForm } from "react-hook-form";
import { ExpenseFormInput, ExpenseFormOutput, expenseSchema } from "validation/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseRequest } from "models/requests/ExpenseRequest";
import ExpenseForm from "components/organisms/forms/ExpenseForm";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

const AddExpenseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { mutate: create, isPending } = useCreateExpense();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isValid, isDirty },
  } = useForm<ExpenseFormInput, any, ExpenseFormOutput>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
  });

  const onSubmit = (req: ExpenseFormOutput) => {
    create(req as ExpenseRequest, {
      onSuccess: (res) => navigation.replace("ExpenseDetails", { expenseId: res }),
    });
  };

  return (
    <ExpenseForm
      setValue={setValue}
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty}
      loading={isPending}
      showScheduleResetSelect
    />
  );
};

export default AddExpenseScreen;
