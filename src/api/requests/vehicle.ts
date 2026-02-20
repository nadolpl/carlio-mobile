import api from "api/config/api";
import { VehicleListedResponse, VehicleSearchParams } from "models/response/VehicleListedResponse";
import { Pageable } from "models/Pageable";
import { VEHICLES } from "api/config/endpoints";
import { VehicleResponse } from "models/response/VehicleResponse";
import client from "api/config/client";
import { VehicleRequest } from "models/requests/VehicleRequest";

export const requestSearchVehicles = (params?: VehicleSearchParams) =>
  api.get<Pageable<VehicleListedResponse>>(VEHICLES, { params });

export const requestGetVehicle = (id: string) => api.get<VehicleResponse>(`${VEHICLES}/${id}`);

export const requestCreateVehicle = (req: VehicleRequest) => api.post<void>(VEHICLES, req);

export const requestDeleteVehicle = (id: string) => api.delete<void>(`${VEHICLES}/${id}`);

export const requestUpdateVehicle = (id: string, req: Partial<VehicleRequest>) =>
  api.patch<void>(`${VEHICLES}/${id}`, req);

export const requestGetVehiclePhotoUrl = (vehicleId: string, photoId?: string | null) => {
  const baseUrl = `${client.defaults.baseURL}${VEHICLES}/${vehicleId}/photo`;
  return photoId ? `${baseUrl}?v=${photoId}` : baseUrl;
};

export const requestUploadVehiclePhoto = (id: string, uri: string) => {
  const formData = new FormData();

  const filename = uri.split("/").pop() || `${id}.jpg`;
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : `image/jpeg`;

  formData.append("file", {
    uri: uri,
    name: filename,
    type,
  } as any);

  return api.post<string>(`${VEHICLES}/${id}/photo`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
