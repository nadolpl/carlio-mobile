import { useAuth } from "contexts/AuthContext";
import { ICONS } from "constants/icons";
import ConfirmationModal from "components/molecules/confirmationModal";
import { useModal } from "hooks/useModal";
import IconButton from "components/atoms/iconButton";

const LogoutButton = () => {
  const { isOpen, toggle } = useModal();
  const { logout } = useAuth();

  return (
    <>
      <IconButton onPress={toggle} icon={ICONS.LOGOUT} />
      <ConfirmationModal
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        visible={isOpen}
        onCancel={toggle}
        onConfirm={logout}
      />
    </>
  );
};

export default LogoutButton;
