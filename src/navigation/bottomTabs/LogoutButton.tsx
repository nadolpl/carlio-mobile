import { useAuth } from "contexts/AuthContext";
import { ICONS } from "constants/icons";
import ConfirmationModal from "components/molecules/confirmationModal";
import IconButton from "components/atoms/iconButton";
import { useConfirmationModal } from "hooks/useConfirmationModal";

const LogoutButton = () => {
  const { showConfirmation, props } = useConfirmationModal();
  const { logout } = useAuth();

  const handleLogout = () => {
    showConfirmation({
      title: "Logout",
      message: "Are you sure you want to logout?",
      confirmText: "Logout",
      variant: "error",
      onConfirm: logout,
    });
  };

  return (
    <>
      <IconButton onPress={handleLogout} icon={ICONS.LOGOUT} />
      <ConfirmationModal {...props} />
    </>
  );
};

export default LogoutButton;
