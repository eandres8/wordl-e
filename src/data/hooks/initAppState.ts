/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppState, useUIState } from "@src/ui/store";

export const useInitAppState = () => {
  const {
    isFirstSignIn,
    toggleFirstSignIn,
    setHideWord,
    getIsFinishedAttempt,
    doUpdateScore,
  } = useAppState();
  const { toggleHelpModal, toggleScoreModal } = useUIState();

  const _isFinished = getIsFinishedAttempt();


  useEffect(() => {
    if (isFirstSignIn) {
      toggleHelpModal(true);
      toggleFirstSignIn();
    }
  }, [isFirstSignIn]);

  useEffect(() => {
    setHideWord("perro");
  }, []);

  useEffect(() => {
    if (_isFinished) {
      toggleScoreModal(true);
      doUpdateScore();
      // TODO: request new word
    }
  }, [_isFinished]);
};
