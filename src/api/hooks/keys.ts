import { VehicleSearchParams } from "models/response/VehicleListedResponse";

export const VEHICLE_KEYS = {
  all: ["vehicles"] as const,
  detail: (id: string) => [...VEHICLE_KEYS.all, "detail", id] as const,
  search: (params?: VehicleSearchParams) =>
    [...VEHICLE_KEYS.all, "search", params] as const,
};
