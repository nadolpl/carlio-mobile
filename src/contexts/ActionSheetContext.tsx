import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ActionSheet, { MenuAction } from "components/organisms/actionSheet";
import { useModal } from "hooks/useModal";

interface ActionSheetContextType {
  showActionSheet: (actions: MenuAction[]) => void;
}

const ActionSheetContext = createContext<ActionSheetContextType | undefined>(undefined);

export const ActionSheetProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, open, close } = useModal();
  const [actions, setActions] = useState<MenuAction[]>([]);

  const showActionSheet = useCallback(
    (newActions: MenuAction[]) => {
      setActions(newActions);
      open();
    },
    [open],
  );

  const contextValue = useMemo(() => ({ showActionSheet }), [showActionSheet]);

  return (
    <ActionSheetContext.Provider value={contextValue}>
      {children}
      <ActionSheet visible={isOpen} onClose={close} actions={actions} />
    </ActionSheetContext.Provider>
  );
};

export const useActionSheet = () => {
  const context = useContext(ActionSheetContext);
  if (!context) throw new Error("useActionSheet must be used within an ActionSheetProvider");
  return context;
};
