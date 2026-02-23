import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PART_KEYS } from "api/hooks/keys";
import {
  requestCreatePart,
  requestDeletePart,
  requestPart,
  requestSearchParts,
  requestUpdatePart,
} from "api/requests/part";
import { PartResponse, PartSearchParams } from "models/response/PartResponse";
import { PartRequest } from "models/requests/PartRequest";

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

export const useCreatePart = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: PartRequest) => requestCreatePart(req),
    onSuccess: () => query.invalidateQueries({ queryKey: PART_KEYS.all }),
  });
};

export const useDeletePart = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeletePart(id),
    onSuccess: () => query.invalidateQueries({ queryKey: PART_KEYS.all }),
  });
};

export const useUpdatePart = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<PartRequest>) => requestUpdatePart(id, req),
    onSuccess: () => query.invalidateQueries({ queryKey: PART_KEYS.all }),
  });
};

export const usePart = (id: string, initialData?: PartResponse) => {
  return useQuery({
    queryKey: PART_KEYS.details(id),
    queryFn: () => requestPart(id),
    enabled: !!id,
    initialData: initialData,
  });
};
