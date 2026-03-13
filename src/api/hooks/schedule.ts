import { ScheduleSearchParams } from "models/response/ScheduleResponse";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SCHEDULE_KEYS } from "api/hooks/keys";
import {
  requestCreateSchedule,
  requestDeleteSchedule,
  requestResetSchedule,
  requestSchedule,
  requestSearchSchedules,
  requestToggleActiveSchedule,
  requestUpdateSchedule,
} from "api/requests/schedule";
import { ScheduleRequest } from "models/requests/ScheduleRequest";

export const useSearchSchedules = (params?: ScheduleSearchParams) => {
  return useInfiniteQuery({
    queryKey: SCHEDULE_KEYS.search(params),
    queryFn: ({ pageParam }) => requestSearchSchedules({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useSchedule = (id: string) => {
  return useQuery({
    queryKey: SCHEDULE_KEYS.details(id),
    queryFn: () => requestSchedule(id),
    enabled: !!id,
  });
};

export const useCreateSchedule = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: ScheduleRequest) => requestCreateSchedule(req),
    onSuccess: () => query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all }),
  });
};

export const useUpdateSchedule = (id: string) => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (req: Partial<ScheduleRequest>) => requestUpdateSchedule(id, req),
    onSuccess: () => query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all }),
  });
};

export const useDeleteSchedule = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteSchedule(id),
    onSuccess: () => query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all }),
  });
};

export const useResetSchedule = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestResetSchedule(id),
    onSuccess: () => query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all }),
  });
};

export const useToggleActiveSchedule = () => {
  const query = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestToggleActiveSchedule(id),
    onSuccess: () => query.invalidateQueries({ queryKey: SCHEDULE_KEYS.all }),
  });
};
