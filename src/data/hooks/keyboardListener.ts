/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAppState } from "@src/ui/store";

export function useKeyboardListener() {
  const { setLetter, removeLetter } = useAppState();

  const keyDownHandler = (e: globalThis.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      removeLetter()
    }

    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
      setLetter(e.key);
      return;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
}
