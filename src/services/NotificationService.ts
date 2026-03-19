import * as Notifications from "expo-notifications";

interface LocalNotificationData extends Record<string, unknown> {
  scheduleId?: string;
}

type SimpleTrigger = { seconds: number } | { date: Date };

interface LocalNotificationPayload {
  id: string;
  title: string;
  body: string;
  data?: LocalNotificationData;
  trigger: SimpleTrigger;
}

class NotificationService {
  constructor() {
    this.configure();
  }

  private configure = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowBanner: true,
        shouldShowList: true,
      }),
    });
  };

  private calculateTrigger = (trigger: SimpleTrigger): Notifications.NotificationTriggerInput => {
    if ("seconds" in trigger)
      return {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: trigger.seconds,
      };
    else
      return {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: trigger.date,
      };
  };

  requestPermissionsAsync = async () => {
    const { granted } = await Notifications.getPermissionsAsync();
    if (!granted) await Notifications.requestPermissionsAsync();
  };

  scheduleLocalNotification = async ({
    id,
    body,
    title,
    trigger,
    data,
  }: LocalNotificationPayload) => {
    try {
      return await Notifications.scheduleNotificationAsync({
        identifier: id,
        content: { body, title, data },
        trigger: this.calculateTrigger(trigger),
      });
    } catch (error) {
      console.error("Error scheduling local notification:", error);
      throw error;
    }
  };

  cancelAllNotifications = () => Notifications.cancelAllScheduledNotificationsAsync();

  cancelNotification = (id: string) => Notifications.cancelScheduledNotificationAsync(id);
}

export const notificationService = new NotificationService();
