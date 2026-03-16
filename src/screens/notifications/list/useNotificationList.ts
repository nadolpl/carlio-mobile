import {
  useDeleteNotification,
  useMarkNotificationAsRead,
  useSearchNotifications,
} from "api/hooks/notification";
import { NotificationResponse } from "models/response/NotificationResponse";
import { useBottomMenuModal } from "hooks/useBottomMenuModal";
import { useConfirmationModal } from "hooks/useConfirmationModal";
import { ICONS } from "constants/icons";

export const useNotificationList = () => {
  const query = useSearchNotifications();
  const { mutate: markAsRead } = useMarkNotificationAsRead();
  const { mutate: deleteNotification } = useDeleteNotification();
  const { showMenu, props: bottomMenuProps } = useBottomMenuModal();
  const { showConfirmation, props: confirmationModalProps } = useConfirmationModal();

  const handlePress = (notification: NotificationResponse) => {
    if (!notification.isRead) markAsRead(notification.id);
  };

  const handleLongPress = (notification: NotificationResponse) => {
    const actions = [];

    if (!notification.isRead) {
      actions.push({
        label: "Mark as read",
        icon: ICONS.CHECK,
        onPress: () => markAsRead(notification.id),
      });
    }

    actions.push({
      label: "Delete notification",
      icon: ICONS.DELETE,
      isDestructive: true,
      onPress: () => {
        showConfirmation({
          title: "Delete Notification",
          message: "Are you sure you want to delete this notification?",
          variant: "error",
          onConfirm: () => deleteNotification(notification.id),
        });
      },
    });

    showMenu(actions);
  };

  return {
    query,
    handlePress,
    handleLongPress,
    bottomMenuProps,
    confirmationModalProps,
  };
};
