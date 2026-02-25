import type { ExpenseTypeKey } from "../enums/ExpenseType.ts";
import type { PageableParams } from "../Pageable.ts";

export interface ExpenseResponse {
  id: string;
  vehicleId: string;
  type: ExpenseTypeKey;
  cost: number;
  performedDate: number[];
  mileage: number;
  description: string | null;
}

export interface ExpenseSearchParams extends PageableParams {
  vehicleId?: string;
  type?: ExpenseTypeKey;
  description?: string;
}
