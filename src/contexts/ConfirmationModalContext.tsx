import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ConfirmationModal, {
  ConfirmationModalVariant,
} from "components/molecules/confirmationModal";
import { useModal } from "hooks/useModal";

interface ConfirmationModalOptions {
  title: string;
  message: string;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  variant?: ConfirmationModalVariant;
}

interface ConfirmationModalContextType {
  showConfirmation: (options: ConfirmationModalOptions) => void;
}

const ConfirmationModalContext = createContext<ConfirmationModalContextType | undefined>(undefined);

export const ConfirmationModalProvider = ({ children }: PropsWithChildren) => {
  const { isOpen, open, close } = useModal();
  const [options, setOptions] = useState<ConfirmationModalOptions | null>(null);

  const showConfirmation = useCallback(
    (options: ConfirmationModalOptions) => {
      setOptions(options);
      open();
    },
    [open],
  );

  const handleConfirm = useCallback(() => {
    if (options?.onConfirm) options.onConfirm();
    close();
  }, [options, close]);

  const contextValue = useMemo(() => ({ showConfirmation }), [showConfirmation]);

  return (
    <ConfirmationModalContext.Provider value={contextValue}>
      {children}

      <ConfirmationModal
        visible={isOpen}
        onCancel={close}
        onConfirm={handleConfirm}
        title={options?.title || ""}
        message={options?.message || ""}
        cancelText={options?.cancelText}
        confirmText={options?.confirmText}
        variant={options?.variant}
      />
    </ConfirmationModalContext.Provider>
  );
};

export const useConfirmationModal = () => {
  const context = useContext(ConfirmationModalContext);
  if (!context)
    throw new Error("useConfirmationModal must be used within ConfirmationModalProvider");
  return context;
};
