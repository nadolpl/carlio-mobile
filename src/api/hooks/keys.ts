import { VehicleSearchParams } from "models/response/VehicleListedResponse";
import { PartSearchParams } from "models/response/PartResponse";
import { MaintenanceSearchParams } from "models/response/MaintenanceListedResponse";
import { ExpenseSearchParams } from "models/response/ExpenseResponse";
import { DocumentSearchParams } from "models/response/DocumentResponse";
import { ScheduleSearchParams } from "models/response/ScheduleResponse";

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
  all: ["maintenances"] as const,
  details: (id: string) => [...MAINTENANCE_KEYS.all, "details", id] as const,
  search: (params?: MaintenanceSearchParams) =>
    [...MAINTENANCE_KEYS.all, "search", params] as const,
};

export const EXPENSE_KEYS = {
  all: ["expenses"] as const,
  details: (id: string) => [...EXPENSE_KEYS.all, "details", id] as const,
  search: (params?: ExpenseSearchParams) => [...EXPENSE_KEYS.all, "search", params] as const,
};

export const DOCUMENT_KEYS = {
  all: ["documents"] as const,
  details: (id: string) => [...DOCUMENT_KEYS.all, "details", id] as const,
  search: (params?: DocumentSearchParams) => [...DOCUMENT_KEYS.all, "search", params] as const,
};

export const SCHEDULE_KEYS = {
  all: ["schedules"] as const,
  details: (id: string) => [...SCHEDULE_KEYS.all, "details", id] as const,
  search: (params?: ScheduleSearchParams) => [...SCHEDULE_KEYS.all, "search", params] as const,
};
