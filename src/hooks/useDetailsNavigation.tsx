import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "components/atoms/iconButton";
import { ICONS } from "constants/icons";
import { colors } from "constants/colors";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

interface DetailsNavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  onEdit?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
}

export const useDetailsNavigation = ({
  navigation,
  onEdit,
  onDelete,
  showActions = true,
}: DetailsNavigationProps) => {
  useLayoutEffect(() => {
    if (!showActions || (!onEdit && !onDelete)) {
      navigation.setOptions({ headerRight: () => null });
      return;
    }

    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          {onEdit && <IconButton onPress={onEdit} icon={ICONS.EDIT} />}
          {onDelete && <IconButton onPress={onDelete} icon={ICONS.DELETE} color={colors.error} />}
        </View>
      ),
    });
  }, [navigation, onEdit, onDelete, showActions]);
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    gap: 16,
    marginRight: 10,
  },
});
