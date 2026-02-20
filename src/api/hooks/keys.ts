import { VehicleSearchParams } from "models/response/VehicleListedResponse";
import { PartSearchParams } from "models/response/PartResponse";
import { MaintenanceSearchParams } from "models/response/MaintenanceListedResponse";

export const VEHICLE_KEYS = {
  all: ["vehicles"] as const,
  details: (id: string) => [...VEHICLE_KEYS.all, "details", id] as const,
  search: (params?: VehicleSearchParams) => [...VEHICLE_KEYS.all, "search", params] as const,
};

export const PART_KEYS = {
  all: ["parts"] as const,
  details: (id: string) => [...PART_KEYS.all, "details", id] as const,
  search: (params?: PartSearchParams) => [...PART_KEYS.all, "search", params] as const,
};

export const MAINTENANCE_KEYS = {
  all: ["Maintenances"] as const,
  details: (id: string) => [...MAINTENANCE_KEYS.all, "details", id] as const,
  search: (params?: MaintenanceSearchParams) =>
    [...MAINTENANCE_KEYS.all, "search", params] as const,
};
