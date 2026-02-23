import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { PARTS } from "api/config/endpoints";
import { PartResponse, PartSearchParams } from "models/response/PartResponse";
import { PartRequest } from "models/requests/PartRequest";

export const requestSearchParts = (params?: PartSearchParams) =>
  api.get<Pageable<PartResponse>>(PARTS, { params });

export const requestCreatePart = (req: PartRequest) => api.post<void>(PARTS, req);

export const requestDeletePart = (id: string) => api.delete<void>(`${PARTS}/${id}`);

export const requestUpdatePart = (id: string, req: Partial<PartRequest>) =>
  api.patch<void>(`${PARTS}/${id}`, req);

export const requestPart = (id: string) => api.get<PartResponse>(`${PARTS}/${id}`);
