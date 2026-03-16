import { useCallback, useState } from "react";
import { useModal } from "hooks/useModal";
import { MenuAction } from "components/molecules/bottomMenuModal";

export const useBottomMenuModal = () => {
  const { isOpen, open, close } = useModal();
  const [actions, setActions] = useState<MenuAction[]>([]);

  const showMenu = useCallback((newActions: MenuAction[]) => {
    setActions(newActions);
    open();
  }, []);

  return {
    showMenu,
    props: {
      visible: isOpen,
      onClose: close,
      actions,
    },
  };
};
