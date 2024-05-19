import "./help-modal.styles.css";
import { Button, Modal, Word } from "@src/ui/components";
import { useUIState } from "@src/ui/store";
import {
  MODAL_TEXTS,
  FIRST_MODA_MOCK,
  SECOND_MODA_MOCK,
  THIRD_MODA_MOCK,
} from "./modal-texts";

export const HelpModal: React.FC = () => {
  const { showHelpModal, toggleHelpModal } = useUIState();

  return (
    <Modal show={showHelpModal}>
      <h2 className="text-3xl font-extrabold">{MODAL_TEXTS.title}</h2>
      <p className="modal-text">{MODAL_TEXTS.rule1}</p>
      <p className="modal-text">{MODAL_TEXTS.rule2}</p>
      <p className="modal-text">{MODAL_TEXTS.rule3}</p>
      <p className="modal-text">{MODAL_TEXTS.rule4}</p>
      <strong className="modal-text bold">{MODAL_TEXTS.example}</strong>
      <Word value={FIRST_MODA_MOCK} />
      <p
        className="modal-text"
        dangerouslySetInnerHTML={{ __html: MODAL_TEXTS.example1_subtext }}
      />
      <Word value={SECOND_MODA_MOCK} />
      <p
        className="modal-text"
        dangerouslySetInnerHTML={{ __html: MODAL_TEXTS.example2_subtext }}
      />
      <Word value={THIRD_MODA_MOCK} />
      <p
        className="modal-text"
        dangerouslySetInnerHTML={{ __html: MODAL_TEXTS.example3_subtext }}
      />
      <p className="modal-text">{MODAL_TEXTS.rule4}</p>
      <p className="text-center modal-text">{MODAL_TEXTS.message}</p>
      <Button
        className="modal-button text-2xl"
        onClick={() => toggleHelpModal(false)}
      >
        {MODAL_TEXTS.play}
      </Button>
    </Modal>
  );
};
