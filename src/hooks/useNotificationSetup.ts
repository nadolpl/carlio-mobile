import { useEffect } from "react";
import { notificationService } from "services/NotificationService";

export const useNotificationSetup = () => {
  useEffect(() => void notificationService.requestPermissionsAsync(), []);
};
