/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppState, useTimerState, useUIState } from "@src/ui/store";

export const useInitAppState = () => {
  const {
    isFirstSignIn,
    toggleFirstSignIn,
    setHideWord,
    getIsFinishedAttempt,
    doUpdateScore,
  } = useAppState();
  const { toggleHelpModal, toggleScoreModal } = useUIState();
  const { toggleTimerActive, timeLeft } = useTimerState();

  const _isFinished = getIsFinishedAttempt();

  useEffect(() => {
    if (timeLeft === 0) {
      toggleTimerActive(false);
      toggleScoreModal(true);
    }
  }, [timeLeft, toggleTimerActive]);

  useEffect(() => {
    if (isFirstSignIn) {
      toggleHelpModal(true);
      toggleFirstSignIn();
    }
  }, [isFirstSignIn]);

  useEffect(() => {
    // request first word
    setHideWord("perro");
  }, []);

  useEffect(() => {
    if (_isFinished) {
      toggleScoreModal(true);
      doUpdateScore();
      toggleTimerActive(false);
      // TODO: request new word
    }
  }, [_isFinished]);
};
