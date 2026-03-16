import { useCallback, useState } from "react";
import { MenuAction } from "components/molecules/moreMenuModal";
import { useModal } from "hooks/useModal";

export const useMoreMenuModal = () => {
  const { isOpen, open, close } = useModal();
  const [actions, setActions] = useState<MenuAction[]>([]);

  const show = useCallback((newActions: MenuAction[]) => {
    setActions(newActions);
    open();
  }, []);

  return {
    show,
    props: {
      visible: isOpen,
      onClose: close,
      actions,
    },
  };
};
