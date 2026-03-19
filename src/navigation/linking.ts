import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "navigation/types";

const SCHEDULE = "schedules";

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    initialRouteName: "BottomTabs",
    screens: {
      ScheduleDetails: `${SCHEDULE}/:scheduleId`,
    },
  },

  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (url != null) return url;

    await new Promise((resolve) => setTimeout(resolve, 200));

    const response = Notifications.getLastNotificationResponse();
    const scheduleId = response?.notification.request.content.data?.scheduleId;

    if (scheduleId) return Linking.createURL(`${SCHEDULE}/${scheduleId}`);

    return null;
  },

  subscribe(listener: (url: string) => void) {
    const eventListenerSub = Linking.addEventListener("url", ({ url }) => listener(url));

    const notificationSubscription = Notifications.addNotificationResponseReceivedListener(
      ({ notification }) => {
        const scheduleId = notification.request.content.data?.scheduleId;
        if (scheduleId) listener(Linking.createURL(`${SCHEDULE}/${scheduleId}`));
      },
    );

    return () => {
      eventListenerSub.remove();
      notificationSubscription.remove();
    };
  },
};
