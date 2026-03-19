import { useLogout } from "hooks/useLogout";
import { ICONS } from "constants/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useActionSheet } from "contexts/ActionSheetContext";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";

export const useMoreMenu = () => {
  const { showConfirmation } = useConfirmationModal();
  const { showActionSheet } = useActionSheet();
  const { handleLogout } = useLogout();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogoutWithConfirmation = () => {
    showConfirmation({
      title: "Logout",
      message: "Are you sure you want to logout?",
      confirmText: "Logout",
      variant: "error",
      onConfirm: handleLogout,
    });
  };

  const openMoreMenu = () => {
    showActionSheet([
      {
        label: "Documents",
        onPress: () => navigation.navigate("DocumentList"),
        icon: ICONS.DOCUMENT,
      },
      {
        label: "Parts",
        onPress: () => navigation.navigate("PartList"),
        icon: ICONS.PART,
      },
      {
        label: "Logout",
        onPress: handleLogoutWithConfirmation,
        icon: ICONS.LOGOUT,
        isDestructive: true,
      },
    ]);
  };

  return {
    openMoreMenu,
  };
};
