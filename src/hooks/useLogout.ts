import { useAuth } from "contexts/AuthContext";
import { useConfirmationModal } from "contexts/ConfirmationModalContext";

export const useLogout = () => {
  const { showConfirmation } = useConfirmationModal();
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
  };
};
