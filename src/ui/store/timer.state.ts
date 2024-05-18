/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { TIMER_TIME } from "@src/domain/constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const interval: Record<string, any> = {
  timer: null,
};

type TTimerState = {
  isTimerActive: boolean;
  timeLeft: number;
  toggleTimerActive: (value: boolean) => void;
  doReduceTime: () => void;
  resetTime: () => void;
  getIntervalInstance: () => any; // TODO: remove
  setIntervalInstance: (instance: any) => void; // TODO: remove
  initTimer: () => void;
  stopTimer: () => void;
  rebootTimer: () => void;
};

const createTimerState = () =>
  create<TTimerState>((set, get) => ({
    isTimerActive: false,
    timeLeft: TIMER_TIME,
    toggleTimerActive(value) {
      set(prev => ({ ...prev, isTimerActive: value }));
    },
    doReduceTime() {
      set(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
    },
    resetTime() {
      set(prev => ({ ...prev, timeLeft: TIMER_TIME }));
    },
    getIntervalInstance() {
      return interval.timer;
    },
    setIntervalInstance(instance) {
      interval.timer = instance;
    },
    initTimer() {
      get().setIntervalInstance(
        setInterval(() => get().doReduceTime(), 1000)
      );
    },
    stopTimer() {
      clearInterval(get().getIntervalInstance());
    },
    rebootTimer() {
      get().stopTimer();
      get().resetTime();
      get().initTimer();
    }
  }));

type TTimerStores = Record<string, ReturnType<typeof createTimerState>>;

const _uiStore: TTimerStores = {};

export const useTimerState = () => {
  const nameStore = "timer-state";

  if (!(nameStore in _uiStore)) {
    _uiStore[nameStore] = createTimerState();
  }

  return _uiStore[nameStore]();
};
