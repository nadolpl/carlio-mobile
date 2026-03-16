import {
  NotificationResponse,
  NotificationSearchParams,
  NotificationsUnreadCountResponse,
} from "models/response/NotificationResponse";
import api from "api/config/api";
import { Pageable } from "models/Pageable";
import { NOTIFICATIONS } from "api/config/endpoints";

export const requestSearchNotifications = (params?: NotificationSearchParams) =>
  api.get<Pageable<NotificationResponse>>(NOTIFICATIONS, { params });

export const requestMarkNotificationAsRead = (id: string) =>
  api.patch<void>(`${NOTIFICATIONS}/${id}/mark-read`);

export const requestGetUnreadNotificationsCount = () =>
  api.get<NotificationsUnreadCountResponse>(`${NOTIFICATIONS}/unread`);

export const requestDeleteNotification = (id: string) => api.delete<void>(`${NOTIFICATIONS}/${id}`);
