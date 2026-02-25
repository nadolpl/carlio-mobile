import { useNavigation } from "@react-navigation/native";
import { useCreateExpense } from "api/hooks/expense";
import { useForm } from "react-hook-form";
import { ExpenseFormInput, ExpenseFormOutput, expenseSchema } from "validation/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExpenseRequest } from "models/requests/ExpenseRequest";
import ExpenseForm from "components/organisms/forms/ExpenseForm";
import { useUploadAttachments } from "hooks/useUploadAttachments";

const AddExpenseScreen = () => {
  const navigation = useNavigation();
  const { mutateAsync: create, isPending: isCreating } = useCreateExpense();
  const { uploadAttachments, isUploading } = useUploadAttachments();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<ExpenseFormInput, any, ExpenseFormOutput>({
    resolver: zodResolver(expenseSchema),
    mode: "onChange",
  });

  const onSubmit = async (req: ExpenseFormOutput) => {
    try {
      const expenseId = await create(req as ExpenseRequest);
      await uploadAttachments(req, expenseId);
      navigation.goBack();
    } catch {}
  };

  return (
    <ExpenseForm
      control={control}
      handleSubmit={handleSubmit(onSubmit)}
      submitDisabled={!isValid || !isDirty || isCreating || isUploading}
    />
  );
};

export default AddExpenseScreen;
