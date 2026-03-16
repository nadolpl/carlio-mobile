import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { useNavigationHeader } from "hooks/useNavigationHeader";
import NotificationBell from "components/molecules/notificationBell";

interface ListNavigationProps {
  onPressAdd: () => void;
}

export const useListNavigation = ({ onPressAdd }: ListNavigationProps) => {
  const renderHeaderRight = useCallback(
    () => (
      <View style={styles.rightContainer}>
        <IconButton onPress={onPressAdd} icon={ICONS.ADD} />
        <NotificationBell />
      </View>
    ),
    [onPressAdd],
  );

  useNavigationHeader({ renderHeaderRight });
};

const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
