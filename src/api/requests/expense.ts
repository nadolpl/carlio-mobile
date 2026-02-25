import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { EXPENSES } from "api/config/endpoints";
import { ExpenseRequest } from "models/requests/ExpenseRequest";
import { ExpenseResponse, ExpenseSearchParams } from "models/response/ExpenseResponse";

export const requestSearchExpenses = (params?: ExpenseSearchParams) =>
  api.get<Pageable<ExpenseResponse>>(EXPENSES, { params });

export const requestCreateExpense = (req: ExpenseRequest) => api.post<string>(EXPENSES, req);

export const requestDeleteExpense = (id: string) => api.delete<void>(`${EXPENSES}/${id}`);

export const requestUpdateExpense = (id: string, req: Partial<ExpenseRequest>) =>
  api.patch<void>(`${EXPENSES}/${id}`, req);

export const requestExpense = (id: string) => api.get<ExpenseResponse>(`${EXPENSES}/${id}`);
