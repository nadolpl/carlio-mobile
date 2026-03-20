import { VehicleSearchParams } from "models/response/VehicleListedResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EXPENSE_KEYS, MAINTENANCE_KEYS, SCHEDULE_KEYS, VEHICLE_KEYS } from "api/hooks/keys";
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
    onSuccess: () =>
      Promise.all([
        query.invalidateQueries({ queryKey: VEHICLE_KEYS.search() }),
        query.invalidateQueries({ queryKey: SCHEDULE_KEYS.search() }),
        query.invalidateQueries({ queryKey: EXPENSE_KEYS.search() }),
        query.invalidateQueries({ queryKey: MAINTENANCE_KEYS.search() }),
      ]),
  });
};

export const useUpdateVehicle = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<VehicleRequest>) => requestUpdateVehicle(id, req),
    onSuccess: () =>
      Promise.all([
        query.invalidateQueries({ queryKey: VEHICLE_KEYS.all }),
        query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all, refetchType: "all" }),
      ]),
  });
};
