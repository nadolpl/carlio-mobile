import { VehicleSearchParams } from "models/response/VehicleListedResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { VEHICLE_KEYS } from "api/hooks/keys";
import {
  requestCreateVehicle,
  requestDeleteVehicle,
  requestGetVehicle,
  requestSearchVehicles,
  requestUpdateVehicle,
  requestUploadVehiclePhoto,
} from "api/requests/vehicle";
import { VehicleRequest } from "models/requests/VehicleRequest";

export const useSearchVehicles = (params?: VehicleSearchParams) => {
  return useInfiniteQuery({
    queryKey: VEHICLE_KEYS.search(params),
    queryFn: ({ pageParam }) => requestSearchVehicles({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: VEHICLE_KEYS.details(id),
    queryFn: () => requestGetVehicle(id),
    enabled: !!id,
  });
};

export const useUploadVehiclePhoto = (vehicleId: string) => {
  return useMutation({
    mutationFn: (uri: string) => requestUploadVehiclePhoto(vehicleId, uri),
  });
};

export const useCreateVehicle = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: VehicleRequest) => requestCreateVehicle(req),
    onSuccess: () => query.invalidateQueries({ queryKey: VEHICLE_KEYS.all }),
  });
};

export const useDeleteVehicle = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteVehicle(id),
    onSuccess: () => query.invalidateQueries({ queryKey: VEHICLE_KEYS.all }),
  });
};

export const useUpdateVehicle = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<VehicleRequest>) => requestUpdateVehicle(id, req),
    onSuccess: () => query.invalidateQueries({ queryKey: VEHICLE_KEYS.all }),
  });
};
