import { useState } from "react";

interface ConfirmationModalOptions {
  title: string;
  message: string;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

export const useConfirmationModal = () => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<ConfirmationModalOptions | null>(null);

  const showConfirmation = (config: ConfirmationModalOptions) => {
    setOptions(config);
    setVisible(true);
  };

  const onCancel = () => setVisible(false);

  const onConfirm = () => {
    options?.onConfirm();
    onCancel();
  };

  return {
    showConfirmation,
    props: {
      visible,
      onCancel,
      onConfirm,
      title: options?.title || "",
      message: options?.message || "",
      cancelText: options?.cancelText,
      confirmText: options?.confirmText,
    },
  };
};
