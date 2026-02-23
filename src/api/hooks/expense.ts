import { ExpenseSearchParams } from "models/response/ExpenseResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EXPENSE_KEYS } from "api/hooks/keys";
import {
  requestCreateExpense,
  requestDeleteExpense,
  requestExpense,
  requestSearchExpenses,
  requestUpdateExpense,
} from "api/requests/expense";
import { ExpenseRequest } from "models/requests/ExpenseRequest";

export const useSearchExpenses = (params?: ExpenseSearchParams) => {
  return useInfiniteQuery({
    queryKey: EXPENSE_KEYS.search(),
    queryFn: ({ pageParam }) => requestSearchExpenses({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useExpense = (id: string) => {
  return useQuery({
    queryKey: EXPENSE_KEYS.details(id),
    queryFn: () => requestExpense(id),
    enabled: !!id,
  });
};

export const useCreateExpense = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: ExpenseRequest) => requestCreateExpense(req),
    onSuccess: () => query.invalidateQueries({ queryKey: EXPENSE_KEYS.all }),
  });
};

export const useUpdateExpense = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<ExpenseRequest>) => requestUpdateExpense(id, req),
    onSuccess: () => query.invalidateQueries({ queryKey: EXPENSE_KEYS.all }),
  });
};

export const useDeleteExpense = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteExpense(id),
    onSuccess: () => query.invalidateQueries({ queryKey: EXPENSE_KEYS.all }),
  });
};
