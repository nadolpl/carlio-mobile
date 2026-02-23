import type { MaintenanceTypeKey } from "../enums/MaintenanceType.ts";
import { MaintenancePartRequest } from "models/requests/MaintenancePartRequest";

export interface MaintenanceRequest {
  vehicleId: string;
  performedDate: string;
  title: string;
  description: string | null;
  mileage: number;
  laborCost: number;
  type: MaintenanceTypeKey;
  parts: MaintenancePartRequest[];
}
