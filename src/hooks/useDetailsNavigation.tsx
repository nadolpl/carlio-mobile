import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import { useNavigationHeader } from "hooks/useNavigationHeader";

interface UseDetailsNavigationProps {
  onEdit?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
}

export const useDetailsNavigation = ({
  onEdit,
  onDelete,
  showActions = true,
}: UseDetailsNavigationProps) => {
  const renderHeaderRight = useCallback(() => {
    if (!showActions || (!onEdit && !onDelete)) return null;

    return (
      <View style={styles.headerRight}>
        {onEdit && <IconButton onPress={onEdit} icon={ICONS.EDIT} />}
        {onDelete && <IconButton onPress={onDelete} icon={ICONS.DELETE} color={colors.error} />}
      </View>
    );
  }, [onEdit, onDelete, showActions]);

  useNavigationHeader({ renderHeaderRight });
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    gap: 16,
    marginRight: 10,
  },
});
