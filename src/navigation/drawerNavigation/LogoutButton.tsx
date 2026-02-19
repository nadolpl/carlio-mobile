import { DrawerItem } from "@react-navigation/drawer";
import { useAuth } from "contexts/AuthContext";
import Icon from "components/atoms/icon";
import { ICONS } from "constants/icons";
import { useState } from "react";
import ConfirmationModal from "components/molecules/confirmationModal";

const LogoutButton = () => {
  const [visible, setVisible] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      <DrawerItem
        label="Logout"
        icon={({ size, color }) => (
          <Icon name={ICONS.LOGOUT} color={color} size={size} />
        )}
        onPress={() => setVisible(true)}
      />

      <ConfirmationModal
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        visible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={logout}
      />
    </>
  );
};

export default LogoutButton;
