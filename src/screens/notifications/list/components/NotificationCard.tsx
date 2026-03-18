import { Pressable, StyleSheet, View } from "react-native";
import Text from "components/atoms/text";
import Icon from "components/atoms/icon";
import { ICONS } from "constants/icons";
import { colors, withAlpha } from "constants/colors";
import { NotificationResponse } from "models/response/NotificationResponse";
import { formatDateArray } from "utils/date";
import { commonStyles } from "utils/styles";

interface NotificationCardProps {
  notification: NotificationResponse;
  onPress: (notification: NotificationResponse) => void;
  onLongPress: (notification: NotificationResponse) => void;
}

const NotificationCard = ({ notification, onPress, onLongPress }: NotificationCardProps) => {
  const { title, message, sentAt, isRead } = notification;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        !isRead && styles.unreadContainer,
        pressed && commonStyles.pressed,
      ]}
      onPress={() => onPress(notification)}
      onLongPress={() => onLongPress(notification)}
    >
      <View style={[styles.iconContainer, !isRead && styles.unreadIconContainer]}>
        <Icon name={ICONS.NOTIFICATION} color={!isRead ? colors.primary : colors.textSecondary} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {!isRead && <View style={styles.unreadDot} />}
        </View>

        <Text style={styles.message} numberOfLines={2}>
          {message}
        </Text>

        <Text style={styles.timeText}>{formatDateArray(sentAt)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: colors.background800,
    borderRadius: 16,
  },
  unreadContainer: {
    backgroundColor: withAlpha(colors.primary, 0.1),
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: colors.background700,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  unreadIconContainer: {
    backgroundColor: withAlpha(colors.primary, 0.2),
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontWeight: "500",
    flex: 1,
    paddingRight: 8,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  message: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  timeText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default NotificationCard;
