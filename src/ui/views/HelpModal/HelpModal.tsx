import './help-modal.styles.css';
import { Button, Modal } from '@src/ui/components';
import { useUIState } from '@src/ui/store';

type Props = {
  name: string;
}

export const HelpModal: React.FC<Props> = () => {
  const { showHelpModal, toggleHelpModal } = useUIState();

  return (
    <Modal show={showHelpModal}>
      <div>HelpModal</div>
      <Button onClick={() => toggleHelpModal(false)}>Aceptar</Button>
    </Modal>
  );
}
