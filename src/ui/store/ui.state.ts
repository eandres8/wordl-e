import { create } from "zustand";

type TUIState = {
  isDarkTheme: boolean;
  showHelpModal: boolean;
  showScoreModal: boolean;
  toggleHelpModal: (value: boolean) => void;
  toggleScoreModal: (value: boolean) => void;
};

const createUIState = () =>
  create<TUIState>((set) => ({
    isDarkTheme: false,
    showHelpModal: false,
    showScoreModal: false,
    toggleHelpModal: (value) => set(() => ({ showHelpModal: value })),
    toggleScoreModal: (value) => set(() => ({ showScoreModal: value })),
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
