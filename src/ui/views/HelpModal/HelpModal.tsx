import './help-modal.styles.css';
import { Button, Modal } from '@src/ui/components';
import { useUIState } from '@src/ui/store';
import { MODAL_TEXTS } from './modal-texts';

type Props = {
  name: string;
}

export const HelpModal: React.FC<Props> = () => {
  const { showHelpModal, toggleHelpModal } = useUIState();

  return (
    <Modal show={showHelpModal}>
      <div className="help-modal">
        <h2 className="help-modal--title">{MODAL_TEXTS.title}</h2>
        <p>{MODAL_TEXTS.rule1}</p>
        <p>{MODAL_TEXTS.rule2}</p>
        <p>{MODAL_TEXTS.rule3}</p>
        <p>{MODAL_TEXTS.rule4}</p>
        <strong>{MODAL_TEXTS.example}</strong>
        <pre><code>{MODAL_TEXTS.example1}</code></pre>
        <p dangerouslySetInnerHTML={{__html: MODAL_TEXTS.example1_subtext}} />
        <pre><code>{MODAL_TEXTS.example2}</code></pre>
        <p dangerouslySetInnerHTML={{__html: MODAL_TEXTS.example2_subtext}} />
        <pre><code>{MODAL_TEXTS.example3}</code></pre>
        <p dangerouslySetInnerHTML={{__html: MODAL_TEXTS.example3_subtext}} />
        <p>{MODAL_TEXTS.rule4}</p>
        <p>{MODAL_TEXTS.message}</p>
        <Button onClick={() => toggleHelpModal(false)}>{MODAL_TEXTS.play}</Button>
      </div>
    </Modal>
  );
}
