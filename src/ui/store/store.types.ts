export type TAppState = {
    isFirstSignIn: boolean;
    inputText: string;
    hidenWordHistory: string[],
    wordList: string[];
    attempts: number;
    won: number;
    toggleFirstSignIn: () => void;
    setLetter: (letter: string) => void;
  };