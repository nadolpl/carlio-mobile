import { DocumentSearchParams } from "models/response/DocumentResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DOCUMENT_KEYS } from "api/hooks/keys";
import {
  requestDeleteDocument,
  requestDocument,
  requestDownloadDocument,
  requestSearchDocuments,
  requestUploadDocument,
} from "api/requests/document";
import { DocumentRequest } from "models/requests/DocumentRequest";
import { DownloadRequest } from "models/requests/DownloadRequest";

export const useSearchDocuments = (params?: DocumentSearchParams) => {
  return useInfiniteQuery({
    queryKey: DOCUMENT_KEYS.search(),
    queryFn: ({ pageParam }) => requestSearchDocuments({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useDeleteDocument = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteDocument(id),
    onSuccess: () => query.invalidateQueries({ queryKey: DOCUMENT_KEYS.all }),
  });
};

export const useUploadDocument = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: DocumentRequest) => requestUploadDocument(req),
    onSuccess: () => query.invalidateQueries({ queryKey: DOCUMENT_KEYS.all }),
  });
};

export const useDownloadDocument = () => {
  return useMutation({
    mutationFn: (req: DownloadRequest) => requestDownloadDocument(req),
  });
};

export const useDocument = (id: string) => {
  return useQuery({
    queryKey: DOCUMENT_KEYS.details(id),
    queryFn: () => requestDocument(id),
    enabled: !!id,
  });
};
