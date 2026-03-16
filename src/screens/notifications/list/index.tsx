import PageableList from "components/organisms/pageableList";
import { NotificationResponse } from "models/response/NotificationResponse";
import NotificationCard from "./components/NotificationCard";
import { useNotificationList } from "screens/notifications/list/useNotificationList";

const NotificationListScreen = () => {
  const { query, handlePress, handleLongPress, bottomMenuProps, confirmationModalProps } =
    useNotificationList();

  const renderItem = ({ item }: { item: NotificationResponse }) => (
    <NotificationCard notification={item} onPress={handlePress} onLongPress={handleLongPress} />
  );

  return (
    <PageableList
      renderItem={renderItem}
      query={query}
      bottomMenuProps={bottomMenuProps}
      confirmationModalProps={confirmationModalProps}
    />
  );
};

export default NotificationListScreen;
