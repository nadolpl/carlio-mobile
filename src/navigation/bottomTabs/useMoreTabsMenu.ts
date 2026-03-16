import { useBottomMenuModal } from "hooks/useBottomMenuModal";
import { useLogout } from "hooks/useLogout";
import { ICONS } from "constants/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";

export const useMoreTabsMenu = () => {
  const { showMenu, props: moreMenuProps } = useBottomMenuModal();
  const { handleLogout, confirmationModalProps } = useLogout();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOpenMoreMenu = () => {
    showMenu([
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
        onPress: () => handleLogout(),
        icon: ICONS.LOGOUT,
        isDestructive: true,
      },
    ]);
  };

  return {
    handleOpenMoreMenu,
    moreMenuProps,
    confirmationModalProps,
  };
};
