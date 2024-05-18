import {
  TWordOption,
  TWordOptonStatus,
} from "@src/domain/types/word-option.type";
import { useAppState } from "@src/ui/store";
import { NUMBER_LETTERS, MAX_ATTEMPTS } from "../../domain/constants/init-attempt";

const LIMIT_ATTEMPTS = MAX_ATTEMPTS - 1;

export const useWordMapping = () => {
  const { attemptList, inputText, getCurrentWord } = useAppState();
  const currentWord = getCurrentWord();

  const _partialStatus = (word: string): TWordOption[] => {
    const letters = word.split("");
    const newLetters = [
      ...letters,
      ...Array(NUMBER_LETTERS - letters.length).map(() => ""),
    ];

    return newLetters.map((letter) => ({ letter, status: "EMPTY" }));
  };

  const _letterStatus = (letter: string, index: number): TWordOption => {
    let status: TWordOptonStatus = "EMPTY";

    if (currentWord[index]?.toUpperCase() === letter.toUpperCase()) {
      status = "SUCCESS";
    } else if (currentWord.includes(letter)) {
      status = "WRONG_POSITION";
    } else {
      status = "NOT_EXIST";
    }

    return {
      letter,
      status,
    };
  };

  const buildAttemptList = () => {
    return [
      ...attemptList.map(mapToWordOption),
      ...(attemptList.length < MAX_ATTEMPTS
        ? [mapToWordOption(inputText)]
        : []),
      ...(attemptList.length < LIMIT_ATTEMPTS
        ? [...Array(LIMIT_ATTEMPTS - attemptList.length)].map(() =>
            mapToWordOption("")
          )
        : []),
    ];
  };

  const mapToWordOption = (word: string): TWordOption[] => {
    const letters = word.split("");

    if (letters.length < NUMBER_LETTERS) {
      return _partialStatus(word);
    }

    return letters.map(_letterStatus);
  };

  return {
    buildAttemptList,
  };
};
