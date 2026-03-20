import type { ExpenseTypeKey } from "../enums/ExpenseType.ts";

export interface ExpenseRequest {
  vehicleId: string;
  type: ExpenseTypeKey;
  cost: number;
  performedDate: string;
  mileage: number;
  description: string | null;
  scheduleId: string | null;
}
