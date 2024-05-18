import './score-modal.styles.css';
import { SCORE_TEXTS } from "./score-texts";
import { Button, Modal, Timer } from "@src/ui/components";
import { useAppState, useUIState } from "@src/ui/store";

const _realWord = (word: string) => SCORE_TEXTS.real_word.replace(':value:', word);

export const ScoreModal: React.FC = () => {
  const { showScoreModal, isTimerActive, toggleScoreModal, toggleActiveTimer } = useUIState();
  const { getCurrentWord, getIsFinishedAttempt, attempts, won } = useAppState();

  const isFinishAttempt = getIsFinishedAttempt();
  const currentWord = getCurrentWord();

  return (
    <Modal show={showScoreModal}>
      <h2 className="modal-score-title">{SCORE_TEXTS.title}</h2>
      <div className="modal-scores">
        <div className="score">
          <span className="score-value">{attempts}</span>
          <span className="score-label">{SCORE_TEXTS.played}</span>
        </div>
        <div className="score">
          <span className="score-value">{won}</span>
          <span className="score-label">{SCORE_TEXTS.winners}</span>
        </div>
      </div>
      {
        isFinishAttempt && <p className="score-real-word" dangerouslySetInnerHTML={{ __html: _realWord(currentWord) }} />
      }
      <p className="score-next">{SCORE_TEXTS.next}</p>
      <strong><Timer isActive={isTimerActive} /></strong>
      <Button className="modal-score-button" onClick={() => {
        toggleScoreModal(false);
        toggleActiveTimer(true);
      }}>
        {SCORE_TEXTS.accept}
      </Button>
    </Modal>
  );
}
