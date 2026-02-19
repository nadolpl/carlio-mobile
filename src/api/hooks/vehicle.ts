import { VehicleSearchParams } from "models/response/VehicleListedResponse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { VEHICLE_KEYS } from "api/hooks/keys";
import {
  requestGetVehicle,
  requestSearchVehicles,
  requestUploadVehiclePhoto,
} from "api/requests/vehicle";

export const useSearchVehicles = (params?: VehicleSearchParams) => {
  return useQuery({
    queryKey: VEHICLE_KEYS.search(params),
    queryFn: () => requestSearchVehicles(params),
  });
};

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: VEHICLE_KEYS.detail(id),
    queryFn: () => requestGetVehicle(id),
    enabled: !!id,
  });
};

export const useUploadVehiclePhoto = (vehicleId: string) => {
  return useMutation({
    mutationFn: (uri: string) => requestUploadVehiclePhoto(vehicleId, uri),
  });
};