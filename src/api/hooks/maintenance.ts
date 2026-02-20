import { MaintenanceSearchParams } from "models/response/MaintenanceListedResponse";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MAINTENANCE_KEYS } from "api/hooks/keys";
import { requestSearchMaintenances } from "api/requests/maintenance";

export const useSearchMaintenances = (params?: MaintenanceSearchParams) => {
  return useInfiniteQuery({
    queryKey: MAINTENANCE_KEYS.search(),
    queryFn: ({ pageParam }) => requestSearchMaintenances({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};
