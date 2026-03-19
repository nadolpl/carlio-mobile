import { ScheduleResponse } from "models/response/ScheduleResponse";
import { useEffect } from "react";
import { notificationService } from "services/NotificationService";
import { formatDateArrayToDate } from "utils/date";

export const useSyncScheduleNotifications = (schedules?: ScheduleResponse[]) => {
  useEffect(() => {
    if (!schedules || schedules.length === 0) return;

    const syncNotifications = async () => {
      try {
        const notificationPromises = schedules.map(async (schedule) => {
          if (!schedule.active || !schedule.nextDueDate)
            return notificationService.cancelNotification(schedule.id);

          const dueDate = formatDateArrayToDate(schedule.nextDueDate);

          if (dueDate && dueDate > new Date())
            return notificationService.scheduleLocalNotification({
              id: schedule.id,
              title: schedule.name,
              body: `Time to perform scheduled task!`,
              data: { scheduleId: schedule.id },
              trigger: { date: dueDate },
            });
        });

        await Promise.allSettled(notificationPromises);
      } catch {
        console.error("Error syncing notifications");
      }
    };
    void syncNotifications();
  }, [schedules]);
};
