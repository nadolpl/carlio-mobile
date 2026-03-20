import PageableList from "components/organisms/pageableList";
import { NotificationResponse } from "models/response/NotificationResponse";
import NotificationCard from "./components/NotificationCard";
import { useNotificationList } from "screens/notifications/list/useNotificationList";
import EmptyState from "components/molecules/emptyState";
import { ICONS } from "constants/icons";

const NotificationListScreen = () => {
  const { query, handlePress, handleLongPress } = useNotificationList();

  const renderItem = ({ item }: { item: NotificationResponse }) => (
    <NotificationCard notification={item} onPress={handlePress} onLongPress={handleLongPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      listEmptyContainer={
        <EmptyState
          icon={ICONS.NOTIFICATION}
          title="No notifications found"
          description="You haven't received any notifications yet"
        />
      }
    />
  );
};

export default NotificationListScreen;
