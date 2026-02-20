import { useInfiniteQuery } from "@tanstack/react-query";
import { PART_KEYS } from "api/hooks/keys";
import { requestSearchParts } from "api/requests/part";
import { PartSearchParams } from "models/response/PartResponse";

export const useSearchParts = (params?: PartSearchParams) => {
  return useInfiniteQuery({
    queryKey: PART_KEYS.search(),
    queryFn: ({ pageParam }) => requestSearchParts({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};
