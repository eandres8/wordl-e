import { create } from "zustand";

type TUIState = {
  isDarkTheme: boolean;
  showHelpModal: boolean;
  showScoreModal: boolean;
  toggleHelpModal: (value: boolean) => void;
  toggleScoreModal: (value: boolean) => void;
  toggleDarkTheme: (value: boolean) => void;
};

const createUIState = () =>
  create<TUIState>((set) => ({
    isDarkTheme: false,
    showHelpModal: false,
    showScoreModal: false,
    toggleHelpModal: (showHelpModal) => set(() => ({ showHelpModal })),
    toggleScoreModal: (showScoreModal) => set(() => ({ showScoreModal })),
    toggleDarkTheme: (isDarkTheme) => set(() => ({ isDarkTheme })),
  }));

type TUIStores = Record<string, ReturnType<typeof createUIState>>;

const _uiStore: TUIStores = {};

export const useUIState = () => {
  const nameStore = "ui-state";

  if (!(nameStore in _uiStore)) {
    _uiStore[nameStore] = createUIState();
  }

  return _uiStore[nameStore]();
};
