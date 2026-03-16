import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NOTIFICATION_KEYS } from "api/hooks/keys";
import { NotificationSearchParams } from "models/response/NotificationResponse";
import {
  requestDeleteNotification,
  requestGetUnreadNotificationsCount,
  requestMarkNotificationAsRead,
  requestSearchNotifications,
} from "api/requests/notification";

export const useSearchNotifications = (params?: NotificationSearchParams) => {
  return useInfiniteQuery({
    queryKey: NOTIFICATION_KEYS.search(params),
    queryFn: ({ pageParam }) => requestSearchNotifications({ page: pageParam, ...params }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page?.number ?? 0;
      const totalPages = lastPage.page?.totalPages ?? 0;
      return currentPage + 1 < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 0,
  });
};

export const useGetUnreadNotificationsCount = () =>
  useQuery({
    queryKey: NOTIFICATION_KEYS.unread(),
    queryFn: requestGetUnreadNotificationsCount,
    refetchInterval: 60_000,
  });

export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestMarkNotificationAsRead(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: NOTIFICATION_KEYS.all }),
  });
};

export const useDeleteNotification = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => requestDeleteNotification(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: NOTIFICATION_KEYS.all }),
  });
};
