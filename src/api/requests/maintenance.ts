import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { MAINTENANCES } from "api/config/endpoints";
import {
  MaintenanceListedResponse,
  MaintenanceSearchParams,
} from "models/response/MaintenanceListedResponse";
import { MaintenanceRequest } from "models/requests/MaintenanceRequest";
import { MaintenanceResponse } from "models/response/MaintenanceResponse";

export const requestSearchMaintenances = (params?: MaintenanceSearchParams) =>
  api.get<Pageable<MaintenanceListedResponse>>(MAINTENANCES, { params });

export const requestCreateMaintenance = (req: MaintenanceRequest) =>
  api.post<void>(MAINTENANCES, req);

export const requestDeleteMaintenance = (id: string) => api.delete<void>(`${MAINTENANCES}/${id}`);

export const requestUpdateMaintenance = (id: string, req: Partial<MaintenanceRequest>) =>
  api.patch<void>(`${MAINTENANCES}/${id}`, req);

export const requestMaintenance = (id: string) =>
  api.get<MaintenanceResponse>(`${MAINTENANCES}/${id}`);
