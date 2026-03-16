import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import IconButton from "components/atoms/iconButton";
import Text from "components/atoms/text";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import { useGetUnreadNotificationsCount } from "api/hooks/notification";

const NotificationBell = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data: unreadCount } = useGetUnreadNotificationsCount();

  const handlePress = () => {
    navigation.navigate("NotificationList");
  };

  return (
    <>
      <IconButton icon={ICONS.NOTIFICATION} onPress={handlePress} />

      {unreadCount && unreadCount?.count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{unreadCount.count > 9 ? "9+" : unreadCount.count}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: colors.error,
    minWidth: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default NotificationBell;
