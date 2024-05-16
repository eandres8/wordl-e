import { create } from "zustand";

type TAppState = {
  isFirstSignIn: boolean;
};

const createAppState = () =>
  create<TAppState>(() => ({
    isFirstSignIn: true,
  }));

type TAppStores = Record<string, ReturnType<typeof createAppState>>;

const _appStore: TAppStores = {};

export const useAppState = () => {
  const nameStore = "app-state";

  if (!(nameStore in _appStore)) {
    _appStore[nameStore] = createAppState();
  }

  return _appStore[nameStore]();
};
