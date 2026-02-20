import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { MAINTENANCES } from "api/config/endpoints";
import {
  MaintenanceListedResponse,
  MaintenanceSearchParams,
} from "models/response/MaintenanceListedResponse";

export const requestSearchMaintenances = (params?: MaintenanceSearchParams) =>
  api.get<Pageable<MaintenanceListedResponse>>(MAINTENANCES, { params });
