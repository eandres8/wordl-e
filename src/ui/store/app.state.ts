import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NUMBER_LETTERS, MAX_ATTEMPTS } from "@src/domain/constants/init-attempt";

type TAppState = {
  isFirstSignIn: boolean;
  inputText: string;
  attemptList: string[];
  wordHistory: string[];
  attempts: number;
  won: number;
  toggleFirstSignIn: () => void;
  setLetter: (letter: string) => void;
  removeLetter: () => void;
  setAttempt: (word: string) => void;
  getCurrentWord: () => string;
  getIsFinishedAttempt: () => boolean;
  setHideWord: (newWord: string) => void;
  getDoMatchWord: () => boolean;
  doUpdateScore: () => void;
};

const createAppState = () =>
  create(
    persist<TAppState>(
      (set, get) => ({
        isFirstSignIn: true,
        inputText: "",
        attemptList: [],
        wordHistory: [],
        attempts: 0,
        won: 0,
        toggleFirstSignIn() {
          set((prev) => ({ ...prev, isFirstSignIn: false }))
        },
        setLetter(letter) {
          const oldInput = get().inputText;
          const newText = oldInput + letter;

          set((prev) => ({
            ...prev,
            inputText: newText.length < NUMBER_LETTERS ? newText : "",
          }));
          get().setAttempt(newText);
        },
        removeLetter() {
          set(prev => ({ ...prev, inputText: prev.inputText.slice(0, -1) }));
        },
        setAttempt(word) {
          if (word.length < 5) {
            return;
          }

          if (get().attemptList.length === MAX_ATTEMPTS) {
            return;
          }

          set((prev) => ({
            ...prev,
            attemptList: [...prev.attemptList, word],
          }));
        },
        getCurrentWord: () => get().wordHistory.at(-1) ?? "",
        getIsFinishedAttempt() {
          return (
            get().getDoMatchWord() ||
            get().attemptList.length === MAX_ATTEMPTS
          );
        },
        setHideWord(word){
          set(prev => ({ ...prev, wordHistory: [...prev.wordHistory, word] }))
        },
        getDoMatchWord: () => get().getCurrentWord() === get().attemptList.at(-1),
        doUpdateScore() {
          const isWinner = get().getDoMatchWord();

          set(prev => ({
            ...prev,
            attempts: prev.attempts + 1,
            won: isWinner ? prev.won + 1 : prev.won,
            attemptList: [],
          }));
        },
      }),
      {
        name: "app-state",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

type TAppStores = Record<string, ReturnType<typeof createAppState>>;

const _appStore: TAppStores = {};

export const useAppState = () => {
  const nameStore = "app-state";

  if (!(nameStore in _appStore)) {
    _appStore[nameStore] = createAppState();
  }

  return _appStore[nameStore]();
};
