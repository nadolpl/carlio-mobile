import type { MaintenancePart } from "../responses/MaintenancePart.ts";
import type { MaintenanceTypeKey } from "../enums/MaintenanceType.ts";

export interface MaintenanceRequest {
  vehicleId: string;
  performedDate: string;
  title: string;
  description: string | null;
  mileage: number;
  laborCost: number;
  type: MaintenanceTypeKey;
  parts: MaintenancePart[];
  scheduleId: string | null;
}
