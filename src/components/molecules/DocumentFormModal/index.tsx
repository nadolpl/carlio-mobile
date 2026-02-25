import DocumentForm from "components/organisms/forms/DocumentForm";
import { useDocumentForm } from "hooks/useDocumentForm";
import Modal from "components/atoms/modal";

interface DocumentFormModalProps {
  visible: boolean;
  onClose: () => void;
  vehicleId?: string;
  sourceId?: string;
}

const DocumentFormModal = ({ visible, onClose, vehicleId, sourceId }: DocumentFormModalProps) => {
  const { control, handleSubmit, submitDisabled } = useDocumentForm({
    initialVehicleId: vehicleId,
    sourceId,
    onSuccess: onClose,
  });

  return (
    <Modal visible={visible} onClose={onClose}>
      <DocumentForm
        control={control}
        handleSubmit={handleSubmit}
        submitDisabled={submitDisabled}
        hideVehicleSelect={!!vehicleId}
        isModal
      />
    </Modal>
  );
};

export default DocumentFormModal;
