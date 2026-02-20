import type { MaintenancePart } from "./MaintenancePart.ts";
import type { MaintenanceTypeKey } from "../enums/MaintenanceType.ts";

export interface MaintenanceResponse {
  id: string;
  vehicleId: string;
  performedDate: number[];
  title: string;
  description: string;
  mileage: number;
  type: MaintenanceTypeKey;
  laborCost: number;
  partsCost: number;
  totalCost: number;
  parts: MaintenancePart[];
}
