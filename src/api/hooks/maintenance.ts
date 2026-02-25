import { MaintenanceSearchParams } from "models/response/MaintenanceListedResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MAINTENANCE_KEYS } from "api/hooks/keys";
import {
  requestCreateMaintenance,
  requestDeleteMaintenance,
  requestMaintenance,
  requestSearchMaintenances,
  requestUpdateMaintenance,
} from "api/requests/maintenance";
import { MaintenanceRequest } from "models/requests/MaintenanceRequest";

export const useSearchMaintenances = (params?: MaintenanceSearchParams) => {
  return useInfiniteQuery({
    queryKey: MAINTENANCE_KEYS.search(params),
    queryFn: ({ pageParam }) => requestSearchMaintenances({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useMaintenance = (id: string) => {
  return useQuery({
    queryKey: MAINTENANCE_KEYS.details(id),
    queryFn: () => requestMaintenance(id),
    enabled: !!id,
  });
};

export const useCreateMaintenance = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: MaintenanceRequest) => requestCreateMaintenance(req),
    onSuccess: () => query.invalidateQueries({ queryKey: MAINTENANCE_KEYS.all }),
  });
};

export const useUpdateMaintenance = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<MaintenanceRequest>) => requestUpdateMaintenance(id, req),
    onSuccess: () => query.invalidateQueries({ queryKey: MAINTENANCE_KEYS.all }),
  });
};

export const useDeleteMaintenance = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteMaintenance(id),
    onSuccess: () => query.invalidateQueries({ queryKey: MAINTENANCE_KEYS.all }),
  });
};
