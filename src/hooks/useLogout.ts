import { useConfirmationModal } from "hooks/useConfirmationModal";
import { useAuth } from "contexts/AuthContext";

export const useLogout = () => {
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

  return {
    handleLogout,
    confirmationModalProps: props,
  };
};
