import { PageableParams } from "models/Pageable";

export interface NotificationResponse {
  id: string;
  title: string;
  message: string;
  receiverId: string;
  sentAt: number[];
  isRead: boolean;
  readAt: number[] | null;
}

export interface NotificationSearchParams extends PageableParams {
  isRead?: boolean;
}

export interface NotificationsUnreadCountResponse {
  count: number;
}