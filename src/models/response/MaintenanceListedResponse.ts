import type { PageableParams } from "../Pageable.ts";
import type { MaintenanceTypeKey } from "../enums/MaintenanceType.ts";

export interface MaintenanceListedResponse {
  id: string;
  vehicleId: string;
  performedDate: number[];
  title: string;
  description: string;
  mileage: number;
  totalCost: number;
  type: MaintenanceTypeKey;
}

export interface MaintenanceSearchParams extends PageableParams {
  vehicleId?: string;
  title?: string;
  type?: MaintenanceTypeKey;
}
