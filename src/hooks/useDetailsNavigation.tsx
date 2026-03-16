import { ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import { useNavigationHeader } from "hooks/useNavigationHeader";

interface UseDetailsNavigationProps {
  onEdit?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
  extraActions?: ReactNode;
}

export const useDetailsNavigation = ({
  onEdit,
  onDelete,
  showActions = true,
  extraActions
}: UseDetailsNavigationProps) => {
  const renderHeaderRight = useCallback(() => {
    if (!showActions || (!onEdit && !onDelete && !extraActions)) return null;

    return (
      <View style={styles.headerRight}>
        {onEdit && <IconButton onPress={onEdit} icon={ICONS.EDIT} />}
        {onDelete && <IconButton onPress={onDelete} icon={ICONS.DELETE} color={colors.error} />}
        {extraActions}
      </View>
    );
  }, [onEdit, onDelete, showActions, extraActions]);

  useNavigationHeader({ renderHeaderRight });
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    gap: 16,
    marginRight: 10,
  },
});
