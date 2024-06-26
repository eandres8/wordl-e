/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppState, useTimerState, useUIState } from "@src/ui/store";

export const useInitAppState = () => {
  const {
    isFirstSignIn,
    toggleFirstSignIn,
    getIsFinishedAttempt,
    doUpdateScore,
    requestWord,
  } = useAppState();
  const { toggleHelpModal, toggleScoreModal } = useUIState();
  const { toggleTimerActive, timeLeft, stopTimer } = useTimerState();

  const _isFinished = getIsFinishedAttempt() || timeLeft === 0;

  useEffect(() => {
    if (timeLeft === 0) {
      toggleTimerActive(false);
      toggleScoreModal(true);
      stopTimer();
    }
  }, [timeLeft, toggleTimerActive]);

  useEffect(() => {
    if (isFirstSignIn) {
      toggleHelpModal(true);
      toggleFirstSignIn();
      requestWord();
    }
  }, [isFirstSignIn]);

  useEffect(() => {
    if (_isFinished) {
      toggleScoreModal(true);
      doUpdateScore();
      toggleTimerActive(false);
      stopTimer();
    }
  }, [_isFinished]);
};
