import { useAuth } from "contexts/AuthContext";
import { notificationService } from "services/NotificationService";

export const useLogout = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await notificationService.cancelAllNotifications();
    await logout();
  };

  return {
    handleLogout,
  };
};
