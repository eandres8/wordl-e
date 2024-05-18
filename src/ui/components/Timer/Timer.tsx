import { useEffect } from "react";

import { formatTime } from "@src/data/helpers/date-format";
import { useTimerState } from "@src/ui/store";

type Props = {
  isActive: boolean;
};

export const Timer: React.FC<Props> = ({ isActive }) => {
  const {
    timeLeft,
    initTimer,
    stopTimer
  } = useTimerState();
  // @remove
  console.log({ timeLeft });

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      initTimer();
    } else if (timeLeft === 0) {
      stopTimer();
    }

    return () => stopTimer();
  }, [isActive, timeLeft]);

  return <span className="text-2xl font-semibold">{formatTime(timeLeft)}</span>;
};
