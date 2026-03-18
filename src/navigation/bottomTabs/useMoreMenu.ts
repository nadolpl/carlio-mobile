import { useLogout } from "hooks/useLogout";
import { ICONS } from "constants/icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation/types";
import { useActionSheet } from "contexts/ActionSheetContext";

export const useMoreMenu = () => {
  const { showActionSheet } = useActionSheet();
  const { handleLogout } = useLogout();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        onPress: () => handleLogout(),
        icon: ICONS.LOGOUT,
        isDestructive: true,
      },
    ]);
  };

  return {
    openMoreMenu,
  };
};
