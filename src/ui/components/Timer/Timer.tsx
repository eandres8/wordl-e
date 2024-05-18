import { useState, useRef, useEffect } from "react";

import { formatTime } from "@src/data/helpers/date-format";

type Props = {
  isActive: boolean;
}

export const Timer: React.FC<Props> = ({ isActive }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log(timeLeft);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  return (
    <span>{formatTime(timeLeft)}</span>
  );
}
