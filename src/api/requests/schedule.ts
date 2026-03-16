import { SCHEDULES } from "api/config/endpoints";
import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { ScheduleRequest } from "models/requests/ScheduleRequest";
import { ScheduleResponse, ScheduleSearchParams } from "models/response/ScheduleResponse";

export const requestSearchSchedules = (params?: ScheduleSearchParams) =>
  api.get<Pageable<ScheduleResponse>>(SCHEDULES, { params });

export const requestCreateSchedule = (req: ScheduleRequest) => api.post<string>(SCHEDULES, req);

export const requestDeleteSchedule = (id: string) => api.delete<void>(`${SCHEDULES}/${id}`);

export const requestSchedule = (id: string) => api.get<ScheduleResponse>(`${SCHEDULES}/${id}`);

export const requestResetSchedule = (id: string) => api.patch<void>(`${SCHEDULES}/${id}/reset`);

export const requestToggleActiveSchedule = (id: string) =>
  api.patch<void>(`${SCHEDULES}/${id}/active`);

export const requestUpdateSchedule = (id: string, req: Partial<ScheduleRequest>) =>
  api.patch<void>(`${SCHEDULES}/${id}`, req);
