import { useCallback, useState } from "react";
import { useModal } from "./useModal";
import { ConfirmationModalVariant } from "components/molecules/confirmationModal";

export interface ConfirmationModalOptions {
  title: string;
  message: string;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  variant?: ConfirmationModalVariant;
}

export const useConfirmationModal = () => {
  const { isOpen, open, close } = useModal();

  const [options, setOptions] = useState<ConfirmationModalOptions | null>(null);

  const showConfirmation = useCallback(
    (config: ConfirmationModalOptions) => {
      setOptions(config);
      open();
    },
    [open],
  );

  const handleConfirm = useCallback(() => {
    if (options?.onConfirm) options.onConfirm();
    close();
  }, [options, close]);

  return {
    showConfirmation,
    hideConfirmation: close,
    props: {
      visible: isOpen,
      onCancel: close,
      onConfirm: handleConfirm,
      title: options?.title || "",
      message: options?.message || "",
      cancelText: options?.cancelText,
      confirmText: options?.confirmText,
      variant: options?.variant,
    },
  };
};
